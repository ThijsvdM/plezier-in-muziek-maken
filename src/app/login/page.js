"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // 🎵 Demo accounts
  const users = [
    {
      username: "leerling",
      password: "muziek123",
    },
    {
      username: "thijs",
      password: "drummen",
    },
  ];

  const handleLogin = () => {
    const foundUser = users.find(
      (user) =>
        user.username === username &&
        user.password === password
    );

    if (!foundUser) {
      setError("❌ Gebruikersnaam of wachtwoord klopt niet");
      return;
    }

    // ✅ login opslaan
    localStorage.setItem("music_user", foundUser.username);

    // 🔓 lessen unlocken
    localStorage.setItem("music_unlocked", "true");

    // ➜ redirect
    router.push("/");
    window.location.reload();
  };

  return (
    <main
      className="min-h-screen flex items-center justify-center p-6"
      style={{
        background: "var(--bg-soft)",
      }}
    >
      <div
        className="card w-full max-w-md text-center"
        style={{
          position: "relative",
          overflow: "hidden",
        }}
      >

        {/* 🎨 DECORATION */}
        <div
          style={{
            position: "absolute",
            top: "-60px",
            right: "-60px",
            width: "160px",
            height: "160px",
            background: "var(--primary-light)",
            borderRadius: "999px",
            opacity: 0.25,
          }}
        />

        {/* 🎵 ICON */}
        <div
          className="mb-4"
          style={{
            fontSize: "5rem",
          }}
        >
          🎵
        </div>

        {/* 🧠 TITLE */}
        <h1 className="title mb-2">
          Inloggen
        </h1>

        <p className="subtitle mb-8">
          Log in en speel verder 🎶
        </p>

        {/* 👤 USERNAME */}
        <input
          type="text"
          placeholder="Gebruikersnaam"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="input mb-4"
        />

        {/* 🔒 PASSWORD */}
        <input
          type="password"
          placeholder="Wachtwoord"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input mb-4"
        />

        {/* ❌ ERROR */}
        {error && (
          <div className="error-box mb-5">
            {error}
          </div>
        )}

        {/* 🚀 LOGIN BUTTON */}
        <button
          onClick={handleLogin}
          className="btn w-full clickable"
          style={{
            fontSize: "1.1rem",
            padding: "14px",
          }}
        >
          🚀 Start avontuur
        </button>

        {/* 🎨 EXTRA INFO */}
        <div
          className="mt-6"
          style={{
            fontSize: "0.9rem",
            color: "#6b7280",
          }}
        >
          Gebruik bijvoorbeeld:
          <br />
          <strong>leerling</strong> / muziek123
        </div>

      </div>
    </main>
  );
}