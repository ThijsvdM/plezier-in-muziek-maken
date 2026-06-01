export default function OudersPage() {
  return (
    <main
      className="min-h-screen p-8 md:p-12"
      style={{ background: "var(--bg-soft)" }}
    >
      <div className="max-w-4xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-10">
          <div className="instrument-header">
            👨‍👩‍👧 Voor ouders
          </div>

          <h1 className="title">
            Informatie voor ouders
          </h1>

          <p className="subtitle">
            Informatie over het programma en hoe u kunt helpen
          </p>
        </div>

        <div className="card space-y-12">

          {/* 🧠 WAAROM DOEN WE DIT */}
          <section>
            <h2 className="text-xl font-bold mb-3">
              🧠 Waarom doen we dit?
            </h2>

            <p className="subtitle">
              Muziek maken is veel meer dan alleen een leuke activiteit.
              Het helpt kinderen in hun ontwikkeling op meerdere gebieden tegelijk.
            </p>

            <p className="subtitle mt-3">
              Onderzoek laat zien dat muziek invloed heeft op:
            </p>

            <ul className="list-disc pl-5 space-y-2 mt-3">
              <li className="subtitle">Concentratie en focus</li>
              <li className="subtitle">Geheugen en taalontwikkeling</li>
              <li className="subtitle">Creativiteit en probleemoplossend denken</li>
              <li className="subtitle">Zelfvertrouwen</li>
            </ul>

            <p className="subtitle mt-4">
              Ons Genoegen Renswoude wil kinderen op een speelse manier laten ervaren hoe leuk muziek maken is,
              zonder prestatiedruk.
            </p>
          </section>

          {/* 🎼 INSTRUMENTEN */}
          <section>
            <h2 className="text-xl font-bold mb-3">
              🎼 De instrumenten
            </h2>

            <div className="space-y-6">

              <div>
                <h3 className="font-bold" style={{ color: "var(--primary)" }}>
                  🎵 Klokkenspel
                </h3>

                <p className="subtitle mt-2">
                  Het klokkenspel bestaat uit gekleurde noten. Elke kleur staat voor een specifieke toon.
                  Door deze kleuren te volgen leren kinderen stap voor stap melodieën spelen.
                </p>

                <p className="subtitle mt-2">
                  Zo wordt visueel duidelijk welke noot gespeeld moet worden, wat het leren van muziek eenvoudiger maakt.
                </p>
              </div>

              <div>
                <h3 className="font-bold" style={{ color: "var(--pink)" }}>
                  🥁 Trommel
                </h3>

                <p className="subtitle mt-2">
                  De trommel richt zich op ritme en timing. Kinderen leren een vaste beat aanhouden en ritmes herkennen en spelen.
                </p>
              </div>

              <div>
                <h3 className="font-bold" style={{ color: "var(--purple)" }}>
                  🎺 Pbuzz
                </h3>

                <p className="subtitle mt-2">
                  De Pbuzz is een blaasinstrument waarbij ademhaling en toonvorming centraal staan.
                </p>

                <p className="subtitle mt-2">
                  Net als bij het klokkenspel werken we met kleuren die overeenkomen met verschillende noten.
                  Dit helpt kinderen om visueel te begrijpen welke toon ze spelen.
                </p>
              </div>

            </div>
          </section>

          {/* 💻 ONLINE PORTAAL */}
          <section>
            <h2 className="text-xl font-bold mb-3">
              💻 Dit online portaal
            </h2>

            <p className="subtitle">
              Dit portaal is een ondersteuning van het lesboek dat kinderen thuis hebben gekregen.
              Beide onderdelen horen bij elkaar en versterken het leerproces.
            </p>

            <p className="subtitle mt-3">
              In het boek staan opdrachten en oefeningen, terwijl het online portaal helpt met uitleg,
              beelden en interactieve lessen.
            </p>

            <p className="subtitle mt-3">
              Video’s laten horen en zien hoe muziek bedoeld is om te klinken.
              Dit helpt kinderen om beter te begrijpen wat ze moeten spelen.
            </p>
          </section>

          {/* 🤝 HOE HELP JE JE KIND */}
          <section>
            <h2 className="text-xl font-bold mb-3">
              🤝 Hoe kunt u uw kind helpen?
            </h2>

            <p className="subtitle">
              Uw rol als ouder is vooral het bieden van rust, ruimte en positieve aanmoediging.
            </p>

            <ul className="list-disc pl-5 space-y-2 mt-3">
              <li className="subtitle">Oefen kort en regelmatig (5–10 minuten)</li>
              <li className="subtitle">Geef complimenten op inzet, niet alleen resultaat</li>
              <li className="subtitle">Laat uw kind zelf ontdekken zonder druk</li>
              <li className="subtitle">Neem pauze als het niet lukt</li>
              <li className="subtitle">Houd muziek leuk en speels</li>
            </ul>

            <p className="subtitle mt-4">
              Frustratie hoort bij leren — vaak helpt het om later opnieuw te proberen.
            </p>
          </section>

          {/* 📚 MEER INFO */}
          <section>
            <h2 className="text-xl font-bold mb-3">
              📚 Meer informatie
            </h2>

            <a
              href="https://www.onsgenoegen.org"
              target="_blank"
              className="btn"
            >
              Meer over muziekeducatie 🎵
            </a>
          </section>

        </div>
      </div>
    </main>
  );
}