export default function ContactPage() {
  return (
    <main className="min-h-screen p-8 md:p-12">
      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-10">
          <h1 className="title">📧 Contact</h1>
          <p className="subtitle">
            Vragen of opmerkingen?
          </p>
        </div>

        <div className="card">
          <p className="subtitle mb-4">
            Heeft u vragen over Plezier in muziek maken of over de lessen?
          </p>

          <p>
            Neem contact op met:
          </p>

          <div className="mt-4">
            <strong>Ons Genoegen Renswoude</strong>
          </div>

          <div>
            E-mail: lc@onsgenoegen.org
            <br />
            website: <a href="https://www.onsgenoegen.org" target="_blank" className="text-blue-600 underline">www.onsgenoegen.org</a>
          </div>
        </div>

      </div>
    </main>
  );
}