"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const TROMMEL_LESSONS = [
  { number: 1, icon: "🥁", title: "Eerste ritmes tikken" },
  { number: 2, icon: "🎼", title: "Noten langer en korter" },
  { number: 3, icon: "📈", title: "Nieuwe ritmes en rusten" },
  { number: 4, icon: "⏱️", title: "Tempo en zacht-hard" },
  { number: 5, icon: "🎤", title: "Oefenen voor optreden" },
  { number: 6, icon: "🤝", title: "Samen in lagen spelen" },
  { number: 7, icon: "🎬", title: "Filmmuziek: Jurassic Park" },
  { number: 8, icon: "🎯", title: "Puntnoot oefenen" },
  { number: 9, icon: "🔁", title: "Herhalen met Happy" },
  { number: 10, icon: "🎉", title: "Feestelijke afsluiting" },
];

export default function Trommel() {
  const [maxUnlockedLesson, setMaxUnlockedLesson] = useState(1);

  const getMaxUnlockedLesson = () => {
    if (typeof window === "undefined") return 1;

    const currentUser = localStorage.getItem("music_user");
    if (!currentUser) return 1;

    const storedUsers = localStorage.getItem("music_users");
    if (storedUsers) {
      try {
        const parsedUsers = JSON.parse(storedUsers);
        if (Array.isArray(parsedUsers)) {
          const userRecord = parsedUsers.find((item) => item.username === currentUser);
          if (typeof userRecord?.maxUnlockedLesson === "number") {
            return userRecord.maxUnlockedLesson;
          }
        }
      } catch (error) {
        // ignore malformed storage and fall back below
      }
    }

    const legacyUnlocked = localStorage.getItem("music_unlocked");
    if (legacyUnlocked === "true") {
      return 5;
    }

    return currentUser === "docent" ? 10 : 5;
  };

  useEffect(() => {
    const refreshAccess = () => {
      setMaxUnlockedLesson(getMaxUnlockedLesson());
    };

    refreshAccess();
    window.addEventListener("storage", refreshAccess);
    return () => window.removeEventListener("storage", refreshAccess);
  }, []);

  const canAccessLesson = (lessonNumber) => lessonNumber <= maxUnlockedLesson;

  return (
    <main className="relative min-h-screen overflow-hidden p-8 md:p-12" style={{ background: "var(--bg-soft)" }}>
      <div className="pointer-events-none absolute -left-8 top-12 h-40 w-40 rounded-full opacity-35 blur-3xl" style={{ background: "var(--pink)" }}></div>
      <div className="pointer-events-none absolute right-0 top-24 h-56 w-56 rounded-full opacity-25 blur-3xl" style={{ background: "var(--yellow)" }}></div>

      <div className="relative text-center mb-10">
        <div className="instrument-header">🥁 Trommel</div>
        <h1 className="title">Jouw lessen</h1>
        <p className="subtitle">
          Kies een les of ga oefenen op het instrument
          <br />
          <i>Een tafel, 2 wijsvingers en een beetje fantasie is soms de leukste trommel.</i>
        </p>
      </div>

      <section className="relative grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {TROMMEL_LESSONS.map((lesson) =>
          canAccessLesson(lesson.number) ? (
            <Link key={lesson.number} href={`/trommel/les-${lesson.number}`} className="card text-center clickable">
              <div className="text-5xl mb-3">{lesson.icon}</div>
              <h2 className="text-xl font-bold mb-2" style={{ color: lesson.number === 1 ? "var(--pink)" : "var(--green)" }}>
                Les {lesson.number}
              </h2>
              <p className="subtitle">{lesson.title}</p>
              <div className="badge mt-4">✅ Beschikbaar</div>
            </Link>
          ) : (
            <div key={lesson.number} className="card text-center opacity-60">
              <div className="text-5xl mb-3">🔒</div>
              <h2 className="text-xl font-bold mb-2">Les {lesson.number}</h2>
              <p className="subtitle">Afgesloten tot later</p>
              <div className="badge mt-4">🔒 Locked</div>
            </div>
          )
        )}
      </section>
    </main>
  );
}
