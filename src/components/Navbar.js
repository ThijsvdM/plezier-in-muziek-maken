"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [user, setUser] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const name = localStorage.getItem("music_user");
    setUser(name);
  }, []);

  const closeMobileMenu = () => setMobileOpen(false);

  const navItems = [
    { href: "/", label: "🏠 Home", style: {} },
    { href: "/klokkenspel", label: "🎵 Klokkenspel", style: { background: "var(--yellow)", color: "#333" } },
    { href: "/trommel", label: "🥁 Trommel", style: { background: "var(--pink)", color: "#333" } },
    { href: "/pbuzz", label: "🎺 Pbuzz", style: { background: "var(--purple)" } },
    { href: "/ouders", label: "👨‍👩‍👧 Ouders", style: {} },
  ];

  return (
    <>
      <nav className="md:hidden sticky top-0 z-50 backdrop-blur-md"
      style={{
        background: "rgba(255,255,255,0.85)",
        borderBottom: "2px solid var(--border)",
      }}
      >
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-3">
          <Link href="/" className="btn shrink-0" onClick={closeMobileMenu}>
            🏠 Home
          </Link>

          <div className="ml-auto flex items-center gap-2">
            {user && (
              <div className="badge hidden sm:inline-flex">👤 {user}</div>
            )}

            <button
              type="button"
              onClick={() => setMobileOpen((current) => !current)}
              className="btn inline-flex items-center gap-2"
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
            >
              <span className="flex flex-col gap-1">
                <span className="block h-0.5 w-4 rounded-full bg-white"></span>
                <span className="block h-0.5 w-4 rounded-full bg-white"></span>
                <span className="block h-0.5 w-4 rounded-full bg-white"></span>
              </span>
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div id="mobile-navigation" className="border-t-2" style={{ borderColor: "var(--border)" }}>
            <div className="max-w-6xl mx-auto px-4 py-4 grid gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="btn text-center"
                  style={{ ...item.style, width: "100%" }}
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </Link>
              ))}

              {!user ? (
                <Link href="/login" className="btn text-center" onClick={closeMobileMenu}>
                  Inloggen
                </Link>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    localStorage.removeItem("music_user");
                    localStorage.removeItem("music_unlocked");
                    setUser(null);
                    closeMobileMenu();
                    window.location.reload();
                  }}
                  className="btn"
                >
                  Uitloggen
                </button>
              )}
            </div>
          </div>
        )}
      </nav>

      <nav
        className="hidden md:block sticky top-0 z-40 backdrop-blur-md"
        style={{
          background: "rgba(255,255,255,0.85)",
          borderBottom: "2px solid var(--border)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-wrap justify-center gap-4">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="btn" style={item.style}>
              {item.label}
            </Link>
          ))}

          <div className="ml-auto flex items-center gap-3">
            {!user && (
              <Link href="/login" className="btn">
                Inloggen
              </Link>
            )}

            {user && (
              <>
                <div className="badge">👤 {user}</div>

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
    </>
  );
}