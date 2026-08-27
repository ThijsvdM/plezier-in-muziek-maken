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
            Alles wat u nodig heeft om uw kind thuis op een speelse, rustige manier te begeleiden.
          </p>
        </div>

        <section className="card relative overflow-hidden mb-8 md:mb-10">
          <div className="absolute right-0 top-0 h-24 w-24 rounded-full opacity-20" style={{ background: "var(--primary-light)" }}></div>
          <div className="absolute -bottom-6 left-6 h-20 w-20 rounded-full opacity-20" style={{ background: "var(--yellow)" }}></div>

          <div className="relative grid gap-6 md:grid-cols-[1.25fr_0.75fr] md:items-center">
            <div>
              <div className="badge mb-4">Speels leren, zonder prestatiedruk</div>
              <h2 className="text-3xl font-black mb-4" style={{ color: "var(--primary-dark)" }}>
                Muziek maken helpt kinderen groeien
              </h2>
              <p className="subtitle mb-4">
                Muziek maken is veel meer dan alleen een leuke activiteit. Het helpt kinderen in hun ontwikkeling op meerdere gebieden tegelijk.
              </p>
              <p className="subtitle">
                Ons Genoegen Renswoude wil kinderen op een speelse manier laten ervaren hoe leuk muziek maken is, zonder prestatiedruk.
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
          <h2 className="text-2xl font-black mb-4" style={{ color: "var(--purple)" }}>
            🎼 De instrumenten en hoe ze gebruikt worden
          </h2>

          <p className="subtitle mb-5">
            We hebben de inhoud aangevuld met instrumentkennis uit muziekonderwijs en basisinformatie over speeltechniek. Zo krijgt u beter zicht op wat uw kind precies oefent.
          </p>

          <div className="grid gap-4 md:grid-cols-3">
            <article className="card bg-white shadow-none">
              <div className="text-4xl mb-3">🎵</div>
              <h3 className="font-black mb-2" style={{ color: "var(--primary)" }}>
                Klokkenspel
              </h3>
              <p className="subtitle text-sm mb-3">
                Een klokkenspel heeft metalen staven (geen houten, zoals bij een xylofoon) en klinkt helder en hoog. Het instrument helpt bij toonhoogteherkenning.
              </p>
              <p className="subtitle text-sm">
                Gebruik: laat uw kind met rustige, korte tikken spelen en de stokken losjes vasthouden. Eerst langzaam van laag naar hoog, daarna pas melodietjes.
              </p>
            </article>

            <article className="card bg-white shadow-none">
              <div className="text-4xl mb-3">🥁</div>
              <h3 className="font-black mb-2" style={{ color: "var(--pink)" }}>
                Trommel
              </h3>
              <p className="subtitle text-sm mb-3">
                Bij trommel draait het om ritme, timing en controle. Eenvoudige slagen en herhaling bouwen een stabiel maatgevoel op.
              </p>
              <p className="subtitle text-sm">
                Gebruik: oefen met ontspannen polsen, afwisselend rechts-links en zachte rebound. Kwaliteit is belangrijker dan hard of snel spelen.
              </p>
            </article>

            <article className="card bg-white shadow-none">
              <div className="text-4xl mb-3">🎺</div>
              <h3 className="font-black mb-2" style={{ color: "var(--purple)" }}>
                pBuzz
              </h3>
              <p className="subtitle text-sm mb-3">
                De pBuzz is een kunststof instrument met een uitschuifbare buis. Daardoor lijkt het qua speelidee op een trombone.
              </p>
              <p className="subtitle text-sm">
                Gebruik: begin met een rechte houding, rustige ademhaling en korte speelmomenten. Focus eerst op een stabiele toon, daarna op toonwisselingen.
              </p>
            </article>
          </div>
        </section>

        <div className="grid gap-8 lg:grid-cols-2 mb-8 md:mb-10">
          <section className="card">
            <h2 className="text-2xl font-black mb-4" style={{ color: "var(--green)" }}>
              💻 Dit online portaal
            </h2>
            <p className="subtitle mb-4">
              Dit portaal ondersteunt het lesboek dat kinderen thuis hebben gekregen. Beide onderdelen horen bij elkaar en versterken het leerproces.
            </p>
            <p className="subtitle mb-4">
              In het boek staan opdrachten en oefeningen, terwijl het online portaal helpt met uitleg, beelden en interactieve lessen.
            </p>
            <p className="subtitle">
              Video’s laten horen en zien hoe muziek bedoeld is om te klinken. Dat helpt kinderen om beter te begrijpen wat ze moeten spelen.
            </p>
          </section>

          <section className="card">
            <h2 className="text-2xl font-black mb-4" style={{ color: "var(--primary-dark)" }}>
              🤝 Hoe kunt u uw kind helpen?
            </h2>
            <p className="subtitle mb-4">
              Uw rol als ouder is vooral het bieden van rust, ruimte en positieve aanmoediging.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="badge text-center py-3">Oefen kort en regelmatig</div>
              <div className="badge text-center py-3">Geef complimenten op inzet</div>
              <div className="badge text-center py-3">Laat uw kind zelf ontdekken</div>
              <div className="badge text-center py-3">Neem pauze als het niet lukt</div>
            </div>
            <p className="subtitle mt-4">
              Frustratie hoort bij leren. Vaak helpt het om later opnieuw te proberen.
            </p>
          </section>
        </div>

        <section className="card relative overflow-hidden">
          <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full opacity-20" style={{ background: "var(--green)" }}></div>
          <div className="relative flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-black mb-2" style={{ color: "var(--pink)" }}>
                📚 Meer informatie
              </h2>
              <p className="subtitle max-w-2xl">
                Wilt u meer weten over de organisatie en muziekeducatie? Bekijk dan de website van Ons Genoegen.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href="https://www.onsgenoegen.org"
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                Meer over muziekeducatie 🎵
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