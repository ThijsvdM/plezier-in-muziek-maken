import Link from "next/link";

export default function OudersPage() {
  return (
    <main
      className="min-h-screen px-6 py-10 md:px-12 md:py-16"
      style={{ background: "var(--bg-soft)" }}
    >
      <div className="relative max-w-6xl mx-auto">
        <div
          className="pointer-events-none absolute -top-6 left-4 h-24 w-24 rounded-full opacity-60 blur-2xl md:h-32 md:w-32"
          style={{ background: "var(--yellow)" }}
        ></div>
        <div
          className="pointer-events-none absolute right-2 top-20 h-28 w-28 rounded-full opacity-50 blur-2xl md:h-40 md:w-40"
          style={{ background: "var(--pink)" }}
        ></div>

        <div className="relative text-center mb-8 md:mb-12">
          <div className="instrument-header inline-flex items-center gap-2">
            👨‍👩‍👧 Voor ouders
          </div>

          <h1 className="title mt-4">
            Informatie voor ouders
          </h1>

          <p className="subtitle mx-auto mt-3 max-w-2xl">
            Als muziekvereniging nemen we u graag mee in dit project, zodat uw kind met plezier kan blijven groeien in muziek.
          </p>
        </div>

        <section className="card relative overflow-hidden mb-8 md:mb-10">
          <div className="absolute right-0 top-0 h-24 w-24 rounded-full opacity-20" style={{ background: "var(--primary-light)" }}></div>
          <div className="absolute -bottom-6 left-6 h-20 w-20 rounded-full opacity-20" style={{ background: "var(--yellow)" }}></div>

          <div className="relative grid gap-6 md:grid-cols-[1.25fr_0.75fr] md:items-center">
            <div>
              <div className="badge mb-4">Speels leren, zonder prestatiedruk</div>
              <h2 className="text-3xl font-black mb-4" style={{ color: "var(--primary-dark)" }}>
                Samen bouwen we aan muzikale groei
              </h2>
              <p className="subtitle mb-4">
                Vanuit Ons Genoegen Renswoude zien we elke week wat muziek met kinderen doet: ze leren luisteren, doorzetten en stap voor stap vertrouwen opbouwen.
              </p>
              <p className="subtitle">
                Daarom nodigen we ouders uit om actief mee te doen. Juist door thuis positief te blijven stimuleren, blijft muziek maken een gewoonte waar kinderen hun hele leven profijt van hebben.
              </p>
            </div>

            <div className="speech-bubble card bg-white shadow-none">
              <p className="subtitle text-sm uppercase tracking-wide mb-3" style={{ color: "var(--primary-dark)" }}>
                Wat muziek kan ondersteunen
              </p>
              <div className="grid grid-cols-2 gap-3">
                <div className="badge text-center py-3">Concentratie</div>
                <div className="badge text-center py-3">Geheugen</div>
                <div className="badge text-center py-3">Creativiteit</div>
                <div className="badge text-center py-3">Zelfvertrouwen</div>
              </div>
            </div>
          </div>
        </section>

        <section className="card mb-8 md:mb-10">
          <div className="max-w-3xl">
            <div className="badge mb-3">Stap voor stap</div>
            <h2 className="text-2xl font-black mb-3" style={{ color: "var(--primary-dark)" }}>
              Hoe werkt het?
            </h2>
            <p className="subtitle text-sm">
              Van eerste les tot optreden: zo is het traject opgebouwd.
            </p>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            <article className="rounded-3xl border bg-white p-4" style={{ borderColor: "var(--border)" }}>
              <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full text-sm font-black" style={{ background: "var(--yellow)", color: "#523800" }}>
                1
              </div>
              <h3 className="text-lg font-black mb-2" style={{ color: "var(--primary-dark)" }}>
                Boek en instrument mee naar huis
              </h3>
              <p className="subtitle text-sm">
                Uw kind krijgt een boek en instrument mee, zodat thuis rustig verder geoefend kan worden.
              </p>
            </article>

            <article className="rounded-3xl border bg-white p-4" style={{ borderColor: "var(--border)" }}>
              <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full text-sm font-black" style={{ background: "var(--pink)", color: "#7a1630" }}>
                2
              </div>
              <h3 className="text-lg font-black mb-2" style={{ color: "var(--primary-dark)" }}>
                Meteen resultaat in de klas
              </h3>
              <p className="subtitle text-sm">
                In de klas maken we direct samen muziek, zodat kinderen meteen resultaat horen en plezier ervaren.
              </p>
            </article>

            <article className="rounded-3xl border bg-white p-4" style={{ borderColor: "var(--border)" }}>
              <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full text-sm font-black" style={{ background: "var(--green)", color: "#064e3b" }}>
                3
              </div>
              <h3 className="text-lg font-black mb-2" style={{ color: "var(--primary-dark)" }}>
                Thuis verder oefenen
              </h3>
              <p className="subtitle text-sm">
                Met boek en website groeit de moeilijkheid stap voor stap, maar blijft het oefenen goed haalbaar.
              </p>
            </article>

            <article className="rounded-3xl border bg-white p-4" style={{ borderColor: "var(--border)" }}>
              <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full text-sm font-black" style={{ background: "var(--primary-light)", color: "var(--primary-dark)" }}>
                4
              </div>
              <h3 className="text-lg font-black mb-2" style={{ color: "var(--primary-dark)" }}>
                Optreden en vervolg
              </h3>
              <p className="subtitle text-sm">
                Het traject eindigt met een optreden in het muziekgebouw, met daarna eventueel vervolglessen.
              </p>
            </article>
          </div>
        </section>

        <section className="card mb-8 md:mb-10">
          <div className="max-w-4xl mb-6">
            <div className="badge mb-4">Per instrument</div>
            <h2 className="text-2xl font-black mb-4" style={{ color: "var(--purple)" }}>
              Wat uw kind leert per instrument
            </h2>

            <p className="subtitle">
              In dit project gaat het niet alleen om een instrument leren kennen, maar vooral om met plezier groeien in ritme, luisteren, samenspelen en zelfvertrouwen. Hieronder ziet u hoe elk instrument daaraan bijdraagt en hoe u thuis kunt helpen.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <article className="card bg-white shadow-none">
              <div className="text-4xl mb-3">🎵</div>
              <h3 className="font-black mb-2" style={{ color: "var(--primary)" }}>
                Klokkenspel
              </h3>
              <p className="subtitle text-sm mb-3">
                Een klokkenspel heeft metalen staven en een heldere klank. Kinderen trainen hiermee hun gehoor voor toonhoogte en leren melodieën herkennen en onthouden.
              </p>
              <p className="subtitle text-sm">
                Thuis-tip: oefen met rustige, korte tikken en een losse stokgreep. Eerst langzaam van laag naar hoog, daarna pas kleine melodieën. Zo merkt uw kind snel dat oefenen echt resultaat oplevert.
              </p>
            </article>

            <article className="card bg-white shadow-none">
              <div className="text-4xl mb-3">🥁</div>
              <h3 className="font-black mb-2" style={{ color: "var(--pink)" }}>
                Trommel
              </h3>
              <p className="subtitle text-sm mb-3">
                Op trommel ontwikkelen kinderen ritmegevoel, timing en controle. Met herhaling groeit hun gevoel voor maat, samenspel en doorzetten.
              </p>
              <p className="subtitle text-sm">
                Thuis-tip: oefen met ontspannen polsen, afwisselend rechts-links en zachte rebound. Zuiver en stabiel is belangrijker dan hard of snel. Korte oefenmomenten geven hier vaak al veel succeservaring.
              </p>
            </article>

            <article className="card bg-white shadow-none">
              <div className="text-4xl mb-3">🎺</div>
              <h3 className="font-black mb-2" style={{ color: "var(--purple)" }}>
                pBuzz
              </h3>
              <p className="subtitle text-sm mb-3">
                De pBuzz is een kunststof instrument met uitschuifbare buis, vergelijkbaar met een trombone. Kinderen oefenen ademsteun, embouchure, toonvorming en leren goed luisteren naar verschil in toonhoogte.
              </p>
              <p className="subtitle text-sm">
                Thuis-tip: begin met rechte houding, rustige ademhaling en korte speelmomenten. Werk eerst aan een stabiele toon en daarna aan toonwisselingen. Ook hier helpt het als uw kind merkt dat kleine stappen al hoorbaar verschil maken.
              </p>
            </article>
          </div>
        </section>

        <div className="grid gap-8 lg:grid-cols-2 mb-8 md:mb-10">
          <section className="card">
            <div className="badge mb-4">Thuis oefenen</div>
            <h2 className="text-2xl font-black mb-4" style={{ color: "var(--green)" }}>
              Dit online portaal
            </h2>
            <p className="subtitle mb-4">
              Dit portaal ondersteunt het lesboek dat kinderen hebben meegekregen. Samen vormen ze een doorgaande leerlijn van les naar thuis.
            </p>
            <p className="subtitle mb-4">
              In het boek staan opdrachten, in het portaal vinden kinderen voorbeelden, uitleg en speelse herhaling. Zo wordt oefenen overzichtelijk, haalbaar en motiverend.
            </p>
            <p className="subtitle">
              Videos laten horen en zien hoe muziek bedoeld is om te klinken. Dat helpt kinderen om thuis met meer zekerheid te oefenen en sneller trots te zijn op wat al lukt.
            </p>
          </section>

          <section className="card">
            <div className="badge mb-4">Ondersteunen thuis</div>
            <h2 className="text-2xl font-black mb-4" style={{ color: "var(--primary-dark)" }}>
              Uw rol als ouder maakt het verschil
            </h2>
            <p className="subtitle mb-4">
              Kinderen blijven vaker muziek maken wanneer ouders betrokken zijn. U hoeft geen muzikant te zijn, uw aandacht en aanmoediging zijn al enorm waardevol.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="badge text-center py-3">Kijk 5 minuten mee</div>
              <div className="badge text-center py-3">Geef complimenten op inzet</div>
              <div className="badge text-center py-3">Laat 1 stukje voordoen</div>
              <div className="badge text-center py-3">Neem pauze als het niet lukt</div>
            </div>
            <p className="subtitle mt-4">
              Vaak helpt het al om even te luisteren, een vast oefenmoment te kiezen en uw kind iets korts te laten voordoen. Juist op momenten dat iets nog niet lukt, leren kinderen doorzetten. Met kleine stappen en positieve feedback groeit zowel muzikaliteit als zelfvertrouwen.
            </p>
          </section>
        </div>

        <section className="card mb-8 md:mb-10">
          <div className="max-w-4xl">
            <div className="badge mb-4">Waarom dit werkt</div>
            <h2 className="text-2xl font-black mb-4" style={{ color: "var(--primary)" }}>
              Waarom blijven doorgaan zo belangrijk is
            </h2>
            <p className="subtitle mb-4">
              Muziek maken werkt het best op de lange termijn. Door te blijven oefenen, ook als het soms lastig is, merken kinderen dat inspanning echt resultaat geeft.
            </p>
            <p className="subtitle">
              Die ervaring nemen ze mee naar school en andere activiteiten: volhouden, samenwerken en trots zijn op wat je hebt geleerd. Daarom moedigen we als vereniging aan om muziek vooral vol te houden en kinderen ook na dit programma te blijven stimuleren.
            </p>
          </div>
        </section>

        <section className="card relative overflow-hidden">
          <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full opacity-20" style={{ background: "var(--green)" }}></div>
          <div className="relative flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-black mb-2" style={{ color: "var(--pink)" }}>
                📚 Meer informatie
              </h2>
              <p className="subtitle max-w-2xl">
                Wilt u meer weten over onze vereniging, dit project of de mogelijkheden om daarna door te gaan met muziekles? We vertellen u er graag meer over.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href="https://www.onsgenoegen.org"
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                Meer over muziekeducatie
              </a>

              <Link href="/contact" className="btn">
                Contact opnemen
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}