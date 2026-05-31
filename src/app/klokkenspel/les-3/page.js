import Image from "next/image";

export default function Les3Klokkenspel() {
  return (
    <main className="min-h-screen p-8 md:p-12">

      {/* TITEL */}
      <div className="text-center mb-10">
        <h1 className="title">🎵 Klokkenspel - Les 3</h1>
        <p className="subtitle">
          Tijd om je eerste echte melodie te spelen!
        </p>
      </div>

      {/* 1. TEKST */}
      <section className="card mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--primary-dark)" }}>
          🎯 Wat ga je leren?
        </h2>

        <p className="subtitle">
          In deze les leer je een volledige korte melodie spelen.
          Je gebruikt alles wat je eerder hebt geleerd.
        </p>
      </section>

      {/* 2. AFBEELDING */}
      <section className="card mb-8 text-center">
        <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--yellow)" }}>
          🖼️ Melodie overzicht
        </h2>

        <Image
          src="/klokkenspel-les3-1.png"
          alt="Melodie schema"
          width={500}
          height={300}
          className="rounded-3xl shadow-lg mx-auto"
        />
      </section>

      {/* 3. VIDEO */}
      <section className="card mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--pink)" }}>
          🎥 Kijk goed mee
        </h2>

        <div className="aspect-video rounded-3xl overflow-hidden shadow-lg">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Klokkenspel les 3"
            allowFullScreen
          />
        </div>
      </section>

      {/* 4. AFBEELDING */}
      <section className="card mb-8 text-center">
        <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--green)" }}>
          🖼️ Speelhouding
        </h2>

        <Image
          src="/klokkenspel-les3-2.png"
          alt="Speelhouding klokkenspel"
          width={500}
          height={300}
          className="rounded-3xl shadow-lg mx-auto"
        />
      </section>

      {/* 5. TEKST */}
      <section className="card mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--purple)" }}>
          🎵 Oefenen
        </h2>

        <p className="subtitle">
          Oefen de melodie stap voor stap.  
          Begin langzaam en bouw je tempo op.
        </p>
      </section>

      {/* 6. VIDEO */}
      <section className="card mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--primary)" }}>
          🎥 Extra uitdaging
        </h2>

        <div className="aspect-video rounded-3xl overflow-hidden shadow-lg">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Extra oefening"
            allowFullScreen
          />
        </div>
      </section>

    </main>
  );
}