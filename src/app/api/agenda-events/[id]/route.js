import {
  getSessionUser,
  readEvents,
  readUsers,
  sanitizeIncomingEvent,
  toIsoDateValue,
  writeEvents,
} from "../../../../lib/account-data";

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

export async function PATCH(request, { params }) {
  try {
    const sessionUser = await getSessionUser(request);
    if (!isTeacher(sessionUser)) {
      return noStoreJson({ message: "Niet toegestaan." }, 403);
    }

    const resolvedParams = await params;
    const eventId = Number(resolvedParams?.id);
    if (!Number.isFinite(eventId)) {
      return noStoreJson({ message: "Ongeldig afspraak-id." }, 400);
    }

    const events = await readEvents();
    const index = events.findIndex((event) => event.id === eventId);
    if (index < 0) {
      return noStoreJson({ message: "Afspraak niet gevonden." }, 404);
    }

    const body = await request.json();
    const merged = {
      ...events[index],
      ...body,
      id: eventId,
      date: toIsoDateValue(body?.date ?? events[index].date) || events[index].date,
    };

    const incoming = sanitizeIncomingEvent(merged);
    if (!incoming.title || !incoming.date || !incoming.time || !incoming.assignedTo) {
      return noStoreJson({ message: "Vul titel, datum, tijd en leerling in." }, 400);
    }

    const users = await readUsers();
    if (!users.some((user) => user.username === incoming.assignedTo && user.username !== "docent")) {
      return noStoreJson({ message: "Kies een geldige leerling." }, 400);
    }

    const next = [...events];
    next[index] = incoming;
    const updatedEvents = await writeEvents(next);
    return noStoreJson({ event: incoming, events: updatedEvents });
  } catch {
    return noStoreJson({ message: "Kon afspraak niet bijwerken." }, 500);
  }
}

export async function DELETE(request, { params }) {
  try {
    const sessionUser = await getSessionUser(request);
    if (!isTeacher(sessionUser)) {
      return noStoreJson({ message: "Niet toegestaan." }, 403);
    }

    const resolvedParams = await params;
    const eventId = Number(resolvedParams?.id);
    if (!Number.isFinite(eventId)) {
      return noStoreJson({ message: "Ongeldig afspraak-id." }, 400);
    }

    const events = await readEvents();
    const updatedEvents = await writeEvents(events.filter((event) => event.id !== eventId));
    return noStoreJson({ events: updatedEvents });
  } catch {
    return noStoreJson({ message: "Kon afspraak niet verwijderen." }, 500);
  }
}
