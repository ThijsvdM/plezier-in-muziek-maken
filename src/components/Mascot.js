"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Mascot() {
  const [open, setOpen] = useState(true);
  const [message, setMessage] = useState("");

  const path = usePathname();

  const tips = {
    "/klokkenspel": [
      "Probeer Les 1 eerst rustig 🎵",
      "Speel langzaam en luister goed",
      "Fouten maken is helemaal oké!"
    ],
    "/trommel": [
      "Begin met een rustig ritme 🥁",
      "Tel hardop mee 1-2-3-4",
      "Oefen eerst langzaam"
    ],
    "/pbuzz": [
      "Blaas zacht en gelijkmatig 🎷",
      "Houd lange tonen vast",
      "Adem rustig in en uit"
    ],
    "/": [
      "Kies een instrument!",
      "Welkom bij Muziek Avontuur 🎵",
      "Klik op een kaart om te starten"
    ]
  };

  useEffect(() => {
    const pageTips = tips[path] || ["Veel plezier met muziek maken!"];

    const randomTip =
      pageTips[Math.floor(Math.random() * pageTips.length)];

    setMessage(randomTip);
  }, [path]);

return (
 <div className="hidden md:flex fixed bottom-6 right-6 z-50 flex-col items-end">

    {/* 💬 BUBBLE */}
    {open && (
    <div className="card speech-bubble" style={{ maxWidth: "220px", backgroundColor: "white" }}>
        <p className="text-sm subtitle">🎵 {message}</p>

        <button onClick={() => setOpen(false)} className="btn mt-3 text-xs">
        Verbergen
        </button>
    </div>
    )}

        {/* 🧸 MASCOt (TOGGLE BUTTON) */}
        <button
        onClick={() => setOpen(!open)}
        aria-label="Open mascotte"
        className="
            relative w-24 h-24 mascot-float
            rounded-full
            bg-white
            border-4 border-[var(--primary-light)]
            shadow-lg
            overflow-hidden
            transition-all duration-300
            hover:scale-110
            hover:shadow-[0_0_25px_rgba(6,147,227,0.4)]
        "
        >
        <Image
            src="/mascotte.png"
            alt="Mascotte"
            fill
            className="object-cover"
        />
        </button>

   </div>
);
}