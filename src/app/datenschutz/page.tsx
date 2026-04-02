import Link from 'next/link';

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-white">

      <section className="pt-32 pb-16 bg-slate-900">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Datenschutzerklärung</h1>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white p-8 rounded-2xl border border-gray-100 space-y-6 text-slate-600">
            <h2 className="text-xl font-bold text-slate-800">1. Datenschutz auf einen Blick</h2>
            <p>Wir freuen uns über Ihr Interesse an unserer Webseite. Der Schutz Ihrer Privatsphäre ist für uns sehr wichtig. Nachfolgend informieren wir Sie umfassend über die Erhebung, Verarbeitung und Nutzung Ihrer Daten.</p>

            <h2 className="text-xl font-bold text-slate-800">2. Verantwortliche Stelle</h2>
            <p>
              NeuroFit GmbH - Therapie und Trainingsakademie<br />
              Zum Rähmen 4<br />
              47877 Willich<br />
              info@neurofit-akademie.de
            </p>

            <h2 className="text-xl font-bold text-slate-800">3. Erfassung und Verarbeitung personenbezogener Daten</h2>
            <p>Wenn Sie mit uns in Kontakt treten, erheben wir nur die Daten, die Sie uns freiwillig zur Verfügung stellen, z.B. über unser Kontaktformular.</p>

            <h2 className="text-xl font-bold text-slate-800">4. Cookies</h2>
            <p>Unsere Website verwendet keine Cookies zu Tracking-Zwecken.</p>

            <h2 className="text-xl font-bold text-slate-800">5. Ihre Rechte</h2>
            <p>Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer personenbezogenen Daten.</p>

            <h2 className="text-xl font-bold text-slate-800">6. Kontakt</h2>
            <p>Bei Fragen zum Datenschutz kontaktieren Sie uns unter info@neurofit-akademie.de</p>
          </div>
        </div>
      </section>

    </div>
  );
}