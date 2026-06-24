import Link from "next/link";

const HANDBOOK_EXTRAS = {
  Klokkenspel: {
    1: {
      highlights: [
        "Je leert notenkleuren koppelen aan de juiste staafjes op het klokkenspel.",
        "Je ontdekt dat korte staafjes hoger klinken en lange staafjes lager.",
        "Je oefent eerst individueel en daarna samen op een gezamenlijke tel.",
      ],
      tips: [
        "Speel de noten eerst langzaam in kleurvolgorde.",
        "Tel hardop 1-2-3-4 voordat je samen begint.",
        "Blijf doorspelen op laag volume als je twijfelt.",
      ],
      musicParts: [
        { title: "Kleuren en notenbasis", embedUrl: "" },
        { title: "Eerste melodie (les 1)", embedUrl: "" },
      ],
    },
    2: {
      highlights: [
        "Je werkt met verschillende notewaarden en houdt een stabiele tel.",
        "Eye of the Tiger wordt herhaald met meer ritmische zekerheid.",
      ],
      tips: [
        "Tel hardop 1-2-3-4 voordat je inzet.",
        "Speel moeilijke overgangen eerst in twee noten tegelijk.",
      ],
      musicParts: [
        { title: "Ritme-oefening les 2", embedUrl: "" },
        { title: "Eye of the Tiger herhaling", embedUrl: "" },
      ],
    },
    3: {
      highlights: [
        "Je ontdekt het volledige octaaf C-D-E-F-G-A-B-C.",
        "Toonladder-oefeningen helpen om hoger en lager zeker te spelen.",
      ],
      tips: [
        "Speel de toonladder eerst solo, daarna samen op de tel.",
        "Focus op gelijk volume van laag naar hoog.",
      ],
      musicParts: [
        { title: "Toonladder C t/m hoge C", embedUrl: "" },
        { title: "Nieuwe noten in patroon", embedUrl: "" },
      ],
    },
    4: {
      highlights: [
        "Je oefent met tempo: langzaam, midden, snel.",
        "Je voegt dynamiek toe: zacht beginnen en sterker opbouwen.",
      ],
      tips: [
        "Gebruik een metronoom en verhoog tempo in kleine stappen.",
        "Plan bewust een zacht begin en een krachtiger einde.",
      ],
      musicParts: [
        { title: "Tempo-oefening les 4", embedUrl: "" },
        { title: "Dynamiek-oefening (zacht-naar-hard)", embedUrl: "" },
      ],
    },
    5: {
      highlights: [
        "Deze les draait om voorbereiding op het optreden.",
        "Je werkt aan strakke inzetten en betrouwbaar samenspel.",
      ],
      tips: [
        "Kies liever een zachte noot dan stilvallen bij twijfel.",
        "Speel complete doorlopen zodat je opbouw voelt als een optreden.",
      ],
      musicParts: [
        { title: "Repetitie: melodielijn", embedUrl: "" },
        { title: "Generale doorloop", embedUrl: "" },
      ],
    },
  },
  pBuzz: {
    1: {
      highlights: [
        "Je leert hoe je met liptrilling en mondstuk een eerste toon maakt.",
        "Je koppelt schuifposities aan notenkleuren uit het lesboek.",
        "Je speelt de eerste tonen eerst apart en daarna in volgorde.",
      ],
      tips: [
        "Houd je schouders ontspannen en blaas met gelijkmatige lucht.",
        "Controleer eerst toon, schuif daarna pas door.",
        "Werk in korte blokken van 5-10 minuten met pauzes.",
      ],
      musicParts: [
        { title: "Eerste toonvorming", embedUrl: "" },
        { title: "Schuifposities basis", embedUrl: "" },
      ],
    },
    2: {
      highlights: [
        "Je combineert nootlengtes met een vaste puls.",
        "De herhaling van Eye of the Tiger klinkt gecontroleerder.",
      ],
      tips: [
        "Adem laag in en laat de luchtstroom constant blijven.",
        "Wissel schuifpositie pas na de tel voor rust in je spel.",
      ],
      musicParts: [
        { title: "Nootwaarden met blaassteun", embedUrl: "" },
        { title: "Eye of the Tiger pBuzz-partij", embedUrl: "" },
      ],
    },
    3: {
      highlights: [
        "Je leert nieuwe tonen en vergroot je toonvoorraad.",
        "Herhaling geeft vertrouwen voordat je verder uitbreidt.",
      ],
      tips: [
        "Controleer eerst klank, daarna pas snelheid.",
        "Oefen toonwissels in korte lusjes van twee maten.",
      ],
      musicParts: [
        { title: "Nieuwe tonen les 3", embedUrl: "" },
        { title: "Toonwissel-oefening", embedUrl: "" },
      ],
    },
    4: {
      highlights: [
        "Je werkt met tempo-verschillen zonder klankverlies.",
        "Dynamiek maakt je partij muzikaler en duidelijker.",
      ],
      tips: [
        "Houd embouchure stabiel als tempo verandert.",
        "Markeer in je partituur waar je zachter of harder speelt.",
      ],
      musicParts: [
        { title: "Tempo-variatie pBuzz", embedUrl: "" },
        { title: "Dynamiek-fragment pBuzz", embedUrl: "" },
      ],
    },
    5: {
      highlights: [
        "Je bereidt je partij voor op een gezamenlijke uitvoering.",
        "Je focust op stabiele inzetten en betrouwbare toonvorming.",
      ],
      tips: [
        "Werk met vaste ademplannen op dezelfde plekken.",
        "Speel complete stukken om je uithouding op te bouwen.",
      ],
      musicParts: [
        { title: "Repetitie: kernfrases", embedUrl: "" },
        { title: "Generale doorloop", embedUrl: "" },
      ],
    },
  },
  Trommel: {
    1: {
      highlights: [
        "Je leert het verschil tussen slaan op trommel en sticks tegen elkaar.",
        "Je oefent basisritmes eerst alleen en daarna in de groep.",
        "Je houdt een vaste tel aan om samen strak te blijven.",
      ],
      tips: [
        "Begin rustig en bouw tempo stap voor stap op.",
        "Tel 1-2-3-4 hardop mee tijdens oefenen.",
        "Houd stokhoogte laag voor meer controle.",
      ],
      musicParts: [
        { title: "Basis slagtechniek", embedUrl: "" },
        { title: "Eerste ritmepatroon", embedUrl: "" },
      ],
    },
    2: {
      highlights: [
        "Je past notewaarden toe in ritmepatronen.",
        "Je leert om strak op de tel te blijven in herhaling.",
      ],
      tips: [
        "Tel mee in blokken van vier tellen.",
        "Begin langzaam en versnel alleen als het strak blijft.",
      ],
      musicParts: [
        { title: "Basisritme les 2", embedUrl: "" },
        { title: "Begeleidingspatroon Eye of the Tiger", embedUrl: "" },
      ],
    },
    3: {
      highlights: [
        "Je leert rusten meetellen zonder de maat te verliezen.",
        "Ritme met rusttekens wordt geoefend in teamverband.",
      ],
      tips: [
        "Blijf intern doortellen tijdens rusten.",
        "Laat stokhoogte laag voor controle en timing.",
      ],
      musicParts: [
        { title: "Ritme met rusttekens", embedUrl: "" },
        { title: "Gezamenlijk ritme met alle teams", embedUrl: "" },
      ],
    },
    4: {
      highlights: [
        "Je ontdekt het effect van tempo op energie.",
        "Je werkt met dynamiek, van zacht begin naar krachtig einde.",
      ],
      tips: [
        "Gebruik stokcontrole in plaats van alleen kracht.",
        "Maak dynamische verschillen hoorbaar maar muzikaal.",
      ],
      musicParts: [
        { title: "Tempo-oefening trommel", embedUrl: "" },
        { title: "Dynamiek-fragment trommel", embedUrl: "" },
      ],
    },
    5: {
      highlights: [
        "Les 5 draait om repetitie en podiumvoorbereiding.",
        "Je bouwt een betrouwbare groove voor de groep op.",
      ],
      tips: [
        "Speel complete doorlopen met focus op constante puls.",
        "Oefen overgangen tussen delen extra vaak.",
      ],
      musicParts: [
        { title: "Repetitie: hoofdgroove", embedUrl: "" },
        { title: "Generale doorloop", embedUrl: "" },
      ],
    },
  },
};

