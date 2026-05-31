"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Pbuzz() {
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    const value = localStorage.getItem("music_unlocked");
    setUnlocked(value === "true");
  }, []);

  return (
    <main
      className="min-h-screen p-8 md:p-12"
      style={{ background: "var(--bg-soft)" }}
    >

      {/* HERO */}
      <div className="text-center mb-10">
        <div className="instrument-header">🎷 Pbuzz</div>

        <h1 className="title">Jouw lessen</h1>

        <p className="subtitle">
          Kies een les of ga oefenen op het instrument
        </p>

        {/* 🔗 LINK NAAR INSTRUMENT */}
        <Link href="/instrument" className="btn mt-6 inline-block">
          🎺 Ga naar het instrument
        </Link>
      </div>

      {/* LESSEN */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {/* Les 1 */}
        <Link href="/pbuzz/les-1" className="card text-center clickable">
          <div className="text-5xl mb-3">🎷</div>
          <h2 className="text-xl font-bold mb-2" style={{ color: "var(--purple)" }}>
            Les 1
          </h2>
          <p className="subtitle">Eerste tonen blazen</p>
          <div className="badge mt-4">✅ Beschikbaar</div>
        </Link>

        {/* Les 2 */}
        {unlocked ? (
          <Link href="/pbuzz/les-2" className="card text-center clickable">
            <div className="text-5xl mb-3">🎵</div>
            <h2 className="text-xl font-bold mb-2">Les 2</h2>
            <p className="subtitle">Melodie oefenen</p>
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

        {/* Les 3 */}
        {unlocked ? (
          <Link href="/pbuzz/les-3" className="card text-center clickable">
            <div className="text-5xl mb-3">🏆</div>
            <h2 className="text-xl font-bold mb-2" style={{ color: "var(--green)" }}>
              Les 3
            </h2>
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

      </section>

    </main>
  );
}