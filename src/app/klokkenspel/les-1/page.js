import Image from "next/image";

export default function Les1() {
  return (
    <main className="min-h-screen p-8 md:p-12">

      {/* HEADER */}
      <div className="mb-10 text-center">
        <h1 className="title mb-3">
          🎵 Klokkenspel - Les 1
        </h1>

        <p className="subtitle">
          Maak kennis met het klokkenspel en speel je eerste noten!
        </p>
      </div>

      {/* INTRO */}
      <section className="card mb-8">
        <h2
          className="text-2xl font-bold mb-4"
          style={{ color: "var(--primary-dark)" }}
        >
          👋 Welkom!
        </h2>

        <p className="subtitle mb-4">
          In deze les leer je hoe je het klokkenspel vasthoudt
          en hoe je de eerste tonen kunt spelen.
        </p>

        <p className="subtitle">
          Neem rustig de tijd en luister goed naar de klanken.
        </p>
      </section>

      {/* AFBEELDING */}
      <section className="card mb-8 text-center">
        <h2
          className="text-2xl font-bold mb-4"
          style={{ color: "var(--yellow)" }}
        >
          🖼️ Zo ziet een klokkenspel eruit
        </h2>

        <div className="flex justify-center">
          <Image
            src="/klokkenspel-les1.png"
            alt="Klokkenspel"
            width={500}
            height={300}
            className="rounded-3xl shadow-lg"
          />
        </div>
      </section>

      {/* VIDEO */}
      <section className="card mb-8">
        <h2
          className="text-2xl font-bold mb-4"
          style={{ color: "var(--pink)" }}
        >
          🎥 Bekijk de uitlegvideo
        </h2>

        <p className="subtitle mb-6">
          Kijk eerst goed hoe het instrument gespeeld wordt.
        </p>

        <div className="aspect-video rounded-3xl overflow-hidden shadow-lg">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Klokkenspel video les 1"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* OEFENING */}
      <section className="card mb-8">
        <h2
          className="text-2xl font-bold mb-4"
          style={{ color: "var(--green)" }}
        >
          🎯 Probeer het zelf
        </h2>

        <p className="subtitle mb-4">
          Speel nu zelf langzaam een paar tonen na.
        </p>

        <ul className="space-y-3">
          <li className="badge">🎵 Speel rustig</li>
          <li className="badge">👂 Luister goed</li>
          <li className="badge">😊 Fouten maken mag</li>
        </ul>
      </section>

      {/* AFSLUITING */}
      <section className="card text-center">
        <h2
          className="text-2xl font-bold mb-4"
          style={{ color: "var(--purple)" }}
        >
          ⭐ Goed gedaan!
        </h2>

        <p className="subtitle mb-6">
          Je hebt je eerste klokkenspel-les afgerond!
        </p>

        <button className="btn">
          Naar Les 2 →
        </button>
      </section>

    </main>
  );
}