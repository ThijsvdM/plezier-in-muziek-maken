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
          👋 Welkom bij Team Melodie!
        </h2>

        <p className="subtitle mb-4">
          Tijdens de eerste les heb je een introductie gekregen over het klokkenspel. Je hebt gezien hoe het instrument eruitziet en hoe je er geluid mee kunt maken. 
        </p>

        <p className="subtitle mb-4">
          Je hebt geleerd hoe je verschillende noten kunt spelen door op de gekleurde toetsen te tikken. Elke kleur staat voor een andere toonhoogte, en samen vormen ze de basis van muziek maken op het klokkenspel. In de eerste les hebben we al de melodie uit `The Eye of the Tiger` gespeeld, en je hebt ervaren hoe leuk het is om muziek te maken!
        </p>
        
        <p className="subtitle">
          Om thuis verder te kunnen oefenen, vind je oefenmateriaal en hulpmiddelen op deze website!  
        </p>
      </section>

    {/* VIDEO */}
      <section className="card mb-8">
        <h2
          className="text-2xl font-bold mb-4"
          style={{ color: "var(--pink)" }}
        >
          🎥 Uitlegvideo Eye of the Tiger
        </h2>

        <p className="subtitle mb-6">
          Wil je graag weten hoe het moet klinken, of meespelen met de video? Bekijk dan deze video waarin we stap voor stap de melodie van `The Eye of the Tiger` spelen op het klokkenspel. Je kunt meespelen, meezingen, of gewoon luisteren!
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

      {/* AFBEELDING */}
      <section className="card mb-8 text-center">
        <h2
          className="text-2xl font-bold mb-4"
          style={{ color: "var(--yellow)" }}
        >
          Een extra oefening, herken je deze melodie?
        </h2>

        <div className="flex justify-center">
          <Image
            src="/Happy-birthday-klokkenspel.png"
            alt="Happy Birthday op het klokkenspel"
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
          Zoek de verschillende noten op, op je klokkenspel en probeer rustig de melodie te spelen. Weet jij al welk nummer het is? Hint: het is een heel bekend verjaardagsliedje!
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