export default function LessonPage({
  icon,
  instrumentName,
  lessonNumber,
  subtitle,
  introTitle,
  introParagraphs,
  practiceTitle,
  practiceParagraph,
  practiceBullets,
  closingTitle,
  closingText,
  highlights,
  tips,
  musicPartVideos,
}) {
  const handbookExtra = HANDBOOK_EXTRAS[instrumentName]?.[lessonNumber];
  const resolvedHighlights = highlights || handbookExtra?.highlights || [];
  const resolvedTips = tips || handbookExtra?.tips || [];
  const resolvedMusicPartVideos = musicPartVideos || handbookExtra?.musicParts || [];
  const instrumentHref = `/${instrumentName.toLowerCase()}`;

  return (
    <main className="min-h-screen p-8 md:p-12">
      <div className="mb-10 text-center">
        <h1 className="title mb-3">
          {icon} {instrumentName} - Les {lessonNumber}
        </h1>

        <p className="subtitle">{subtitle}</p>
        <p className="subtitle mt-3">
          Pak je lesboek erbij en open de pagina van les {lessonNumber}. Op deze website krijg je extra uitleg en oefenhulp.
        </p>
      </div>

      <section className="card mb-8">
        <h2
          className="text-2xl font-bold mb-4"
          style={{ color: "var(--primary-dark)" }}
        >
          {introTitle}
        </h2>

        <p className="subtitle mb-4">
          Lees eerst de opdracht in je lesboek en gebruik daarna deze pagina om stap voor stap te oefenen.
        </p>

        {introParagraphs.map((paragraph, index) => (
          <p
            key={`${instrumentName}-${lessonNumber}-intro-${index}`}
            className={index < introParagraphs.length - 1 ? "subtitle mb-4" : "subtitle"}
          >
            {paragraph}
          </p>
        ))}
      </section>

      {resolvedMusicPartVideos.length > 0 && (
        <section className="card mb-8">
          <h2
            className="text-2xl font-bold mb-4"
            style={{ color: "var(--pink)" }}
          >
            Extra video per muziekdeel
          </h2>

          <p className="subtitle mb-6">
            Werk per onderdeel uit je lesboek. Bij elk muziekdeel staat hieronder een plek voor een eigen instructievideo.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {resolvedMusicPartVideos.map((part, index) => (
              <article key={`${instrumentName}-${lessonNumber}-part-video-${index}`}>
                <h3 className="font-bold mb-2">{part.title}</h3>
                {part.embedUrl ? (
                  <div className="aspect-video rounded-3xl overflow-hidden shadow-lg">
                    <iframe
                      width="100%"
                      height="100%"
                      src={part.embedUrl}
                      title={`${instrumentName} les ${lessonNumber} ${part.title}`}
                      allowFullScreen
                    ></iframe>
                  </div>
                ) : (
                  <div className="aspect-video rounded-3xl border-2 border-dashed flex items-center justify-center text-center p-4" style={{ borderColor: "var(--border)", background: "#fff" }}>
                    <p className="subtitle">Hier komt straks de video voor: {part.title}. Kijk in je lesboek welk deel je nu oefent.</p>
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>
      )}

      {resolvedHighlights.length > 0 && (
        <section className="card mb-8">
          <h2
            className="text-2xl font-bold mb-4"
            style={{ color: "var(--primary-dark)" }}
          >
            Belangrijke punten uit de les
          </h2>

          <p className="subtitle mb-5">
            Dit zijn de belangrijkste dingen om te onthouden. Je vindt ze ook terug in je lesboek bij les {lessonNumber}.
          </p>

          <div className="grid gap-4">
            {resolvedHighlights.map((item, index) => (
              <article
                key={`${instrumentName}-${lessonNumber}-highlight-${index}`}
                className="rounded-2xl border p-5"
                style={{ borderColor: "var(--border)", background: "#fff" }}
              >
                <h3 className="font-bold mb-2">Punt {index + 1}</h3>
                <p className="subtitle">{item}</p>
              </article>
            ))}
          </div>
        </section>
      )}

      {resolvedTips.length > 0 && (
        <section className="card mb-8">
          <h2
            className="text-2xl font-bold mb-4"
            style={{ color: "var(--green)" }}
          >
            Slimme oefentips voor thuis
          </h2>

          <p className="subtitle mb-5">
            Kies 1 of 2 tips en probeer die meteen bij de oefening uit je lesboek.
          </p>

          <ul className="space-y-3">
            {resolvedTips.map((item, index) => (
              <li key={`${instrumentName}-${lessonNumber}-tip-${index}`} className="badge" style={{ justifyContent: "flex-start" }}>
                {item}
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="card mb-8">
        <h2
          className="text-2xl font-bold mb-4"
          style={{ color: "var(--green)" }}
        >
          {practiceTitle}
        </h2>

        <p className="subtitle mb-4">{practiceParagraph}</p>
        <p className="subtitle mb-4">Gebruik je lesboek tijdens het oefenen en vink af wat al lukt.</p>

        <ul className="space-y-3">
          {practiceBullets.map((bullet, index) => (
            <li key={`${instrumentName}-${lessonNumber}-bullet-${index}`} className="badge">
              {bullet}
            </li>
          ))}
        </ul>
      </section>

      <section className="card text-center">
        <h2
          className="text-2xl font-bold mb-4"
          style={{ color: "var(--purple)" }}
        >
          {closingTitle}
        </h2>

        <p className="subtitle mb-6">{closingText}</p>

        <Link href={instrumentHref} className="btn">
          Terug naar {instrumentName}
        </Link>
      </section>
    </main>
  );
}