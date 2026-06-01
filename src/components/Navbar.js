"use client";
console.log("Navbar geladen");

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const name = localStorage.getItem("music_user");
    setUser(name);
  }, []);

  return (
    <nav className="hidden md:block sticky top-0 z-40 backdrop-blur-md"
      style={{
        background: "rgba(255,255,255,0.85)",
        borderBottom: "2px solid var(--border)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex flex-wrap justify-center gap-4">

        <Link href="/" className="btn">
          🏠 Home
        </Link>

        <Link href="/klokkenspel" className="btn" style={{ background: "var(--yellow)", color: "#333" }}>
          🎵 Klokkenspel
        </Link>

        <Link href="/trommel" className="btn" style={{ background: "var(--pink)", color: "#333" }}>
          🥁 Trommel
        </Link>

        <Link href="/pbuzz" className="btn" style={{ background: "var(--purple)" }}>
          🎺 Pbuzz
        </Link>

        <Link href="/ouders" className="btn">
            👨‍👩‍👧 Ouders
        </Link>

        {/* 👇 HIER KOMT STAP 3 */}
        <div className="ml-auto flex items-center gap-3">

          {!user && (
            <Link href="/login" className="btn">
              Inloggen
            </Link>
          )}

          {user && (
            <>
              <div className="badge">
                👤 {user}
              </div>

              <button
                onClick={() => {
                  localStorage.removeItem("music_user");
                  localStorage.removeItem("music_unlocked");
                  window.location.reload();
                }}
                className="btn"
              >
                Uitloggen
              </button>
            </>
          )}

        </div>

      </div>
    </nav>
  );
}