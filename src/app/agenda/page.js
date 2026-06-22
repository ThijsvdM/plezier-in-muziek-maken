"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const defaultEvents = [
  {
    id: 1,
    title: "Afsluitend optreden",
    date: "2026-10-02",
    time: "17:00",
    note: "Muziekgebouw 't Podium. Neem je instrument mee!",
  },
];

const sortEventsByDateTime = (items) =>
  [...items].sort((a, b) => {
    if (a.date === b.date) return a.time.localeCompare(b.time);
    return a.date.localeCompare(b.date);
  });

export default function AgendaPage() {
  const router = useRouter();

  const [user] = useState(() => {
    if (typeof window === "undefined") {
      return null;
    }
    return localStorage.getItem("music_user");
  });

  const [events, setEvents] = useState(() => {
    if (typeof window === "undefined") {
      return sortEventsByDateTime(defaultEvents);
    }

    const storedEvents = localStorage.getItem("music_agenda_events");
    if (!storedEvents) {
      return sortEventsByDateTime(defaultEvents);
    }

    try {
      return sortEventsByDateTime(JSON.parse(storedEvents));
    } catch (error) {
      console.warn("Ongeldige agenda-data in localStorage", error);
      return sortEventsByDateTime(defaultEvents);
    }
  });

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [note, setNote] = useState("");
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    if (!user) {
      router.replace("/login");
      return;
    }

    if (events.length > 0) {
      localStorage.setItem("music_agenda_events", JSON.stringify(events));
    }
  }, [events, router, user]);

  const isOwner = user === "docent";
  const isLoggedIn = Boolean(user);

  const handleAddEvent = (event) => {
    event.preventDefault();

    if (!title || !date || !time) {
      return;
    }

    const updatedEvent = {
      id: editingId || Date.now(),
      title,
      date,
      time,
      note,
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
    setEditingId(null);
  };

  const handleDeleteEvent = (eventId) => {
    setEvents((current) => current.filter((item) => item.id !== eventId));
  };

  const handleEditEvent = (eventItem) => {
    setEditingId(eventItem.id);
    setTitle(eventItem.title);
    setDate(eventItem.date);
    setTime(eventItem.time);
    setNote(eventItem.note || "");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setTitle("");
    setDate("");
    setTime("");
    setNote("");
  };

  const sortedEvents = sortEventsByDateTime(events);

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
              <div className="badge">Ingelogd als {user}</div>
            </div>

            {sortedEvents.length === 0 ? (
              <div className="mt-8 text-center text-gray-600">
                Geen afspraken gevonden. De docent kan nieuwe lessen toevoegen.
              </div>
            ) : (
              <div className="mt-8 grid gap-4">
                {sortedEvents.map((eventItem) => (
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
          )}
        </div>
      )}
    </main>
  );
}
