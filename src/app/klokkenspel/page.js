"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Klokkenspel() {
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
      <div className="pointer-events-none absolute -left-8 top-12 h-40 w-40 rounded-full opacity-35 blur-3xl" style={{ background: "var(--yellow)" }}></div>
      <div className="pointer-events-none absolute right-0 top-24 h-56 w-56 rounded-full opacity-25 blur-3xl" style={{ background: "var(--primary-light)" }}></div>

      <div className="relative text-center mb-10">
        <div className="instrument-header">🎵 Klokkenspel</div>
        <h1 className="title">Jouw lessen</h1>
        <p className="subtitle">Kies een les of ga oefenen op het instrument</p>

        <Link href="/instrument" className="btn mt-6 inline-block">
          🎹 Ga naar het instrument
        </Link>
      </div>

      <section className="relative grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <Link href="/klokkenspel/les-1" className="card text-center clickable">
          <div className="text-5xl mb-3">🔔</div>
          <h2 className="text-xl font-bold mb-2" style={{ color: "var(--primary)" }}>Les 1</h2>
          <p className="subtitle">Basis noten leren</p>
          <div className="badge mt-4">✅ Beschikbaar</div>
        </Link>

        {canAccessLesson(2) ? (
          <Link href="/klokkenspel/les-2" className="card text-center clickable">
            <div className="text-5xl mb-3">🎵</div>
            <h2 className="text-xl font-bold mb-2">Les 2</h2>
            <p className="subtitle">Melodieen oefenen</p>
            <div className="badge mt-4">✅ Beschikbaar</div>
          </Link>
        ) : (
          <div className="card text-center opacity-60">
            <div className="text-5xl mb-3">🔒</div>
            <h2 className="text-xl font-bold mb-2">Les 2</h2>
            <p className="subtitle">Log in om te ontgrendelen</p>
            <div className="badge mt-4">🔒 Locked</div>
          </div>
        )}

        {canAccessLesson(3) ? (
          <Link href="/klokkenspel/les-3" className="card text-center clickable">
            <div className="text-5xl mb-3">🏆</div>
            <h2 className="text-xl font-bold mb-2" style={{ color: "var(--green)" }}>Les 3</h2>
            <p className="subtitle">Eerste echte melodie</p>
            <div className="badge mt-4">✅ Beschikbaar</div>
          </Link>
        ) : (
          <div className="card text-center opacity-60">
            <div className="text-5xl mb-3">🔒</div>
            <h2 className="text-xl font-bold mb-2">Les 3</h2>
            <p className="subtitle">Log in om te ontgrendelen</p>
            <div className="badge mt-4">🔒 Locked</div>
          </div>
        )}

        {canAccessLesson(4) ? (
          <Link href="/klokkenspel/les-4" className="card text-center clickable">
            <div className="text-5xl mb-3">🎵</div>
            <h2 className="text-xl font-bold mb-2">Les 4</h2>
            <p className="subtitle">Nieuwe noten ontdekken</p>
            <div className="badge mt-4">✅ Beschikbaar</div>
          </Link>
        ) : (
          <div className="card text-center opacity-60">
            <div className="text-5xl mb-3">🔒</div>
            <h2 className="text-xl font-bold mb-2">Les 4</h2>
            <p className="subtitle">Log in om te ontgrendelen</p>
            <div className="badge mt-4">🔒 Locked</div>
          </div>
        )}

        {canAccessLesson(5) ? (
          <Link href="/klokkenspel/les-5" className="card text-center clickable">
            <div className="text-5xl mb-3">🎵</div>
            <h2 className="text-xl font-bold mb-2">Les 5</h2>
            <p className="subtitle">Melodie langer maken</p>
            <div className="badge mt-4">✅ Beschikbaar</div>
          </Link>
        ) : (
          <div className="card text-center opacity-60">
            <div className="text-5xl mb-3">🔒</div>
            <h2 className="text-xl font-bold mb-2">Les 5</h2>
            <p className="subtitle">Log in om te ontgrendelen</p>
            <div className="badge mt-4">🔒 Locked</div>
          </div>
        )}

        {[6, 7, 8, 9, 10].map((n) =>
          canAccessLesson(n) ? (
            <Link key={n} href={`/klokkenspel/les-${n}`} className="card text-center clickable">
              <div className="text-5xl mb-3">🔔</div>
              <h2 className="text-xl font-bold mb-2" style={{ color: "var(--green)" }}>Les {n}</h2>
              <p className="subtitle">Ontgrendeld door de docent</p>
              <div className="badge mt-4">✅ Beschikbaar</div>
            </Link>
          ) : (
            <div key={n} className="card text-center opacity-60">
              <div className="text-5xl mb-3">🔒</div>
              <h2 className="text-xl font-bold mb-2">Les {n}</h2>
              <p className="subtitle">Afgesloten tot later</p>
              <div className="badge mt-4">🔒 Locked</div>
            </div>
          )
        )}
      </section>
    </main>
  );
}
