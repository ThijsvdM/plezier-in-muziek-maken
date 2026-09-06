import {
  getSessionUser,
  readUsers,
  sanitizeIncomingUser,
  toPublicUser,
  writeUsers,
} from "../../../lib/account-data";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const noStoreJson = (payload, status = 200) =>
  Response.json(payload, {
    status,
    headers: {
      "Cache-Control": "no-store, no-cache, must-revalidate",
    },
  });

const isTeacher = (user) => user?.username === "docent";

export async function GET(request) {
  try {
    const sessionUser = await getSessionUser(request);
    if (!isTeacher(sessionUser)) {
      return noStoreJson({ message: "Niet toegestaan." }, 403);
    }

    const users = await readUsers();
    return noStoreJson({ users: users.map(toPublicUser) });
  } catch {
    return noStoreJson({ message: "Kon gebruikers niet laden." }, 500);
  }
}

export async function POST(request) {
  try {
    const sessionUser = await getSessionUser(request);
    if (!isTeacher(sessionUser)) {
      return noStoreJson({ message: "Niet toegestaan." }, 403);
    }

    const body = await request.json();
    const incoming = sanitizeIncomingUser(body);

    if (!incoming.username || !incoming.password) {
      return noStoreJson({ message: "Vul gebruikersnaam en wachtwoord in." }, 400);
    }

    if (incoming.username === "docent") {
      return noStoreJson({ message: "Deze gebruikersnaam is niet toegestaan." }, 400);
    }

    const users = await readUsers();
    if (users.some((user) => user.username === incoming.username)) {
      return noStoreJson({ message: "Deze gebruikersnaam bestaat al." }, 409);
    }

    const updatedUsers = await writeUsers([...users, incoming]);
    return noStoreJson({ users: updatedUsers.map(toPublicUser) }, 201);
  } catch {
    return noStoreJson({ message: "Kon gebruiker niet opslaan." }, 500);
  }
}
