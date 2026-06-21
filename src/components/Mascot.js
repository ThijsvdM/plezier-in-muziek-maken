"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

function getMascotContext(path) {
  if (path === "/") {
    return {
      title: "Tip van de mascotte",
      subtitle: "Een klein duwtje in de goede richting.",
      tips: [
        "Kijk rustig rond tussen de instrumenten",
        "Elk instrument heeft een eigen sfeer",
        "Begin waar je het meest nieuwsgierig naar bent",
      ],
    };
  }

  if (path === "/login") {
    return {
      title: "Tip van de mascotte",
      subtitle: "Deze pagina helpt je met de volgende stap.",
      tips: [
        "Druk op Enter of gebruik de knop om in te loggen",
        "Na het inloggen ga je terug naar de hoofdpagina",
        "Les 2 t/m 5 komen dan beschikbaar",
      ],
    };
  }

  if (path === "/instrument") {
    return {
      title: "Tip van de mascotte",
      subtitle: "Handig om even mee te oefenen.",
      tips: [
        "Gebruik 1 t/m 8 om de noten te spelen",
        "De kleurenkaart helpt bij het onthouden",
        "Klik ook gerust op de toetsen zelf",
      ],
    };
  }

  if (path.startsWith("/klokkenspel/les-1")) {
    return {
      title: "Tip van de mascotte",
      subtitle: "De eerste klokkenspel-les vraagt vooral rust.",
      tips: [
        "Speel de noten langzaam en precies",
        "Kijk goed naar de gekleurde toetsen",
        "Happy Birthday is een fijne extra oefening",
      ],
    };
  }

  if (path.startsWith("/klokkenspel/les-")) {
    const lessonNumber = path.split("/les-")[1];
    const klokkenspelTips = {
      "2": ["Oefen korte melodieën stap voor stap", "Let op de volgorde van de noten", "Rustig spelen klinkt het mooist"],
      "3": ["Speel de hele melodie van begin tot eind", "Bouw pas snelheid op als het lukt", "Hou je vingers dicht bij de juiste toetsen"],
      "4": ["Voeg nieuwe noten één voor één toe", "Maak de overgangen soepel", "Kleine stukjes oefenen helpt het meest"],
      "5": ["Herhaal het stukje totdat het vanzelf gaat", "Speel een iets langere melodie", "Blijf luisteren naar de toon"],
      "6": ["Combineer noten zonder haast", "Let op hoe de melodie doorloopt", "Rustig oefenen geeft controle"],
      "7": ["Controle is belangrijker dan snelheid", "Voeg extra noten pas toe als het basisstuk lukt", "Speel helder en nauwkeurig"],
      "8": ["Wissel rustig tussen de stukjes", "Houd het tempo gelijk", "Luister hoe de melodie samenkomt"],
      "9": ["Herhaal de belangrijkste delen nog eens", "Zie dit als voorbereiding op les 10", "Probeer niet te snel vooruit te gaan"],
      "10": ["Laat alles wat je hebt geleerd samen horen", "Speel met vertrouwen en een rustige afsluiting", "Dit is jouw mini-optreden"],
    };

    return {
      title: `Klokkenspel les ${lessonNumber}`,
      subtitle: "Een rustige herinnering bij deze les.",
      tips: klokkenspelTips[lessonNumber] || ["Speel rustig en luister goed", "Volg de noten stap voor stap", "Fouten maken hoort bij oefenen"],
    };
  }

  if (path.startsWith("/trommel/les-1")) {
    return {
      title: "Tip van de mascotte",
      subtitle: "De trommel werkt het mooist met een vaste beat.",
      tips: [
        "Gebruik je vingers of stokken met een vaste beat",
        "Een tafel werkt prima als oefentrommel",
        "Begin rustig en tel hardop mee",
      ],
    };
  }

  if (path.startsWith("/trommel/les-")) {
    const lessonNumber = path.split("/les-")[1];
    const trommelTips = {
      "2": ["Houd het ritme gelijkmatig", "Tel hardop als dat helpt", "Blijf goed luisteren naar de beat"],
      "3": ["Speel het korte ritme zelfstandig", "Probeer de maat vast te houden", "Herhalen maakt het ritme sterker"],
      "4": ["Let op hard en zacht spelen", "Nieuwe slagen klinken het mooist in een rustig tempo", "Volg de volgorde van de slagen"],
      "5": ["Bouw het ritme op uit kleine stukjes", "Wissel rustig van hand", "Laat de slagen soepel overlopen"],
      "6": ["Speel gecontroleerd terwijl de slagen afwisselen", "Houd je tempo strak", "Luister naar hoe het ritme doorloopt"],
      "7": ["Speel het extra stukje op het juiste moment", "Timing is hier belangrijk", "Blijf eerst de basis goed houden"],
      "8": ["Wissel tussen de patronen zonder te haasten", "Blijf tellen zodat je de maat niet kwijtraakt", "Maak de overgang soepel"],
      "9": ["Herhaal de belangrijkste ritmes", "Speel de complete oefening van begin tot eind", "Houd het tempo overal gelijk"],
      "10": ["Laat jouw ritme stevig horen", "Speel met vertrouwen naar de afsluiting toe", "Dit is jouw trommel-eindstuk"],
    };

    return {
      title: `Trommel les ${lessonNumber}`,
      subtitle: "Een kleine herinnering bij het ritme van deze les.",
      tips: trommelTips[lessonNumber] || ["Blijf rustig tellen", "Houd de beat vast", "Begin langzaam en bouw op"],
    };
  }

  if (path.startsWith("/pbuzz/les-1")) {
    return {
      title: "pBuzz les 1",
      subtitle: "De eerste tonen rustig laten klinken.",
      tips: [
        "Blaas zacht en gelijkmatig",
        "Ontspanning helpt om een mooie toon te krijgen",
        "Een rustige start klinkt vaak het best",
      ],
    };
  }

  if (path.startsWith("/pbuzz/les-")) {
    const lessonNumber = path.split("/les-")[1];
    const pbuzzTips = {
      "2": ["Werk aan een stabiele toon", "Let op je ademhaling", "Blijf rustig blazen"],
      "3": ["Gebruik de schuif om de juiste toon te vinden", "Maak kleine bewegingen", "Blaas gelijkmatig tijdens het wisselen"],
      "4": ["Houd een lange toon vast", "Ontspan je lippen en adem rustig", "Luister of de klank mooi blijft"],
      "5": ["Speel de toonwisselingen als een klein melodietje", "Let goed op de volgorde", "Rustig blazen maakt de overgang mooier"],
      "6": ["Wissel soepel tussen de tonen", "Houd je adem rustig en gelijkmatig", "Probeer de melodie te laten doorlopen"],
      "7": ["Maak de toon stabiel voordat je verder gaat", "Controle over ademhaling en schuif is belangrijk", "Een rustige toon klinkt vaak het mooist"],
      "8": ["Laat de melodie in beweging blijven", "Maak de overgangen zo soepel mogelijk", "Blijf luisteren naar elke toonwisseling"],
      "9": ["Herhaal de belangrijkste delen", "Speel de hele oefening rustig achter elkaar", "Je bent bijna klaar voor de afsluiter"],
      "10": ["Laat horen wat je hebt geleerd", "Blaas met vertrouwen en controle", "Dit is jouw pBuzz-eindmoment"],
    };

    return {
      title: `pBuzz les ${lessonNumber}`,
      subtitle: "Een zachte herinnering voor adem, toon en timing.",
      tips: pbuzzTips[lessonNumber] || ["Blaas zacht en gelijkmatig", "Adem rustig in en uit", "Luister goed naar je toon"],
    };
  }

  if (path.startsWith("/klokkenspel")) {
    return {
      title: "Tip van de mascotte",
      subtitle: "Een klein overzicht van de klokkenspel-lessen.",
      tips: [
        "Begin met les 1 en bouw rustig op",
        "Les 2 t/m 5 worden na inloggen zichtbaar",
        "Les 6 t/m 10 blijven voorlopig gesloten",
      ],
    };
  }

  if (path.startsWith("/trommel")) {
    return {
      title: "Tip van de mascotte",
      subtitle: "Een klein overzicht van de trommelles.",
      tips: [
        "Begin met les 1 en houd het ritme rustig",
        "Na inloggen komen les 2 t/m 5 beschikbaar",
        "Les 6 t/m 10 blijven nog even dicht",
      ],
    };
  }

  if (path.startsWith("/pbuzz")) {
    return {
      title: "Tip van de mascotte",
      subtitle: "Een klein overzicht van de pBuzz-lessen.",
      tips: [
        "Start met de eerste tonen en een rustige ademhaling",
        "Na inloggen komen les 2 t/m 5 beschikbaar",
        "Les 6 t/m 10 blijven nog even gesloten",
      ],
    };
  }

  return {
    title: "Muziek Avontuur",
    subtitle: "Veel plezier met oefenen.",
    tips: ["Veel plezier met muziek maken!"],
  };
}

