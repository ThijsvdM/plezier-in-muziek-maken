"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const PBUZZ_LESSONS = [
  { number: 1, icon: "🎺", title: "Eerste tonen blazen" },
  { number: 2, icon: "🎼", title: "Noten langer en korter" },
  { number: 3, icon: "📈", title: "Nieuwe tonen en inzetten" },
  { number: 4, icon: "⏱️", title: "Tempo en zacht-hard" },
  { number: 5, icon: "🎤", title: "Oefenen voor optreden" },
  { number: 6, icon: "🤝", title: "Samen in lagen spelen" },
  { number: 7, icon: "🎬", title: "Filmmuziek: Jurassic Park" },
  { number: 8, icon: "🎯", title: "Puntnoot en glij-effect" },
  { number: 9, icon: "🔁", title: "Herhalen met Happy" },
  { number: 10, icon: "🎉", title: "Feestelijke afsluiting" },
];

export default function Pbuzz() {
  const [maxUnlockedLesson, setMaxUnlockedLesson] = useState(1);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
      const currentUser = typeof window !== "undefined" ? localStorage.getItem("music_user") : null;
      setIsLoggedIn(Boolean(currentUser));
      setMaxUnlockedLesson(getMaxUnlockedLesson());
    };

    refreshAccess();
    window.addEventListener("storage", refreshAccess);
    return () => window.removeEventListener("storage", refreshAccess);
  }, []);

  const canAccessLesson = (lessonNumber) => lessonNumber <= maxUnlockedLesson;

  return (
    <main className="relative min-h-screen overflow-hidden p-8 md:p-12" style={{ background: "var(--bg-soft)" }}>
      <div className="pointer-events-none absolute -left-8 top-12 h-40 w-40 rounded-full opacity-35 blur-3xl" style={{ background: "var(--purple)" }}></div>
      <div className="pointer-events-none absolute right-0 top-24 h-56 w-56 rounded-full opacity-25 blur-3xl" style={{ background: "var(--primary-light)" }}></div>

      <div className="relative text-center mb-10">
        <div className="instrument-header">🎺 Pbuzz</div>
        <h1 className="title">Jouw lessen</h1>
        <p className="subtitle">Kies een les of ga oefenen op het instrument</p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Link href="/instrument" className="btn inline-block">
            🎺 Ga naar het instrument
          </Link>
          <Link href="/notenvanger" className="btn inline-block" style={{ background: "var(--green)", boxShadow: "0 8px 0 rgba(4,120,87,0.2), 0 14px 24px rgba(6,214,160,0.28)" }}>
            🎮 Speel notenvanger
          </Link>
        </div>
      </div>

      <section className="relative grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {PBUZZ_LESSONS.map((lesson) =>
          canAccessLesson(lesson.number) ? (
            <Link key={lesson.number} href={`/pbuzz/les-${lesson.number}`} className="card text-center clickable">
              <div className="text-5xl mb-3">{lesson.icon}</div>
              <h2 className="text-xl font-bold mb-2" style={{ color: lesson.number === 1 ? "var(--purple)" : "var(--green)" }}>
                Les {lesson.number}
              </h2>
              <p className="subtitle">{lesson.title}</p>
              <div className="badge mt-4">✅ Beschikbaar</div>
            </Link>
          ) : (
            <div key={lesson.number} className="card text-center opacity-60">
              <div className="text-5xl mb-3">🔒</div>
              <h2 className="text-xl font-bold mb-2">Les {lesson.number}</h2>
              <p className="subtitle">{isLoggedIn ? "Afgesloten tot later" : "Log in om deze les te bekijken"}</p>
              <div className="badge mt-4">🔒 Locked</div>
            </div>
          )
        )}
      </section>
    </main>
  );
}
