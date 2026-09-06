import { getSessionUser, toPublicUser } from "../../../lib/account-data";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const noStoreJson = (payload, status = 200) =>
  Response.json(payload, {
    status,
    headers: {
      "Cache-Control": "no-store, no-cache, must-revalidate",
    },
  });

export async function GET(request) {
  try {
    const sessionUser = await getSessionUser(request);
    if (!sessionUser) {
      return noStoreJson({ authenticated: false, user: null });
    }

    return noStoreJson({ authenticated: true, user: toPublicUser(sessionUser) });
  } catch {
    return noStoreJson({ authenticated: false, user: null }, 500);
  }
}
