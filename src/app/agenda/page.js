"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const defaultUsers = [
  {
    username: "leerling",
    password: "muziek123",
    maxUnlockedLesson: 5,
  },
  {
    username: "docent",
    password: "drummen",
    maxUnlockedLesson: 10,
  },
];

const defaultEvents = [];

const normalizeUser = (user) => ({
  username: user.username,
  password: user.password,
  maxUnlockedLesson: typeof user.maxUnlockedLesson === "number"
    ? user.maxUnlockedLesson
    : user.username === "docent"
      ? 10
      : 5,
});

const sortEventsByDateTime = (items) =>
  [...items].sort((a, b) => {
    if (a.date === b.date) return a.time.localeCompare(b.time);
    return a.date.localeCompare(b.date);
  });

const getStoredUsers = () => {
  if (typeof window === "undefined") return defaultUsers;

  const storedUsers = localStorage.getItem("music_users");
  if (!storedUsers) {
    localStorage.setItem("music_users", JSON.stringify(defaultUsers));
    return defaultUsers;
  }

  try {
    const parsedUsers = JSON.parse(storedUsers);
    if (!Array.isArray(parsedUsers)) return defaultUsers;
    const normalizedUsers = parsedUsers.map(normalizeUser);
    localStorage.setItem("music_users", JSON.stringify(normalizedUsers));
    return normalizedUsers;
  } catch (error) {
    console.warn("Ongeldige gebruikersdata in localStorage", error);
    localStorage.setItem("music_users", JSON.stringify(defaultUsers));
    return defaultUsers;
  }
};

const getStoredEvents = () => {
  if (typeof window === "undefined") return defaultEvents;

  const storedEvents = localStorage.getItem("music_agenda_events");
  if (!storedEvents) {
    return defaultEvents;
  }

  try {
    const parsed = JSON.parse(storedEvents);
    if (!Array.isArray(parsed)) return defaultEvents;
    return parsed.filter((event) => typeof event.assignedTo === "string");
  } catch (error) {
    console.warn("Ongeldige agenda-data in localStorage", error);
    return defaultEvents;
  }
};

