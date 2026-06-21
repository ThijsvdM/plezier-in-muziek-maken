import Image from "next/image";

export default function SponsorsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden px-6 py-10 md:px-12 md:py-16" style={{ background: "var(--bg-soft)" }}>
      <div
        className="pointer-events-none absolute -left-10 top-10 h-44 w-44 rounded-full opacity-35 blur-3xl"
        style={{ background: "var(--yellow)" }}
      ></div>
      <div
        className="pointer-events-none absolute right-0 top-24 h-60 w-60 rounded-full opacity-30 blur-3xl"
        style={{ background: "var(--pink)" }}
      ></div>
      <div
        className="pointer-events-none absolute bottom-10 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full opacity-20 blur-3xl"
        style={{ background: "var(--primary-light)" }}
      ></div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="title mt-4">
            Mede mogelijk gemaakt door
          </h1>

          <p className="subtitle mx-auto mt-3 max-w-3xl">
            Samen muziek maken is het mooiste wat er is. Daarom zijn we trots op de volgende partijen die dit mogelijk maken.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <article className="card overflow-hidden p-0">
            <div className="relative h-[320px] md:h-[420px] bg-white">
              <div
                className="absolute inset-x-0 top-0 h-28"
                style={{ background: "linear-gradient(180deg, rgba(255,210,102,0.35), rgba(255,255,255,0))" }}
              ></div>
              <Image
                src="/logo.png"
                alt="Ons Genoegen Renswoude"
                fill
                className="object-contain p-6 md:p-10"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>

            <div className="p-6 md:p-8">
              <div className="flex items-center justify-between gap-4 mb-4">
                <h2 className="text-2xl font-black" style={{ color: "var(--primary-dark)" }}>
                  Ons Genoegen Renswoude
                </h2>
                  <span className="badge shrink-0">Muziekvereniging</span>
              </div>

              <p className="subtitle">
                Plezier in samen muziekmaken is ons motto.
              </p>
            </div>
          </article>

          <article className="card overflow-hidden p-0">
            <div className="relative h-[320px] md:h-[420px] bg-white">
              <div
                className="absolute inset-x-0 top-0 h-28"
                style={{ background: "linear-gradient(180deg, rgba(123,97,255,0.22), rgba(255,255,255,0))" }}
              ></div>
              <Image
                src="/rabobank.png"
                alt="Rabobank"
                fill
                className="object-contain p-6 md:p-10"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div className="p-6 md:p-8">
              <div className="flex items-center justify-between gap-4 mb-4">
                <h2 className="text-2xl font-black" style={{ color: "var(--primary-dark)" }}>
                  Rabobank
                </h2>
                <span className="badge shrink-0" style={{ background: "var(--purple)", color: "white" }}>
                  Partner
                </span>
              </div>

              <p className="subtitle">
                Samen maken we de buurt een beetje beter.
              </p>
            </div>
          </article>
        </div>

        <section className="card mt-8 md:mt-10 text-center">
          <h2 className="text-2xl font-black mb-3" style={{ color: "var(--green)" }}>
            Dank aan iedereen die muziek mogelijk maakt
          </h2>

          <p className="subtitle max-w-3xl mx-auto">
            Dankzij steun van partners, vrijwilligers en betrokken mensen kunnen we kinderen op een vrolijke, duidelijke en speelse manier laten kennismaken met muziek.
          </p>
        </section>

      </div>
    </main>
  );
}