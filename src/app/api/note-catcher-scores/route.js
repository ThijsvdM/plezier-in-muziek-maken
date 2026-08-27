import { promises as fs } from "node:fs";
import path from "node:path";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const SCORE_FILE = path.join(process.cwd(), "src", "data", "note-catcher-scores.json");
const MAX_STORED_SCORES = 250;
const MAX_NAME_LENGTH = 24;
const MAX_ACCOUNT_ID_LENGTH = 80;

const sanitizeName = (value) => {
  if (typeof value !== "string") return "Onbekend";
  const compact = value.replace(/\s+/g, " ").trim();
  if (!compact) return "Onbekend";
  return compact.slice(0, MAX_NAME_LENGTH);
};

const sanitizeScore = (value) => {
  if (typeof value !== "number" || !Number.isFinite(value)) return 0;
  const rounded = Math.floor(value);
  return Math.max(0, Math.min(99999, rounded));
};

const sanitizeAccountId = (value) => {
  if (typeof value !== "string") return "anonymous";
  const compact = value.replace(/\s+/g, "").trim().toLowerCase();
  if (!compact) return "anonymous";
  return compact.slice(0, MAX_ACCOUNT_ID_LENGTH);
};

const sortScores = (scores) =>
  [...scores].sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
  });

const getTopFive = (scores) => sortScores(scores).slice(0, 5);

const getBestPerAccount = (scores) => {
  const bestByAccount = new Map();

  for (const entry of scores) {
    const previous = bestByAccount.get(entry.accountId);

    if (!previous) {
      bestByAccount.set(entry.accountId, entry);
      continue;
    }

    if (entry.score > previous.score) {
      bestByAccount.set(entry.accountId, entry);
      continue;
    }

    if (entry.score === previous.score) {
      const prevTime = new Date(previous.createdAt).getTime();
      const nextTime = new Date(entry.createdAt).getTime();
      if (nextTime < prevTime) {
        bestByAccount.set(entry.accountId, entry);
      }
    }
  }

  return sortScores([...bestByAccount.values()]);
};

const readScores = async () => {
  try {
    const raw = await fs.readFile(SCORE_FILE, "utf8");
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];

    return parsed
      .map((item, index) => ({
        accountId: sanitizeAccountId(item?.accountId || `legacy:${index}:${item?.createdAt || ""}`),
        name: sanitizeName(item?.name),
        score: sanitizeScore(item?.score),
        createdAt: typeof item?.createdAt === "string" ? item.createdAt : new Date().toISOString(),
      }))
      .filter((item) => item.accountId && item.name && Number.isFinite(item.score));
  } catch (error) {
    if (error?.code === "ENOENT") {
      await fs.mkdir(path.dirname(SCORE_FILE), { recursive: true });
      await fs.writeFile(SCORE_FILE, "[]\n", "utf8");
      return [];
    }

    throw error;
  }
};

const writeScores = async (scores) => {
  await fs.writeFile(SCORE_FILE, `${JSON.stringify(scores, null, 2)}\n`, "utf8");
};

const noStoreJson = (payload, status = 200) =>
  Response.json(payload, {
    status,
    headers: {
      "Cache-Control": "no-store, no-cache, must-revalidate",
    },
  });

export async function GET() {
  try {
    const scores = await readScores();
    const bestPerAccount = getBestPerAccount(scores);
    return noStoreJson({ leaderboard: getTopFive(bestPerAccount) });
  } catch {
    return noStoreJson({ message: "Kon scorebord niet laden." }, 500);
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const accountId = sanitizeAccountId(body?.accountId);

    if (!accountId.startsWith("user:")) {
      return noStoreJson({ message: "Je moet ingelogd zijn om scores op te slaan." }, 401);
    }

    const newScore = {
      accountId,
      name: sanitizeName(body?.name),
      score: sanitizeScore(body?.score),
      createdAt: new Date().toISOString(),
    };

    const currentScores = getBestPerAccount(await readScores());
    const withoutCurrentAccount = currentScores.filter((entry) => entry.accountId !== newScore.accountId);
    const previousBest = currentScores.find((entry) => entry.accountId === newScore.accountId);

    const bestForAccount =
      previousBest && previousBest.score >= newScore.score
        ? previousBest
        : newScore;

    const updatedScores = sortScores([bestForAccount, ...withoutCurrentAccount]).slice(0, MAX_STORED_SCORES);

    await writeScores(updatedScores);

    return noStoreJson({ leaderboard: getTopFive(updatedScores) });
  } catch {
    return noStoreJson({ message: "Kon score niet opslaan." }, 500);
  }
}
