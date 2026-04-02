import Link from 'next/link';

export default function News() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero with Video */}
      <section className="pt-24 pb-16 bg-slate-900 relative overflow-hidden min-h-[400px] flex items-center">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="https://res.cloudinary.com/dargyap8x/video/upload/v1775108093/neurofit/undtchrggcialhry9j9s.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-slate-900/70"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">News</h1>
          <p className="text-xl text-orange-400">Aktuelles aus der NeuroFit Welt</p>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-slate-800 mb-8">Aktuelles</h2>
          <div className="space-y-6">
            <div className="block p-6 bg-white rounded-2xl border border-gray-100">
              <div className="flex items-center mb-3">
                <span className="text-sm text-orange-500 font-medium">03.06.2021</span>
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Wirkt tDCS in der Behandlung von Aufmerksamkeitsstörungen?</h3>
              <p className="text-slate-600">An der Uni Magdeburg findet zurzeit eine Forschungsprojekt statt, dass die Wirkung einer elektrischen Stimulation des Gehirns überprüft.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-lg text-slate-600 text-center">
            In 2024 bieten wir Kurse auf Nachfrage an. Diese werden in Präsenz (NeuroFit Praxis in Kempen/Inhouse beim Kunden) oder Online durchgeführt.
          </p>
        </div>
      </section>

    </div>
  );
}