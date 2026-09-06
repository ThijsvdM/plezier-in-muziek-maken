import {
  readUsers,
  sanitizeIncomingUser,
  SESSION_COOKIE_NAME,
  toPublicUser,
} from "../../../../lib/account-data";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const noStoreJson = (payload, status = 200, extraHeaders = {}) =>
  Response.json(payload, {
    status,
    headers: {
      "Cache-Control": "no-store, no-cache, must-revalidate",
      ...extraHeaders,
    },
  });

export async function POST(request) {
  try {
    const body = await request.json();
    const incoming = sanitizeIncomingUser(body);

    if (!incoming.username || !incoming.password) {
      return noStoreJson({ message: "Vul gebruikersnaam en wachtwoord in." }, 400);
    }

    const users = await readUsers();
    const foundUser = users.find(
      (user) => user.username === incoming.username && user.password === incoming.password
    );

    if (!foundUser) {
      return noStoreJson({ message: "Gebruikersnaam of wachtwoord klopt niet." }, 401);
    }

    const cookieValue = encodeURIComponent(foundUser.username);
    const secureFlag = process.env.NODE_ENV === "production" ? "; Secure" : "";
    const setCookie = `${SESSION_COOKIE_NAME}=${cookieValue}; Path=/; HttpOnly; SameSite=Lax; Max-Age=2592000${secureFlag}`;

    return noStoreJson(
      { message: "Ingelogd", user: toPublicUser(foundUser) },
      200,
      { "Set-Cookie": setCookie }
    );
  } catch {
    return noStoreJson({ message: "Inloggen mislukt." }, 500);
  }
}
