"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Trommel() {
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    const value = localStorage.getItem("music_unlocked");
    setUnlocked(value === "true");
  }, []);

  return (
    <main
      className="relative min-h-screen overflow-hidden p-8 md:p-12"
      style={{ background: "var(--bg-soft)" }}
    >
      <div
        className="pointer-events-none absolute -left-8 top-12 h-40 w-40 rounded-full opacity-35 blur-3xl"
        style={{ background: "var(--pink)" }}
      ></div>
      <div
        className="pointer-events-none absolute right-0 top-24 h-56 w-56 rounded-full opacity-25 blur-3xl"
        style={{ background: "var(--yellow)" }}
      ></div>

      {/* HERO */}
      <div className="relative text-center mb-10">
        <div className="instrument-header">🥁 Trommel</div>

        <h1 className="title">Jouw lessen</h1>

        <p className="subtitle">
          Kies een les of ga oefenen op het instrument
          <br />
          <i>“Een tafel, 2 wijsvingers en een beetje fantasie is soms de leukste trommel.” </i>
        </p>

    </div>
        
      {/* LESSEN */}
      <section className="relative grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <Link href="/trommel/les-1" className="card text-center clickable">
          <div className="text-5xl mb-3">🥁</div>
          <h2 className="text-xl font-bold mb-2" style={{ color: "var(--pink)" }}>
            Les 1
          </h2>
          <p className="subtitle">Eerste ritmes tikken</p>
          <div className="badge mt-4">✅ Beschikbaar</div>
        </Link>

        {unlocked ? (
          <Link href="/trommel/les-2" className="card text-center clickable">
            <div className="text-5xl mb-3">🎵</div>
            <h2 className="text-xl font-bold mb-2">Les 2</h2>
            <p className="subtitle">Ritme combineren</p>
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

        {unlocked ? (
          <Link href="/trommel/les-3" className="card text-center clickable">
            <div className="text-5xl mb-3">🏆</div>
            <h2 className="text-xl font-bold mb-2" style={{ color: "var(--green)" }}>
              Les 3
            </h2>
            <p className="subtitle">Vrij spelen op ritme</p>
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

        {unlocked ? (
          <Link href="/trommel/les-4" className="card text-center clickable">
            <div className="text-5xl mb-3">🥁</div>
            <h2 className="text-xl font-bold mb-2">Les 4</h2>
            <p className="subtitle">Nieuwe slagen combineren</p>
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

        {unlocked ? (
          <Link href="/trommel/les-5" className="card text-center clickable">
            <div className="text-5xl mb-3">🥁</div>
            <h2 className="text-xl font-bold mb-2">Les 5</h2>
            <p className="subtitle">Langer ritme bouwen</p>
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

        <div className="card text-center opacity-60">
          <div className="text-5xl mb-3">🔒</div>
          <h2 className="text-xl font-bold mb-2">Les 6</h2>
          <p className="subtitle">Afgesloten tot later</p>
          <div className="badge mt-4">🔒 Locked</div>
        </div>

        <div className="card text-center opacity-60">
          <div className="text-5xl mb-3">🔒</div>
          <h2 className="text-xl font-bold mb-2">Les 7</h2>
          <p className="subtitle">Afgesloten tot later</p>
          <div className="badge mt-4">🔒 Locked</div>
        </div>

        <div className="card text-center opacity-60">
          <div className="text-5xl mb-3">🔒</div>
          <h2 className="text-xl font-bold mb-2">Les 8</h2>
          <p className="subtitle">Afgesloten tot later</p>
          <div className="badge mt-4">🔒 Locked</div>
        </div>

        <div className="card text-center opacity-60">
          <div className="text-5xl mb-3">🔒</div>
          <h2 className="text-xl font-bold mb-2">Les 9</h2>
          <p className="subtitle">Afgesloten tot later</p>
          <div className="badge mt-4">🔒 Locked</div>
        </div>

        <div className="card text-center opacity-60">
          <div className="text-5xl mb-3">🔒</div>
          <h2 className="text-xl font-bold mb-2">Les 10</h2>
          <p className="subtitle">Afgesloten tot later</p>
          <div className="badge mt-4">🔒 Locked</div>
        </div>

      </section>

    </main>
  );
}