import {
  getSessionUser,
  readEvents,
  readUsers,
  sanitizeIncomingEvent,
  toIsoDateValue,
  writeEvents,
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
    if (!sessionUser) {
      return noStoreJson({ message: "Je bent niet ingelogd." }, 401);
    }

    const events = await readEvents();
    if (isTeacher(sessionUser)) {
      return noStoreJson({ events });
    }

    return noStoreJson({ events: events.filter((event) => event.assignedTo === sessionUser.username) });
  } catch {
    return noStoreJson({ message: "Kon afspraken niet laden." }, 500);
  }
}

export async function POST(request) {
  try {
    const sessionUser = await getSessionUser(request);
    if (!isTeacher(sessionUser)) {
      return noStoreJson({ message: "Niet toegestaan." }, 403);
    }

    const body = await request.json();
    const incoming = sanitizeIncomingEvent({
      ...body,
      id: Date.now(),
      date: toIsoDateValue(body?.date) || body?.date,
    });

    if (!incoming.title || !incoming.date || !incoming.time || !incoming.assignedTo) {
      return noStoreJson({ message: "Vul titel, datum, tijd en leerling in." }, 400);
    }

    const users = await readUsers();
    if (!users.some((user) => user.username === incoming.assignedTo && user.username !== "docent")) {
      return noStoreJson({ message: "Kies een geldige leerling." }, 400);
    }

    const events = await readEvents();
    const updatedEvents = await writeEvents([incoming, ...events]);
    return noStoreJson({ event: incoming, events: updatedEvents }, 201);
  } catch {
    return noStoreJson({ message: "Kon afspraak niet opslaan." }, 500);
  }
}
