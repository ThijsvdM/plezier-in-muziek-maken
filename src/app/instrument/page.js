"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";

const INSTRUMENTS = {
  klokkenspel: {
    label: "Klokkenspel",
    icon: "🎹",
    themeColor: "var(--primary)",
    accentColor: "var(--yellow)",
    notes: [
      { name: "C", key: "1", freq: 261.63, color: "#ff4d6d", description: "Starttoon en basis van de melodie" },
      { name: "D", key: "2", freq: 293.66, color: "#f7b731", description: "Eerste stap omhoog" },
      { name: "E", key: "3", freq: 329.63, color: "#dced19", description: "Helder en licht van klank" },
      { name: "F", key: "4", freq: 349.23, color: "#16c760", description: "Speel deze noot met rust" },
      { name: "G", key: "5", freq: 392.0, color: "#32969a", description: "Mooie brug naar het volgende deel" },
      { name: "A", key: "6", freq: 440.0, color: "#7a2ed1", description: "Hoog en herkenbaar in de melodie" },
      { name: "B", key: "7", freq: 493.88, color: "#ff4dde", description: "Laatste stap voor de hoge C" },
      { name: "C+", key: "8", freq: 523.25, color: "#ff7b54", description: "Hoge eindnoot van het bereik" },
    ],
    intro: "Speel de 8 klokkenspelnoten met de toetsen 1 t/m 8 of door op de gekleurde vakken te klikken.",
    helperTitle: "Hoe werkt het klokkenspel?",
    helperText: "De kleuren helpen je om de juiste noot snel terug te vinden. De volgorde loopt van C naar de hoge C.",
    helperBadge: "8 noten beschikbaar",
  },
  pbuzz: {
    label: "pBuzz",
    icon: "🎺",
    themeColor: "var(--purple)",
    accentColor: "var(--pink)",
    notes: [
      { name: "F", key: "1", freq: 349.23, color: "#16c760", description: "Begin hier met een rustige ademhaling" },
      { name: "G", key: "2", freq: 392.0, color: "#32969a", description: "Een kleine stap omhoog" },
      { name: "A", key: "3", freq: 440.0, color: "#7a2ed1", description: "Blijf de luchtstroom gelijk houden" },
      { name: "Bb", key: "4", freq: 466.16, color: "#ff4dde", description: "Tussenstap voor de pBuzz-melodie" },
      { name: "B", key: "5", freq: 493.88, color: "#ff4dde", description: "Hoor hoe de toon iets hoger wordt" },
      { name: "C", key: "6", freq: 523.25, color: "#ff7b54", description: "Mooie hoge eindtoon" },
    ],
    intro: "Speel de 6 pBuzz-noten met de toetsen 1 t/m 6 of klik op de kleurvakken.",
    helperTitle: "Hoe werkt de pBuzz?",
    helperText: "Bij de pBuzz werken we met een kleiner bereik: F, G, A, Bb, B en C. Dat maakt de oefening overzichtelijk.",
    helperBadge: "6 noten beschikbaar",
  },
};

export default function InstrumentPage() {
  const audioCtxRef = useRef(null);
  const [instrument, setInstrument] = useState("klokkenspel");
  const [activeNote, setActiveNote] = useState(null);

  const current = useMemo(() => INSTRUMENTS[instrument], [instrument]);

  const playNote = (note) => {
    if (!audioCtxRef.current) {
      audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
    }

    const ctx = audioCtxRef.current;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.frequency.value = note.freq;
    osc.type = "sine";

    gain.gain.setValueAtTime(0.25, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 1);

    setActiveNote(note.name);
    setTimeout(() => setActiveNote(null), 220);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      const note = current.notes.find((item) => item.key === event.key.toLowerCase());
      if (note) {
        playNote(note);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [current.notes]);

  return (
    <main className="relative min-h-screen overflow-hidden p-8 md:p-12" style={{ background: "var(--bg-soft)" }}>
      <div
        className="pointer-events-none absolute -left-10 top-10 h-44 w-44 rounded-full opacity-35 blur-3xl"
        style={{ background: current.accentColor }}
      ></div>
      <div
        className="pointer-events-none absolute right-0 top-28 h-56 w-56 rounded-full opacity-30 blur-3xl"
        style={{ background: current.themeColor }}
      ></div>
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full opacity-20 blur-3xl"
        style={{ background: instrument === "klokkenspel" ? "var(--green)" : "var(--yellow)" }}
      ></div>

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-8 text-center md:mb-10">
          <div className="instrument-header inline-flex items-center gap-2">
            {current.icon} Digitaal instrument
          </div>

          <h1 className="title mt-4">{current.label}</h1>

          <p className="subtitle mx-auto mt-3 max-w-3xl">
            {current.intro}
          </p>
        </div>

        <section className="card mb-8 overflow-hidden">
          <div className="mx-auto flex w-full max-w-xl items-center gap-2 rounded-full border-2 border-[var(--border)] bg-white p-2 shadow-sm">
            {Object.entries(INSTRUMENTS).map(([key, item]) => {
              const isActive = key === instrument;

              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => {
                    setActiveNote(null);
                    setInstrument(key);
                  }}
                  className="relative flex-1 overflow-hidden rounded-full px-4 py-3 text-sm font-bold transition-all duration-300"
                  style={{
                    background: isActive
                      ? `linear-gradient(180deg, ${item.themeColor}, ${item.themeColor})`
                      : "transparent",
                    color: isActive ? "#fff" : "#4b5563",
                    boxShadow: isActive ? "0 10px 18px rgba(0, 0, 0, 0.12)" : "none",
                  }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {item.icon} {item.label}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        <section className="card mb-8">
          <div className={`grid gap-3 ${instrument === "klokkenspel" ? "grid-cols-3 sm:grid-cols-4 md:grid-cols-8" : "grid-cols-3 sm:grid-cols-3 md:grid-cols-6"}`}>
            {current.notes.map((note) => {
              const isActive = activeNote === note.name;

              return (
                <button
                  key={note.name}
                  type="button"
                  onClick={() => playNote(note)}
                  className={`relative h-40 rounded-2xl font-bold text-white shadow-md transition duration-200 hover:scale-105 active:scale-95 ${isActive ? "scale-110 ring-4 ring-white" : ""}`}
                  style={{ backgroundColor: note.color }}
                >
                  <div className="absolute left-3 top-3 rounded-full bg-white/20 px-2 py-1 text-[11px] font-bold">
                    {note.key}
                  </div>

                  <div className="flex h-full flex-col items-center justify-center px-2 text-center">
                    <div className="text-3xl leading-none md:text-4xl">{note.name}</div>
                    <div className="mt-2 text-xs font-medium opacity-90">
                      {instrument === "pbuzz" ? "pBuzz-noot" : "Klokkenspel-noot"}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        <section className="card overflow-hidden p-0">
          <div className="relative h-[280px] bg-white md:h-[400px]">
            <div
              className="absolute inset-x-0 top-0 h-28"
              style={{
                background:
                  instrument === "klokkenspel"
                    ? "linear-gradient(180deg, rgba(255,210,102,0.35), rgba(255,255,255,0))"
                    : "linear-gradient(180deg, rgba(247,141,167,0.28), rgba(255,255,255,0))",
              }}
            ></div>

            <Image
              src="/instrument-octaaf-kleuren.png"
              alt="Kleuren en noten overzicht"
              fill
              sizes="(max-width: 1024px) 100vw, 100vw"
              className="object-contain p-6 md:p-10"
              priority
            />
          </div>
        </section>
      </div>
    </main>
  );
}