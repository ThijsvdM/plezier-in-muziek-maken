import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden p-10" style={{ background: "var(--bg-soft)" }}>
      <div
        className="pointer-events-none absolute -left-10 top-10 h-40 w-40 rounded-full opacity-40 blur-3xl"
        style={{ background: "var(--yellow)" }}
      ></div>
      <div
        className="pointer-events-none absolute right-0 top-24 h-56 w-56 rounded-full opacity-30 blur-3xl"
        style={{ background: "var(--pink)" }}
      ></div>
      <div
        className="pointer-events-none absolute bottom-10 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full opacity-25 blur-3xl"
        style={{ background: "var(--primary-light)" }}
      ></div>

      {/* HERO */}
      <div className="relative text-center mb-12">

  {/* LOGO */}
        <div className="flex justify-center mb-4">
          <Image
            src="/logo.png"
            alt="Plezier in muziek maken logo"
            width={120}
            height={120}
            className="rounded-3xl shadow-lg"
          />
        </div>

        {/* TITEL */}
        <h1 className="title">🎵 Plezier in muziek maken</h1>

        <p className="subtitle mt-2">
          Kies een instrument en start je muzikale reis!
        </p>
      </div>

      {/* GRID */}
      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">

        {/* 🎵 Klokkenspel */}
        <Link href="/klokkenspel" className="clickable">
          <div className="card text-center">
            <div className="text-6xl mb-3">🎵</div>
            <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--primary)" }}>
              Klokkenspel
            </h2>
            <p className="subtitle">
              Speel melodieën en ontdek muzieknoten
            </p>

            <div className="mt-4">
              <span className="badge">Start hier</span>
            </div>
          </div>
        </Link>

        {/* 🥁 Trommel */}
        <Link href="/trommel" className="clickable">
          <div className="card text-center">
            <div className="text-6xl mb-3">🥁</div>
            <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--pink)" }}>
              Trommel
            </h2>
            <p className="subtitle">
              Leer ritmes en beats stap voor stap
            </p>

            <div className="mt-4">
              <span className="badge">Ritme!</span>
            </div>
          </div>
        </Link>

        {/* 🎷 Pbuzz */}
        <Link href="/pbuzz" className="clickable">
          <div className="card text-center">
            <div className="text-6xl mb-3">🎺</div>
            <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--purple)" }}>
              Pbuzz
            </h2>
            <p className="subtitle">
              Blaas je eerste tonen en melodieën
            </p>

            <div className="mt-4">
              <span className="badge">Blazen!</span>
            </div>
          </div>
        </Link>

      </div>

      {/* FUN FOOTER */}
      <div className="text-center mt-16">
        <p className="subtitle">
          Leer, speel en ontdek muziek op jouw tempo. <br />
          Gebruik deze digitale omgeving als hulpmiddel naast je lesboek.
        </p>
      </div>

    <footer
      className="mt-16 pt-6 text-center text-sm"
      style={{
        borderTop: "1px solid var(--border)",
        color: "#6b7280",
      }}
    >
      <Link href="/contact">Contact</Link>
      {" • "}
      <Link href="/mede-mogelijk-gemaakt-door">
        Mede mogelijk gemaakt door
      </Link>
    </footer>
    
    </main>
  );

}