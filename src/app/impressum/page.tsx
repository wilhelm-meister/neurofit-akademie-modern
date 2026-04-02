import Link from 'next/link';

export default function Impressum() {
  return (
    <div className="min-h-screen bg-white pt-20">

      <section className="pt-32 pb-16 bg-slate-900">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Impressum</h1>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white p-8 rounded-2xl border border-gray-100">
            <h2 className="text-xl font-bold text-slate-800 mb-6">NeuroFit GmbH</h2>
            
            <div className="space-y-6 text-slate-600">
              <div>
                <h3 className="font-bold text-slate-800 mb-2">Anschrift</h3>
                <p>NeuroFit GmbH - Therapie und Trainingsakademie</p>
                <p>Zum Rähmen 4</p>
                <p>47877 Willich</p>
              </div>

              <div>
                <h3 className="font-bold text-slate-800 mb-2">Kontakt</h3>
                <p>Telefon: 02152-809 66 42</p>
                <p>E-Mail: info@neurofit-akademie.de</p>
              </div>

              <div>
                <h3 className="font-bold text-slate-800 mb-2">Geschäftsführung</h3>
                <p>Dr. Andreas Krombholz</p>
                <p>Dr. Axel Kowalski</p>
              </div>

              <div>
                <h3 className="font-bold text-slate-800 mb-2">Handelsregister</h3>
                <p>Amtsgericht Krefeld</p>
                <p>HRB 12345</p>
              </div>

              <div>
                <h3 className="font-bold text-slate-800 mb-2">Umsatzsteuer-ID</h3>
                <p>DE 123 456 789</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}