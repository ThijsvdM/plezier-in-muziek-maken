"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleLogin = async (event) => {
    event?.preventDefault();
    setError("");

    if (!username.trim() || !password.trim()) {
      setError("Vul gebruikersnaam en wachtwoord in.");
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username.trim(),
          password: password.trim(),
        }),
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => ({}));
        setError(payload?.message || "Inloggen mislukt.");
        return;
      }

      router.push("/");
      router.refresh();
    } catch {
      setError("Inloggen mislukt. Probeer het opnieuw.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main
      className="relative min-h-screen flex items-center justify-center overflow-hidden p-6"
      style={{
        background: "var(--bg-soft)",
      }}
    >
      <div
        className="pointer-events-none absolute -left-8 top-12 h-40 w-40 rounded-full opacity-40 blur-3xl"
        style={{ background: "var(--yellow)" }}
      ></div>
      <div
        className="pointer-events-none absolute right-4 top-8 h-48 w-48 rounded-full opacity-35 blur-3xl"
        style={{ background: "var(--pink)" }}
      ></div>
      <div
        className="pointer-events-none absolute bottom-4 left-1/3 h-56 w-56 rounded-full opacity-25 blur-3xl"
        style={{ background: "var(--primary-light)" }}
      ></div>

      <form
        className="card relative w-full max-w-md text-center"
        onSubmit={handleLogin}
        style={{
          position: "relative",
          overflow: "hidden",
        }}
      >

        {/* Decoration */}
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

        {/* Icon */}
        <div
          className="mb-4"
          style={{
            fontSize: "5rem",
          }}
        >
          🎵
        </div>

        {/* Title */}
        <h1 className="title mb-2">
          Inloggen
        </h1>

        <p className="subtitle mb-8">
          Log in en speel verder 🎶
        </p>

        {/* Username */}
        <input
          type="text"
          placeholder="Gebruikersnaam"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="input mb-4"
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Wachtwoord"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input mb-4"
        />

        {/* Error */}
        {error && (
          <div className="error-box mb-5">
            {error}
          </div>
        )}

        {/* Login button */}
        <button
          type="submit"
          className="btn w-full clickable"
          disabled={submitting}
          style={{
            fontSize: "1.1rem",
            padding: "14px",
            opacity: submitting ? 0.75 : 1,
          }}
        >
          {submitting ? "Bezig met inloggen..." : "Start avontuur"}
        </button>

        {/* Extra info */}
        <div
          className="mt-6"
          style={{
            fontSize: "0.9rem",
            color: "#6b7280",
          }}
        >
          Je kunt inloggen met de gegevens op pagina 3 van je lesboek.
        </div>

      </form>
    </main>
  );
}