import Image from "next/image";

export default function Les1() {
  return (
    <main className="min-h-screen p-8 md:p-12">

      {/* HEADER */}
      <div className="mb-10 text-center">
        <h1 className="title mb-3">
          🥁 Trommel - Les 1
        </h1>

        <p className="subtitle">
          Maak kennis met de trommel en speel je eerste ritmes!
        </p>
      </div>

      {/* INTRO */}
      <section className="card mb-8">
        <h2
          className="text-2xl font-bold mb-4"
          style={{ color: "var(--primary-dark)" }}
        >
          👋 Welkom bij Team Ritme!
        </h2>

        <p className="subtitle mb-4">
          Tijdens de eerste les heb je een introductie gekregen over de trommel.
          Je hebt gezien hoe het instrument eruitziet en hoe je er geluid mee maakt door te slaan met je stokken.
        </p>

        <p className="subtitle mb-4">
          Je hebt geleerd dat je verschillende klanken kunt maken door harder of zachter of door met je stokken tegen elkaar te slaan.
          Zo ontstaan de eerste ritmes, en dat is de basis van drummen!
        </p>

        <p className="subtitle">
          Om thuis verder te oefenen, vind je oefenmateriaal en hulpmiddelen op deze website!
        </p>
      </section>

      {/* VIDEO */}
      <section className="card mb-8">
        <h2
          className="text-2xl font-bold mb-4"
          style={{ color: "var(--pink)" }}
        >
          🎥 Uitlegvideo eerste ritmes
        </h2>

        <p className="subtitle mb-6">
          Wil je horen hoe het klinkt of meteen meespelen? Bekijk deze video waarin we stap voor stap een eenvoudig ritme op de trommel leren.
          Je kunt meedoen, meetikken of gewoon luisteren!
        </p>

        <div className="aspect-video rounded-3xl overflow-hidden shadow-lg">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Trommel video les 1"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* AFBEELDING */}
      <section className="card mb-8 text-center">
        <h2
          className="text-2xl font-bold mb-4"
          style={{ color: "var(--yellow)" }}
        >
          Extra oefening!
        </h2>

        <div className="flex justify-center">
          <Image
            src="/Happy-birthday-drum.png"
            alt="Happy Birthday op de trommel"
            width={800}
            height={500}
            className="rounded-3xl shadow-lg"
          />
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
          Pak je trommel of oefen op tafel en probeer het ritme rustig mee te spelen.
          Kun jij het patroon vasthouden? Het zal de begeleiding zijn voor een bekend nummer wat we de volgende les gaan spelen!
        </p>

        <ul className="space-y-3">
          <li className="badge">🥁 Begin langzaam</li>
          <li className="badge">👂 Luister naar het ritme</li>
          <li className="badge">😊 Blijf oefenen, fouten maken mag</li>
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
          Je hebt je eerste trommel-les afgerond!
        </p>

        <button className="btn">
          Naar Les 2 →
        </button>
      </section>

    </main>
  );
}