import { SESSION_COOKIE_NAME } from "../../../../lib/account-data";

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

export async function POST() {
  const secureFlag = process.env.NODE_ENV === "production" ? "; Secure" : "";
  const setCookie = `${SESSION_COOKIE_NAME}=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0${secureFlag}`;

  return noStoreJson({ message: "Uitgelogd" }, 200, { "Set-Cookie": setCookie });
}