export default function Mascot() {
  const [open, setOpen] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    return localStorage.getItem("mascot_hidden") !== "true";
  });
  const [message, setMessage] = useState("");

  const path = usePathname();
  const mascotContext = useMemo(() => getMascotContext(path), [path]);

  useEffect(() => {
    const randomTip = mascotContext.tips[Math.floor(Math.random() * mascotContext.tips.length)];
    setMessage(randomTip);
  }, [mascotContext]);

  const showMascot = () => {
    localStorage.setItem("mascot_hidden", "false");
    setOpen(true);
  };

  const hideMascot = () => {
    localStorage.setItem("mascot_hidden", "true");
    setOpen(false);
  };

  return (
    <div className="hidden md:block fixed bottom-6 right-6 z-50">
      <div className="flex flex-col items-end gap-4">
        {open && (
          <div
            className="card speech-bubble relative overflow-hidden"
            style={{
              maxWidth: "260px",
              padding: "16px",
              background: "linear-gradient(180deg, rgba(255,255,255,0.98), rgba(255,250,245,0.98))",
              borderColor: "var(--primary-light)",
              boxShadow: "0 10px 24px rgba(0, 0, 0, 0.08)",
            }}
          >
            <div
              className="absolute -right-8 -top-8 h-20 w-20 rounded-full opacity-15"
              style={{ background: "var(--yellow)" }}
            ></div>
            <div
              className="absolute -left-6 bottom-2 h-14 w-14 rounded-full opacity-10"
              style={{ background: "var(--pink)" }}
            ></div>

            <div className="relative flex items-start gap-3">
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
                style={{ background: "rgba(142, 209, 252, 0.22)" }}
              >
                <span className="text-xl">💡</span>
              </div>

              <div>
                <p className="text-sm font-semibold leading-6" style={{ color: "var(--primary-dark)" }}>
                  🎵 {message}
                </p>
              </div>
            </div>

            <button onClick={hideMascot} className="btn mt-3 text-xs px-3 py-2">
              Tip verbergen
            </button>
          </div>
        )}

        <button
          onClick={() => (open ? hideMascot() : showMascot())}
          aria-label="Open mascotte"
          className="relative h-20 w-20 shrink-0 overflow-hidden rounded-[24px] border-3 border-[var(--primary-light)] bg-white shadow-md transition-all duration-300 hover:scale-102 hover:shadow-[0_0_18px_rgba(6,147,227,0.22)]"
          style={{ padding: 0 }}
        >
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.92), rgba(255,255,255,0.45))" }}
          ></div>
          <Image
            src="/mascotte.png"
            alt="Mascotte"
            fill
            sizes="80px"
            className="object-contain p-3"
            priority
          />
        </button>
      </div>
    </div>
  );
}