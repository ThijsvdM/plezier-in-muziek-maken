import Image from "next/image";

export default function Les2Klokkenspel() {
  return (
    <main className="min-h-screen p-8 md:p-12">

      {/* TITEL */}
      <div className="text-center mb-10">
        <h1 className="title">🎵 Klokkenspel - Les 2</h1>
        <p className="subtitle">
          We gaan verder met het leren van melodieën!
        </p>
      </div>

      {/* 1. TEKSTBLOK */}
      <section className="card mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--primary-dark)" }}>
          👋 Wat gaan we leren?
        </h2>

        <p className="subtitle">
          In deze les ga je leren hoe je korte melodieën kunt spelen op het klokkenspel.
          We bouwen verder op de eerste basisnoten.
        </p>
      </section>

      {/* 2. AFBEELDING */}
      <section className="card mb-8 text-center">
        <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--yellow)" }}>
          🖼️ Voorbeeld van noten
        </h2>

        <Image
          src="/klokkenspel-les2-1.png"
          alt="Noten voorbeeld"
          width={500}
          height={300}
          className="rounded-3xl shadow-lg mx-auto"
        />
      </section>

      {/* 3. VIDEO */}
      <section className="card mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--pink)" }}>
          🎥 Kijk en leer
        </h2>

        <p className="subtitle mb-6">
          Bekijk goed hoe de docent de melodie speelt.
        </p>

        <div className="aspect-video rounded-3xl overflow-hidden shadow-lg">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Klokkenspel les 2 video"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* 4. AFBEELDING */}
      <section className="card mb-8 text-center">
        <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--green)" }}>
          🖼️ Hoe je het speelt
        </h2>

        <Image
          src="/klokkenspel-les2-2.png"
          alt="Speelhouding"
          width={500}
          height={300}
          className="rounded-3xl shadow-lg mx-auto"
        />
      </section>

      {/* 5. TEKSTBLOK */}
      <section className="card mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--purple)" }}>
          🎯 Oefenen maar!
        </h2>

        <p className="subtitle">
          Probeer de melodie zelf langzaam na te spelen.  
          Neem de tijd en luister goed naar elke toon.
        </p>
      </section>

      {/* 6. VIDEO */}
      <section className="card mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--primary)" }}>
          🎥 Extra oefenvideo
        </h2>

        <div className="aspect-video rounded-3xl overflow-hidden shadow-lg">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Oefenvideo klokkenspel"
            allowFullScreen
          ></iframe>
        </div>
      </section>

    </main>
  );
}