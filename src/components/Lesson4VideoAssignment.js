"use client";

import { useEffect, useMemo, useState } from "react";

const normalizeAddress = (value) => {
  if (!value || typeof value !== "string") return "";
  return value.trim();
};

export default function Lesson4VideoAssignment({ instrumentName }) {
  const [status, setStatus] = useState("");
  const [submissionAddress, setSubmissionAddress] = useState("");

  useEffect(() => {
    let active = true;

    const loadSession = async () => {
      try {
        const response = await fetch("/api/session", { cache: "no-store" });
        const payload = await response.json();
        if (!active) return;

        if (!payload?.authenticated || !payload?.user) {
          setSubmissionAddress("");
          return;
        }

        setSubmissionAddress(normalizeAddress(payload.user.submissionAddress));
      } catch {
        if (!active) return;
        setSubmissionAddress("");
      }
    };

    loadSession();
    return () => {
      active = false;
    };
  }, []);

  const openableAddress = useMemo(() => {
    const address = normalizeAddress(submissionAddress);
    if (!address) return "";

    if (/^https?:\/\//i.test(address) || /^mailto:/i.test(address)) {
      return address;
    }

    if (address.includes("@")) {
      return `mailto:${address}`;
    }

    return address;
  }, [submissionAddress]);

  const handleCopy = async () => {
    if (!submissionAddress) return;

    try {
      await navigator.clipboard.writeText(submissionAddress);
      setStatus("Adres gekopieerd. Je kunt het nu plakken.");
    } catch {
      setStatus("Kopieren lukte niet. Kopieer het adres handmatig.");
    }
  };

  const handleOpen = () => {
    if (!openableAddress) return;
    window.open(openableAddress, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="card mb-8">
      <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--pink)" }}>
        Extra opdracht: maak een speelse video
      </h2>

      <p className="subtitle mb-3">
        Maak een leuke video terwijl je op {instrumentName} speelt. Het mag serieus, grappig of helemaal social-media stijl.
      </p>
      <p className="subtitle mb-5">Houd je filmpje kort en leuk, bijvoorbeeld 20 tot 45 seconden.</p>

      {submissionAddress ? (
        <div className="rounded-2xl border p-4" style={{ borderColor: "var(--border)", background: "#fff" }}>
          <p className="font-bold mb-2">Jouw inleveradres</p>
          <p className="subtitle mb-4" style={{ wordBreak: "break-word" }}>
            {submissionAddress}
          </p>

          <div className="flex flex-wrap gap-3">
            <button type="button" className="btn" onClick={handleCopy}>
              Kopieer adres
            </button>
            <button type="button" className="btn" onClick={handleOpen}>
              Open adres
            </button>
          </div>
        </div>
      ) : (
        <div className="rounded-2xl border p-4" style={{ borderColor: "var(--border)", background: "#fff7ed" }}>
          <p className="font-bold mb-2">Nog geen inleveradres ingesteld</p>
          <p className="subtitle">Vraag je docent om voor jouw account een inleveradres in te stellen.</p>
        </div>
      )}

      {status && (
        <p className="subtitle mt-4">{status}</p>
      )}
    </section>
  );
}
