import { promises as fs } from "node:fs";
import os from "node:os";
import path from "node:path";

export const SESSION_COOKIE_NAME = "music_session";

const resolveDataDirectory = () => {
  const configured = process.env.MUSIC_DATA_DIR?.trim();
  if (configured) return configured;

  // Vercel deployments run from a read-only code bundle.
  // Without an external writable volume, only /tmp is writable.
  if (process.env.VERCEL) {
    return path.join("/tmp", "plezier-in-muziek-maken-data");
  }

  // IMPORTANT: never keep mutable account/agenda data in src/data by default.
  // App updates or re-deployments can replace repository files.
  return path.join(os.homedir(), ".plezier-in-muziek-maken-data");
};

const DATA_DIR = resolveDataDirectory();
const LEGACY_DATA_DIR = path.join(process.cwd(), "src", "data");
const USERS_FILE = path.join(DATA_DIR, "users.json");
const EVENTS_FILE = path.join(DATA_DIR, "agenda-events.json");
const LEGACY_USERS_FILE = path.join(LEGACY_DATA_DIR, "users.json");
const LEGACY_EVENTS_FILE = path.join(LEGACY_DATA_DIR, "agenda-events.json");

const DEFAULT_USERS = [
  {
    username: "leerling",
    password: "muziek123",
    maxUnlockedLesson: 5,
    submissionAddress: "",
  },
  {
    username: "docent",
    password: "drummen",
    maxUnlockedLesson: 10,
    submissionAddress: "",
  },
];

const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

const toIsoDateString = (value) => {
  if (typeof value !== "string") return "";
  const trimmed = value.trim();

  if (/^\d{4}-\d{2}-\d{2}$/.test(trimmed)) {
    return trimmed;
  }

  const legacyMatch = trimmed.match(/^(\d{2})-(\d{2})-(\d{4})$/);
  if (legacyMatch) {
    const [, day, month, year] = legacyMatch;
    return `${year}-${month}-${day}`;
  }

  return "";
};

const normalizeUsername = (value) => {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, 48);
};

const normalizePassword = (value) => {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, 120);
};

const normalizeSubmissionAddress = (value) => {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, 300);
};

const normalizeUser = (user) => {
  const username = normalizeUsername(user?.username);
  const password = normalizePassword(user?.password);
  const fallbackUnlock = username === "docent" ? 10 : 5;

  return {
    username,
    password,
    maxUnlockedLesson: clamp(
      Number.isFinite(Number(user?.maxUnlockedLesson)) ? Number(user.maxUnlockedLesson) : fallbackUnlock,
      1,
      10
    ),
    submissionAddress: normalizeSubmissionAddress(user?.submissionAddress),
  };
};

const normalizeEventTime = (value) => {
  if (typeof value !== "string") return "00:00";
  const trimmed = value.trim();
  return /^\d{2}:\d{2}$/.test(trimmed) ? trimmed : "00:00";
};

const normalizeEvent = (event) => {
  const normalizedDate = toIsoDateString(event?.date);
  return {
    id: Number.isFinite(Number(event?.id)) ? Number(event.id) : Date.now(),
    title: typeof event?.title === "string" ? event.title.trim().slice(0, 120) : "",
    date: normalizedDate,
    time: normalizeEventTime(event?.time),
    note: typeof event?.note === "string" ? event.note.trim().slice(0, 500) : "",
    assignedTo: normalizeUsername(event?.assignedTo),
  };
};

const sortEventsByDateTime = (items) =>
  [...items].sort((a, b) => {
    if (a.date === b.date) return a.time.localeCompare(b.time);
    return a.date.localeCompare(b.date);
  });

const ensureFile = async (filePath, initialValue) => {
  try {
    await fs.access(filePath);
  } catch {
    await fs.mkdir(path.dirname(filePath), { recursive: true });
    await fs.writeFile(filePath, `${JSON.stringify(initialValue, null, 2)}\n`, "utf8");
  }
};

