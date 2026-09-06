"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const toIsoDateString = (value) => {
  if (typeof value !== "string") return "";
  const trimmed = value.trim();

  // Already ISO-like from <input type="date">.
  if (/^\d{4}-\d{2}-\d{2}$/.test(trimmed)) {
    return trimmed;
  }

  // Legacy or manually entered format: DD-MM-YYYY.
  const legacyMatch = trimmed.match(/^(\d{2})-(\d{2})-(\d{4})$/);
  if (legacyMatch) {
    const [, day, month, year] = legacyMatch;
    return `${year}-${month}-${day}`;
  }

  return "";
};

const formatDateToDisplay = (value) => {
  const iso = toIsoDateString(value);
  if (!iso) return value;

  const [year, month, day] = iso.split("-");
  return `${day}-${month}-${year}`;
};

const sortEventsByDateTime = (items) =>
  [...items].sort((a, b) => {
    const aDate = toIsoDateString(a.date);
    const bDate = toIsoDateString(b.date);
    if (aDate === bDate) return a.time.localeCompare(b.time);
    return aDate.localeCompare(bDate);
  });

export default function AgendaPage() {
  const router = useRouter();

  const [sessionUser, setSessionUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dataError, setDataError] = useState("");

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [note, setNote] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newSubmissionAddress, setNewSubmissionAddress] = useState("");
  const [userError, setUserError] = useState("");
  const [eventError, setEventError] = useState("");
  const unlockedLessonOptions = [5, 6, 7, 8, 9, 10];

  const isOwner = sessionUser?.username === "docent";
  const isLoggedIn = Boolean(sessionUser);
  const currentUnlockedLesson = sessionUser?.maxUnlockedLesson ?? 5;

  useEffect(() => {
    let active = true;

    const loadData = async () => {
      setLoading(true);
      setDataError("");

      try {
        const sessionResponse = await fetch("/api/session", { cache: "no-store" });
        const sessionPayload = await sessionResponse.json();

        if (!active) return;

        if (!sessionPayload?.authenticated || !sessionPayload?.user) {
          router.replace("/login");
          return;
        }

        const signedInUser = sessionPayload.user;
        setSessionUser(signedInUser);

        const eventsResponse = await fetch("/api/agenda-events", { cache: "no-store" });
        const eventsPayload = await eventsResponse.json();

        if (!eventsResponse.ok) {
          throw new Error(eventsPayload?.message || "Kon afspraken niet laden.");
        }

        const loadedEvents = Array.isArray(eventsPayload?.events) ? eventsPayload.events : [];
        setEvents(sortEventsByDateTime(loadedEvents));

        if (signedInUser.username === "docent") {
          const usersResponse = await fetch("/api/users", { cache: "no-store" });
          const usersPayload = await usersResponse.json();

          if (!usersResponse.ok) {
            throw new Error(usersPayload?.message || "Kon gebruikers niet laden.");
          }

          const loadedUsers = Array.isArray(usersPayload?.users)
            ? usersPayload.users.filter((item) => item.username !== "docent")
            : [];

          setUsers(loadedUsers);
          setAssignedTo((current) => {
            if (current && loadedUsers.some((item) => item.username === current)) {
              return current;
            }
            return loadedUsers[0]?.username || "";
          });
        } else {
          setUsers([]);
          setAssignedTo("");
        }
      } catch (error) {
        if (!active) return;
        setDataError(error?.message || "Kon agenda niet laden.");
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    };

    loadData();

    return () => {
      active = false;
    };
  }, [router]);

  const handleAddEvent = async (event) => {
    event.preventDefault();
    setEventError("");

    if (!title || !date || !time || !assignedTo) {
      setEventError("Vul titel, datum, tijd en leerling in.");
      return;
    }

    const payload = {
      title,
      date: toIsoDateString(date) || date,
      time,
      note,
      assignedTo,
    };

    const endpoint = editingId ? `/api/agenda-events/${editingId}` : "/api/agenda-events";
    const method = editingId ? "PATCH" : "POST";

    try {
      const response = await fetch(endpoint, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      if (!response.ok) {
        setEventError(result?.message || "Kon afspraak niet opslaan.");
        return;
      }

      if (Array.isArray(result?.events)) {
        setEvents(sortEventsByDateTime(result.events));
      }
    } catch {
      setEventError("Kon afspraak niet opslaan.");
      return;
    }

    setTitle("");
    setDate("");
    setTime("");
    setNote("");
    setAssignedTo(users.length > 0 ? users[0].username : "");
    setEditingId(null);
  };

  const handleDeleteEvent = async (eventId) => {
    try {
      const response = await fetch(`/api/agenda-events/${eventId}`, { method: "DELETE" });
      const result = await response.json();
      if (!response.ok) {
        setEventError(result?.message || "Kon afspraak niet verwijderen.");
        return;
      }

      if (Array.isArray(result?.events)) {
        setEvents(sortEventsByDateTime(result.events));
      }
    } catch {
      setEventError("Kon afspraak niet verwijderen.");
    }
  };

  const handleAddUser = async () => {
    setUserError("");

    if (!newUsername || !newPassword) {
      setUserError("Vul gebruikersnaam en wachtwoord in.");
      return;
    }

    try {
      const response = await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: newUsername.trim(),
          password: newPassword.trim(),
          maxUnlockedLesson: 5,
          submissionAddress: newSubmissionAddress,
        }),
      });

      const result = await response.json();
      if (!response.ok) {
        setUserError(result?.message || "Kon gebruiker niet aanmaken.");
        return;
      }

      const loadedUsers = Array.isArray(result?.users)
        ? result.users.filter((item) => item.username !== "docent")
        : [];
      setUsers(loadedUsers);
      setAssignedTo((current) => current || loadedUsers[0]?.username || "");

      setNewUsername("");
      setNewPassword("");
      setNewSubmissionAddress("");
    } catch {
      setUserError("Kon gebruiker niet aanmaken.");
    }
  };

  const handleUpdateUserUnlocks = async (usernameToUpdate, lessonNumber) => {
    try {
      const response = await fetch(`/api/users/${encodeURIComponent(usernameToUpdate)}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ maxUnlockedLesson: lessonNumber }),
      });
      const result = await response.json();
      if (!response.ok) {
        setUserError(result?.message || "Kon gebruiker niet bijwerken.");
        return;
      }

      if (result?.user) {
        setUsers((current) => current.map((item) => (item.username === usernameToUpdate ? result.user : item)));
      }
    } catch {
      setUserError("Kon gebruiker niet bijwerken.");
    }
  };

  const handleDeleteUser = async (usernameToDelete) => {
    try {
      const response = await fetch(`/api/users/${encodeURIComponent(usernameToDelete)}`, {
        method: "DELETE",
      });

      const result = await response.json();
      if (!response.ok) {
        setUserError(result?.message || "Kon gebruiker niet verwijderen.");
        return;
      }

      const loadedUsers = Array.isArray(result?.users)
        ? result.users.filter((item) => item.username !== "docent")
        : [];
      setUsers(loadedUsers);

      if (Array.isArray(result?.events)) {
        setEvents(sortEventsByDateTime(result.events));
      }

      setAssignedTo((current) => {
        if (current && loadedUsers.some((item) => item.username === current)) {
          return current;
        }
        return loadedUsers[0]?.username || "";
      });
    } catch {
      setUserError("Kon gebruiker niet verwijderen.");
    }
  };

  const handleUpdateSubmissionAddress = async (usernameToUpdate, submissionAddress) => {
    try {
      const response = await fetch(`/api/users/${encodeURIComponent(usernameToUpdate)}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ submissionAddress }),
      });
      const result = await response.json();
      if (!response.ok) {
        setUserError(result?.message || "Kon inleveradres niet opslaan.");
        return;
      }

      if (result?.user) {
        setUsers((current) => current.map((item) => (item.username === usernameToUpdate ? result.user : item)));
      }
    } catch {
      setUserError("Kon inleveradres niet opslaan.");
    }
  };

  const handleEditEvent = (eventItem) => {
    setEditingId(eventItem.id);
    setTitle(eventItem.title);
    setDate(toIsoDateString(eventItem.date) || "");
    setTime(eventItem.time);
    setNote(eventItem.note || "");
    setAssignedTo(eventItem.assignedTo || "");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEventError("");
    setTitle("");
    setDate("");
    setTime("");
    setNote("");
    setAssignedTo(users.length > 0 ? users[0].username : "");
  };

  const sortedEvents = sortEventsByDateTime(events);
  const visibleEvents = isOwner
    ? sortedEvents
    : sortedEvents.filter((item) => item.assignedTo === sessionUser?.username);

  if (loading) {
    return (
      <main className="relative min-h-screen overflow-hidden p-8 md:p-12" style={{ background: "var(--bg-soft)" }}>
        <div className="max-w-6xl mx-auto">
          <section className="card text-center">
            <h2 className="text-2xl font-bold mb-2">Agenda laden...</h2>
            <p className="subtitle">Even geduld, we halen de laatste gegevens op.</p>
          </section>
        </div>
      </main>
    );
  }

  if (dataError) {
    return (
      <main className="relative min-h-screen overflow-hidden p-8 md:p-12" style={{ background: "var(--bg-soft)" }}>
        <div className="max-w-6xl mx-auto">
          <section className="card text-center">
            <h2 className="text-2xl font-bold mb-2">Kon agenda niet laden</h2>
            <p className="subtitle mb-4">{dataError}</p>
            <Link href="/" className="btn">Terug naar home</Link>
          </section>
        </div>
      </main>
    );
  }

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
              <div className="badge">Ingelogd als {sessionUser?.username} · les t/m {currentUnlockedLesson}</div>
            </div>

            {visibleEvents.length === 0 ? (
              <div className="mt-8 text-center text-gray-600">
                Geen afspraken gevonden voor jouw account. De docent kan nieuwe lessen toevoegen en koppelen.
              </div>
            ) : (
              <div className="mt-8 grid gap-4">
                {visibleEvents.map((eventItem) => (
                  <div key={eventItem.id} className="card bg-[#fff9f3] border-yellow-200 p-4 md:p-4">
                    <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                      <div className="min-w-0">
                        <h3 className="text-lg font-bold leading-snug">{eventItem.title}</h3>
                        {isOwner && (
                          <p className="subtitle mt-1 text-sm">
                            Ingepland voor: <strong>{eventItem.assignedTo}</strong>
                          </p>
                        )}
                        {eventItem.note && <p className="subtitle mt-1 text-sm">{eventItem.note}</p>}
                      </div>
                      <div className="flex flex-col gap-2 md:items-end md:text-right">
                        <div className="badge px-3 py-2 text-xs md:text-sm" style={{ background: "var(--yellow)", color: "#333" }}>
                          {formatDateToDisplay(eventItem.date)} om {eventItem.time}
                        </div>
                        {isOwner && (
                          <div className="flex flex-wrap gap-2 md:justify-end">
                            <button
                              type="button"
                              className="btn clickable min-h-0 px-4 py-2 text-sm"
                              style={{ background: "var(--primary-dark)", boxShadow: "0 6px 14px rgba(0, 90, 135, 0.18)" }}
                              onClick={() => handleEditEvent(eventItem)}
                            >
                              Wijzigen
                            </button>
                            <button
                              type="button"
                              className="btn clickable min-h-0 px-4 py-2 text-sm"
                              style={{ background: "#f87171", boxShadow: "0 6px 14px rgba(248, 113, 113, 0.22)" }}
                              onClick={() => handleDeleteEvent(eventItem.id)}
                            >
                              Verwijderen
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {eventError && <div className="error-box mt-6">{eventError}</div>}
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
                    <input
                      type="text"
                      placeholder="Inleveradres (mail of link)"
                      value={newSubmissionAddress}
                      onChange={(e) => setNewSubmissionAddress(e.target.value)}
                      className="input md:col-span-2"
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
                          <input
                            type="text"
                            placeholder="Inleveradres (mail of link)"
                            value={userItem.submissionAddress || ""}
                            onChange={(e) => handleUpdateSubmissionAddress(userItem.username, e.target.value)}
                            className="input mt-3"
                          />
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
