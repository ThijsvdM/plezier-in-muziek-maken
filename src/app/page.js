import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen p-10">

      {/* HERO */}
<div className="text-center mb-12">

  {/* LOGO */}
        <div className="flex justify-center mb-4">
          <Image
            src="/logo.png"
            alt="Muziek Avontuur logo"
            width={120}
            height={120}
            className="rounded-3xl shadow-lg"
          />
        </div>

        {/* TITEL */}
        <h1 className="title">🎵 Muziek Avontuur</h1>

        <p className="subtitle mt-2">
          Kies een instrument en start je muzikale reis!
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">

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
            <div className="text-6xl mb-3">🎷</div>
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
          🎮 Leer, speel en ontdek muziek op jouw tempo
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