const ensureFileWithLegacyMigration = async (filePath, legacyFilePath, initialValue) => {
  try {
    await fs.access(filePath);
    return;
  } catch {
    // Target file does not exist yet.
  }

  await fs.mkdir(path.dirname(filePath), { recursive: true });

  try {
    await fs.access(legacyFilePath);
    await fs.copyFile(legacyFilePath, filePath);
    return;
  } catch {
    // Legacy file is not present; fall back to initial defaults.
  }

  await ensureFile(filePath, initialValue);
};

const readJsonArray = async (filePath, fallback) => {
  await ensureFile(filePath, fallback);
  try {
    const raw = await fs.readFile(filePath, "utf8");
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : fallback;
  } catch {
    await writeJsonArray(filePath, fallback);
    return fallback;
  }
};

const writeJsonArray = async (filePath, value) => {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, `${JSON.stringify(value, null, 2)}\n`, "utf8");
};

export const isStorageWriteError = (error) => {
  const code = error?.code;
  return code === "EROFS" || code === "EACCES" || code === "EPERM";
};

export const readUsers = async () => {
  await ensureFileWithLegacyMigration(USERS_FILE, LEGACY_USERS_FILE, DEFAULT_USERS);
  const users = await readJsonArray(USERS_FILE, DEFAULT_USERS);
  const normalized = users
    .map(normalizeUser)
    .filter((user) => user.username && user.password);

  if (!normalized.some((user) => user.username === "docent")) {
    normalized.push(normalizeUser(DEFAULT_USERS[1]));
  }

  return normalized;
};

export const writeUsers = async (users) => {
  const normalized = users
    .map(normalizeUser)
    .filter((user) => user.username && user.password);
  await writeJsonArray(USERS_FILE, normalized);
  return normalized;
};

export const readEvents = async () => {
  await ensureFileWithLegacyMigration(EVENTS_FILE, LEGACY_EVENTS_FILE, []);
  const events = await readJsonArray(EVENTS_FILE, []);
  return sortEventsByDateTime(
    events
      .map(normalizeEvent)
      .filter((event) => event.title && event.date && event.assignedTo)
  );
};

export const writeEvents = async (events) => {
  const normalized = sortEventsByDateTime(
    events
      .map(normalizeEvent)
      .filter((event) => event.title && event.date && event.assignedTo)
  );
  await writeJsonArray(EVENTS_FILE, normalized);
  return normalized;
};

export const toPublicUser = (user) => ({
  username: user.username,
  maxUnlockedLesson: user.maxUnlockedLesson,
  submissionAddress: user.submissionAddress,
  role: user.username === "docent" ? "docent" : "leerling",
});

export const parseSessionUsername = (request) => {
  const cookieHeader = request.headers.get("cookie") || "";
  const entries = cookieHeader.split(";").map((part) => part.trim());
  const target = entries.find((entry) => entry.startsWith(`${SESSION_COOKIE_NAME}=`));
  if (!target) return "";
  return decodeURIComponent(target.slice(`${SESSION_COOKIE_NAME}=`.length)).trim();
};

export const getSessionUser = async (request) => {
  const username = parseSessionUsername(request);
  if (!username) return null;

  const users = await readUsers();
  return users.find((user) => user.username === username) || null;
};

export const sanitizeIncomingUser = (payload) => {
  const username = normalizeUsername(payload?.username);
  const password = normalizePassword(payload?.password);
  const submissionAddress = normalizeSubmissionAddress(payload?.submissionAddress);

  return {
    username,
    password,
    maxUnlockedLesson: clamp(
      Number.isFinite(Number(payload?.maxUnlockedLesson)) ? Number(payload.maxUnlockedLesson) : 5,
      1,
      10
    ),
    submissionAddress,
  };
};

export const sanitizeIncomingEvent = (payload) => normalizeEvent(payload);

export const toIsoDateValue = toIsoDateString;
