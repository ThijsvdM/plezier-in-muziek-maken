"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function InstrumentPage() {
  const audioCtxRef = useRef(null);
  const [activeNote, setActiveNote] = useState(null);

  const notes = [
    { name: "C", color: "#ff4d6d", freq: 261.63, key: "1" },
    { name: "D", color: "#f7b731", freq: 293.66, key: "2" },
    { name: "E", color: "#dced19", freq: 329.63, key: "3" },
    { name: "F", color: "#16c760", freq: 349.23, key: "4" },
    { name: "G", color: "#32969a", freq: 392.0, key: "5" },
    { name: "A", color: "#7a2ed1", freq: 440.0, key: "6" },
    { name: "B", color: "#ff4dde", freq: 493.88, key: "7" },
    { name: "C+", color: "#ff4d6d", freq: 523.25, key: "8" }
  ];

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
    setTimeout(() => setActiveNote(null), 200);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      const note = notes.find(n => n.key === e.key.toLowerCase());
      if (note) playNote(note);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden p-8 md:p-12" style={{ background: "var(--bg-soft)" }}>
      <div
        className="pointer-events-none absolute -left-10 top-10 h-44 w-44 rounded-full opacity-35 blur-3xl"
        style={{ background: "var(--primary-light)" }}
      ></div>
      <div
        className="pointer-events-none absolute right-0 top-28 h-56 w-56 rounded-full opacity-30 blur-3xl"
        style={{ background: "var(--yellow)" }}
      ></div>
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full opacity-20 blur-3xl"
        style={{ background: "var(--pink)" }}
      ></div>

      <div className="relative text-center mb-10">
        <h1 className="title">🎹 Digitaal instrument</h1>
        <p className="subtitle">Klik of gebruik 1 2 3 4 5 6 7 8 om te spelen. <br />Handig, voor als je wilt oefenen en je jouw instrument niet bij de hand hebt!</p>
      </div>

      <div className="relative card max-w-5xl mx-auto">
        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-8 gap-2">

          {notes.map((note) => (
            <button
              key={note.name}
              onClick={() => playNote(note)}
              className={`
                flex-1 min-w-[100px] h-44 rounded-xl
                text-white font-bold shadow-md
                transition
                hover:scale-105 active:scale-95
                ${activeNote === note.name ? "scale-110 ring-4 ring-white" : ""}
              `}
              style={{ backgroundColor: note.color }}
            >
              {note.name}
            </button>
          ))}

      </div>
                {/* 🎨 Kleurenoverzicht */}
        <div className="card max-w-5xl mx-auto mt-8">
          <p className="subtitle text-center mb-6">
            Op het klokkenspel en de pBuzz staat iedere kleur voor een vaste noot.
          </p>

          <div className="relative w-full h-[250px] md:h-[400px]">
            <Image
              src="/instrument-octaaf-kleuren.png"
              alt="Kleuren en noten overzicht"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>

    </main>
  );
}