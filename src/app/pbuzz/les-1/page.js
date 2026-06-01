import Image from "next/image";

export default function Les1() {
  return (
    <main className="min-h-screen p-8 md:p-12">

      {/* HEADER */}
      <div className="mb-10 text-center">
        <h1 className="title mb-3">
          🎺 pBuzz - Les 1
        </h1>

        <p className="subtitle">
          Maak kennis met de pBuzz en speel je eerste tonen!
        </p>
      </div>

      {/* INTRO */}
      <section className="card mb-8">
        <h2
          className="text-2xl font-bold mb-4"
          style={{ color: "var(--primary-dark)" }}
        >
          👋 Welkom bij Team Blaas!
        </h2>

        <p className="subtitle mb-4">
          Tijdens de eerste les heb je kennisgemaakt met de pBuzz.
          Je hebt geleerd hoe je het instrument vasthoudt en hoe je geluid maakt door te blazen in het mondstuk.
        </p>

        <p className="subtitle mb-4">
          Door je lippen te laten trillen en verschillende schuifposities te gebruiken, kun je verschillende tonen maken.
          Zo ontdek je stap voor stap hoe blaasinstrumenten werken.
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
          🎥 Uitlegvideo eerste tonen
        </h2>

        <p className="subtitle mb-6">
          Wil je horen hoe de pBuzz klinkt of meteen meespelen? Bekijk deze video waarin we stap voor stap je eerste tonen leren spelen.
          Je kunt meedoen, meeblazen of gewoon luisteren!
        </p>

        <div className="aspect-video rounded-3xl overflow-hidden shadow-lg">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="pBuzz video les 1"
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
          Kun herkennen welke melodie dit is?
        </h2>

        <div className="flex justify-center">
          <Image
            src="/happy-birthday-pbuzz.png"
            alt="Happy Birthday op de pBuzz"
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
          Pak je pBuzz en probeer rustig verschillende tonen te maken.
          Let goed op je ademhaling en de stand van je lippen.
        </p>

        <ul className="space-y-3">
          <li className="badge">🎺 Blaas rustig en constant</li>
          <li className="badge">👂 Luister naar je toon</li>
          <li className="badge">😊 Lukt het niet? Probeer het later nog een keer!</li>
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
          Je hebt je eerste pBuzz-les afgerond!
        </p>

        <button className="btn">
          Naar Les 2 →
        </button>
      </section>

    </main>
  );
}