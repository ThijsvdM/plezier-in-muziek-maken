import {
  getSessionUser,
  readEvents,
  readUsers,
  sanitizeIncomingUser,
  toPublicUser,
  writeEvents,
  writeUsers,
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
    const username = decodeURIComponent(resolvedParams?.username || "").trim();
    if (!username || username === "docent") {
      return noStoreJson({ message: "Ongeldige gebruiker." }, 400);
    }

    const users = await readUsers();
    const index = users.findIndex((user) => user.username === username);
    if (index < 0) {
      return noStoreJson({ message: "Gebruiker niet gevonden." }, 404);
    }

    const body = await request.json();
    const partial = sanitizeIncomingUser({
      ...users[index],
      ...body,
      username,
    });

    users[index] = {
      ...users[index],
      password: partial.password || users[index].password,
      maxUnlockedLesson: partial.maxUnlockedLesson,
      submissionAddress: partial.submissionAddress,
    };

    const updatedUsers = await writeUsers(users);
    return noStoreJson({ user: toPublicUser(updatedUsers.find((user) => user.username === username)) });
  } catch {
    return noStoreJson({ message: "Kon gebruiker niet bijwerken." }, 500);
  }
}

export async function DELETE(request, { params }) {
  try {
    const sessionUser = await getSessionUser(request);
    if (!isTeacher(sessionUser)) {
      return noStoreJson({ message: "Niet toegestaan." }, 403);
    }

    const resolvedParams = await params;
    const username = decodeURIComponent(resolvedParams?.username || "").trim();
    if (!username || username === "docent") {
      return noStoreJson({ message: "Deze gebruiker kan niet worden verwijderd." }, 400);
    }

    const users = await readUsers();
    if (!users.some((user) => user.username === username)) {
      return noStoreJson({ message: "Gebruiker niet gevonden." }, 404);
    }

    const updatedUsers = await writeUsers(users.filter((user) => user.username !== username));
    const events = await readEvents();
    const updatedEvents = await writeEvents(events.filter((event) => event.assignedTo !== username));

    return noStoreJson({
      users: updatedUsers.map(toPublicUser),
      events: updatedEvents,
    });
  } catch {
    return noStoreJson({ message: "Kon gebruiker niet verwijderen." }, 500);
  }
}