export default function AgendaPage() {
  const router = useRouter();

  const [user] = useState(() => {
    if (typeof window === "undefined") {
      return null;
    }
    return localStorage.getItem("music_user");
  });

  const [users, setUsers] = useState(() => {
    if (typeof window === "undefined") {
      return defaultUsers;
    }
    return getStoredUsers();
  });

  const [events, setEvents] = useState(() => {
    if (typeof window === "undefined") {
      return defaultEvents;
    }
    return sortEventsByDateTime(getStoredEvents());
  });

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [note, setNote] = useState("");
  const [assignedTo, setAssignedTo] = useState("leerling");
  const [editingId, setEditingId] = useState(null);
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [userError, setUserError] = useState("");
  const unlockedLessonOptions = [5, 6, 7, 8, 9, 10];

  useEffect(() => {
    if (!user) {
      router.replace("/login");
      return;
    }
  }, [router, user]);

  useEffect(() => {
    localStorage.setItem("music_agenda_events", JSON.stringify(events));
  }, [events]);

  useEffect(() => {
    localStorage.setItem("music_users", JSON.stringify(users));
  }, [users]);

  const isOwner = user === "docent";
  const isLoggedIn = Boolean(user);
  const currentUserRecord = users.find((userItem) => userItem.username === user) || null;
  const currentUnlockedLesson = currentUserRecord?.maxUnlockedLesson ?? (user === "docent" ? 10 : 5);

  const handleAddEvent = (event) => {
    event.preventDefault();

    if (!title || !date || !time || !assignedTo) {
      return;
    }

    const updatedEvent = {
      id: editingId || Date.now(),
      title,
      date,
      time,
      note,
      assignedTo,
    };

    if (editingId) {
      setEvents((current) => sortEventsByDateTime(current.map((item) => (item.id === editingId ? updatedEvent : item))));
    } else {
      setEvents((current) => sortEventsByDateTime([updatedEvent, ...current]));
    }

    setTitle("");
    setDate("");
    setTime("");
    setNote("");
    setAssignedTo(users.length > 0 ? users[0].username : "");
    setEditingId(null);
  };

  const handleDeleteEvent = (eventId) => {
    setEvents((current) => current.filter((item) => item.id !== eventId));
  };

  const handleAddUser = () => {
    setUserError("");

    if (!newUsername || !newPassword) {
      setUserError("Vul gebruikersnaam en wachtwoord in.");
      return;
    }

    if (users.some((existing) => existing.username === newUsername)) {
      setUserError("Deze gebruikersnaam bestaat al.");
      return;
    }

    const newUser = {
      username: newUsername,
      password: newPassword,
      maxUnlockedLesson: 5,
    };

    setUsers((current) => [...current, newUser]);
    setNewUsername("");
    setNewPassword("");
  };

  const handleUpdateUserUnlocks = (usernameToUpdate, lessonNumber) => {
    setUsers((current) =>
      current.map((userItem) =>
        userItem.username === usernameToUpdate
          ? { ...userItem, maxUnlockedLesson: lessonNumber }
          : userItem
      )
    );
  };

  const handleDeleteUser = (usernameToDelete) => {
    if (usernameToDelete === "docent") {
      return;
    }

    setUsers((current) => current.filter((userItem) => userItem.username !== usernameToDelete));
    setEvents((current) => current.filter((item) => item.assignedTo !== usernameToDelete));
  };

  const handleEditEvent = (eventItem) => {
    setEditingId(eventItem.id);
    setTitle(eventItem.title);
    setDate(eventItem.date);
    setTime(eventItem.time);
    setNote(eventItem.note || "");
    setAssignedTo(eventItem.assignedTo || "");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setTitle("");
    setDate("");
    setTime("");
    setNote("");
    setAssignedTo(users.length > 0 ? users[0].username : "");
  };

  const sortedEvents = sortEventsByDateTime(events);
  const visibleEvents = isOwner
    ? sortedEvents
    : sortedEvents.filter((item) => item.assignedTo === user);

  return (
    <main className="relative min-h-screen overflow-hidden p-8 md:p-12" style={{ background: "var(--bg-soft)" }}>
      <div className="pointer-events-none absolute -left-8 top-12 h-40 w-40 rounded-full opacity-35 blur-3xl" style={{ background: "var(--pink)" }}></div>
      <div className="pointer-events-none absolute right-0 top-24 h-56 w-56 rounded-full opacity-25 blur-3xl" style={{ background: "var(--yellow)" }}></div>

      <div className="relative text-center mb-10">
        <div className="instrument-header">📅 Agenda</div>
        <h1 className="title">Planning van de volgende lessen</h1>
        <p className="subtitle mx-auto max-w-3xl">
          Hier zie je wanneer de volgende lessen gepland zijn.
        </p>
      </div>

      {!isLoggedIn ? (
        <div className="card max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Even inloggen</h2>
          <p className="subtitle mb-6">
            Je moet eerst inloggen voordat je de lesagenda kunt zien.
          </p>
          <Link href="/login" className="btn clickable">
            Inloggen
          </Link>
        </div>
      ) : (
        <div className="max-w-6xl mx-auto grid gap-8">
          <section className="card p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-bold">Volgende afspraken</h2>
                <p className="subtitle">
                  Bekijk hier de datum en tijd van de komende lessen.
                </p>
              </div>
              <div className="badge">Ingelogd als {user} · les t/m {currentUnlockedLesson}</div>
            </div>

            {visibleEvents.length === 0 ? (
              <div className="mt-8 text-center text-gray-600">
                Geen afspraken gevonden voor jouw account. De docent kan nieuwe lessen toevoegen en koppelen.
              </div>
            ) : (
              <div className="mt-8 grid gap-4">
                {visibleEvents.map((eventItem) => (
                  <div key={eventItem.id} className="card p-5 bg-[#fff9f3] border-yellow-200">
                    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                      <div>
                        <h3 className="text-xl font-bold">{eventItem.title}</h3>
                        {eventItem.note && <p className="subtitle mt-1">{eventItem.note}</p>}
                      </div>
                      <div className="flex flex-col gap-3 md:items-end">
                        <div className="badge" style={{ background: "var(--yellow)", color: "#333" }}>
                          {eventItem.date} om {eventItem.time}
                        </div>
                        {isOwner && (
                          <button
                            type="button"
                            className="btn clickable"
                            style={{ background: "#f87171", boxShadow: "0 8px 20px rgba(248, 113, 113, 0.25)" }}
                            onClick={() => handleDeleteEvent(eventItem.id)}
                          >
                            Verwijderen
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>

          {isOwner && (
            <div className="grid gap-8">
              <section className="card p-6">
                <h2 className="text-2xl font-bold mb-4">Gebruikersbeheer</h2>
                <p className="subtitle mb-6">
                  Maak nieuwe gebruikers aan of verwijder bestaande leerlingen.
                </p>

                <div className="grid gap-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <input
                      type="text"
                      placeholder="Nieuwe gebruikersnaam"
                      value={newUsername}
                      onChange={(e) => setNewUsername(e.target.value)}
                      className="input"
                    />
                    <input
                      type="password"
                      placeholder="Wachtwoord"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      className="input"
                    />
                  </div>
                  {userError && <div className="error-box">{userError}</div>}
                  <button type="button" className="btn w-full clickable" onClick={handleAddUser}>
                    Nieuwe gebruiker aanmaken
                  </button>
                </div>

                <div className="mt-6 grid gap-3">
                  {users
                    .filter((userItem) => userItem.username !== "docent")
                    .map((userItem) => (
                      <div key={userItem.username} className="card p-4 grid gap-4 md:grid-cols-[1fr_auto_auto] md:items-center">
                        <div>
                          <span className="font-bold">{userItem.username}</span>
                          <p className="subtitle mt-1">Ontgrendeld t/m les {userItem.maxUnlockedLesson ?? 5}</p>
                        </div>
                        <select
                          value={userItem.maxUnlockedLesson ?? 5}
                          onChange={(e) => handleUpdateUserUnlocks(userItem.username, Number(e.target.value))}
                          className="input md:w-56"
                        >
                          {unlockedLessonOptions.map((lessonNumber) => (
                            <option key={lessonNumber} value={lessonNumber}>
                              T/m les {lessonNumber}
                            </option>
                          ))}
                        </select>
                        <button
                          type="button"
                          className="btn clickable"
                          style={{ background: "#f87171" }}
                          onClick={() => handleDeleteUser(userItem.username)}
                        >
                          Verwijderen
                        </button>
                      </div>
                    ))}
                </div>
              </section>

              <section className="card p-6">
                <h2 className="text-2xl font-bold mb-4">
                  {editingId ? "Afspraak wijzigen" : "Nieuwe afspraak toevoegen"}
                </h2>
                <p className="subtitle mb-6">
                  Voeg hier een datum en tijd toe voor een nieuwe lesafspraak, of pas een bestaande afspraak aan.
                </p>

                <form className="grid gap-4" onSubmit={handleAddEvent}>
                  <input
                    type="text"
                    placeholder="Titel van de les"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="input"
                  />
                  <div className="grid gap-4 md:grid-cols-2">
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="input"
                    />
                    <input
                      type="time"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="input"
                    />
                  </div>
                  <textarea
                    rows="3"
                    placeholder="Optionele toelichting"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    className="input"
                  />
                  <select
                    value={assignedTo}
                    onChange={(e) => setAssignedTo(e.target.value)}
                    className="input"
                  >
                    <option value="">Kies een leerling</option>
                    {users
                      .filter((userItem) => userItem.username !== "docent")
                      .map((userItem) => (
                        <option key={userItem.username} value={userItem.username}>
                          {userItem.username}
                        </option>
                      ))}
                  </select>
                  <div className="flex gap-3 flex-col md:flex-row">
                    <button type="submit" className="btn w-full clickable">
                      {editingId ? "Wijzig afspraak" : "Afspraak toevoegen"}
                    </button>
                    {editingId && (
                      <button type="button" onClick={handleCancelEdit} className="btn w-full clickable" style={{ background: "#a3a3a3" }}>
                        Bewerking annuleren
                      </button>
                    )}
                  </div>
                </form>
              </section>
            </div>
          )}
        </div>
      )}
    </main>
  );
}
