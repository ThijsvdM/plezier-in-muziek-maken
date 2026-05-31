import Image from "next/image";

export default function SponsorsPage() {
  return (
    <main className="min-h-screen p-8 md:p-12">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-10">
          <h1 className="title">
            ❤️ Mede mogelijk gemaakt door
          </h1>

          <p className="subtitle">
            Dit project is mogelijk dankzij de steun van onderstaande partners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Sponsor 1 */}
          <div className="card text-center">
            <div className="relative h-32 mb-4">
              <Image
                src="/logo.png"
                alt="Ons Genoegen Renswoude"
                fill
                className="object-contain"
              />
            </div>

            <h2 className="font-bold text-lg">
              Ons Genoegen Renswoude
            </h2>

            <p className="subtitle mt-2">
              Initiatiefnemer van Muziek Avontuur.
            </p>
          </div>

          {/* Sponsor 2 */}
          <div className="card text-center">
            <div className="relative h-32 mb-4">
              <Image
                src="/rabobank.png"
                alt="Rabobank"
                fill
                className="object-contain"
              />
            </div>

            <h2 className="font-bold text-lg">
              Rabobank
            </h2>

            <p className="subtitle mt-2">
              Samen maken we de buurt een beetje beter.
            </p>
          </div>

        </div>      </div>
    </main>
  );
}