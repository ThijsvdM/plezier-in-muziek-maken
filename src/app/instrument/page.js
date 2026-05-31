"use client";

import { useEffect, useRef, useState } from "react";

export default function InstrumentPage() {
  const audioCtxRef = useRef(null);
  const [activeNote, setActiveNote] = useState(null);

  const notes = [
    { name: "Do", color: "var(--primary)", freq: 261.63, key: "a" },
    { name: "Re", color: "var(--yellow)", freq: 293.66, key: "s" },
    { name: "Mi", color: "var(--green)", freq: 329.63, key: "d" },
    { name: "Fa", color: "var(--pink)", freq: 349.23, key: "f" },
    { name: "Sol", color: "var(--purple)", freq: 392.0, key: "g" },
    { name: "La", color: "#ff7ad9", freq: 440.0, key: "h" },
    { name: "Ti", color: "#ff4d6d", freq: 493.88, key: "j" },
    { name: "Do+", color: "#7df9ff", freq: 523.25, key: "k" }
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
    <main className="min-h-screen p-8 md:p-12" style={{ background: "var(--bg-soft)" }}>

      <div className="text-center mb-10">
        <h1 className="title">🎹 Digitaal instrument</h1>
        <p className="subtitle">Klik of gebruik A S D F G H J K om te spelen</p>
      </div>

      <div className="card max-w-5xl mx-auto">
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
      </div>

    </main>
  );
}