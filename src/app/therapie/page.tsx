import Link from 'next/link';

export default function Therapie() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-slate-800 flex items-center gap-3">
            <img src="https://res.cloudinary.com/dargyap8x/image/upload/v1775107548/neurofit/xme9bfptiwcv4gfl8smo.png" alt="NeuroFit" className="h-8" />
            NeuroFit<span className="text-orange-500">.</span>
          </Link>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
            <Link href="/#philosophie" className="hover:text-orange-500 transition">Philosophie</Link>
            <Link href="/therapie" className="text-orange-500">Therapie</Link>
            <Link href="/fortbildung" className="hover:text-orange-500 transition">Fortbildung</Link>
            <Link href="/#team" className="hover:text-orange-500 transition">Team</Link>
            <Link href="/#kontakt" className="hover:text-orange-500 transition">Kontakt</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section with Video Background */}
      <section className="pt-24 pb-16 bg-slate-900 relative overflow-hidden min-h-[400px] flex items-center">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://res.cloudinary.com/dargyap8x/video/upload/v1775108064/neurofit/xceshfl1jisoiwk41ygu.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-slate-900/70"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Therapie</h1>
          <p className="text-xl text-orange-400">Biofeedback und Neurofeedback</p>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">Was ist Biofeedback?</h2>
          <p className="text-lg text-slate-600 mb-8">
            Biofeedback hat sich als therapeutische Behandlungstechnik bewährt, wenn sie von erfahrenen Therapeuten eingesetzt wird.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-slate-600 mb-4">
                Nur im absoluten Idealfall kann Biofeedback als alleinige Therapie eingesetzt werden. Dieser Umstand ist aber selten gegeben, so dass ein gegenseitiger Informationsaustausch mit Kollegen anderer Fachrichtungen, zum Beispiel Ergotherapeuten, Physiotherapeuten, ärztlichen Kollegen oder auch Verhaltenstherapeuten, bei denen Sie bereits in Behandlung sind, zu unserem Standard Vorgehen gehört.
              </p>
              <p className="text-slate-600">
                Im medizinischen Bereich wird speziell das Neurofeedback u.a. zur Behandlung von ADHS-Patienten, Tinnitus, Schmerz-Patienten, Suchtproblemen, und altersbedingtem Leistungsabbau angewandt.
              </p>
            </div>
            <div>
              <p className="text-slate-600 mb-4">
                Auch die Unterstützung neurologischer Rehabilitationsmaßnahmen kann durch eine Kombination von Biofeedback / Neurofeedback gestaltet werden.
              </p>
              <p className="text-slate-600">
                Im psychotherapeutischen Bereich können Biofeedback- Verfahren die Fähigkeit zur Entspannung und Konzentration entscheidend stabilisieren oder ermöglichen. Ein entscheidender Vorteil dieses psychophysiologischen Verfahrens ist es auch, Ihnen als Patienten/Klienten einen neuen, bisher nicht erfahrbaren Lösungsansatz, zu vermitteln.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-slate-800 mb-8">Ablauf der Therapie</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-6 bg-slate-50 rounded-xl">
              <h3 className="text-xl font-bold text-orange-500 mb-4">Erstgespräch / Anamnese</h3>
              <p className="text-slate-600">
                Die Behandlung beginnt immer mit einem unverbindlichen, für Sie kostenlosen Erstgespräch (ca. 1 Stunde), das ein 15-20 minütiges Probe Bio- oder Neurofeedback Training beinhaltet. So können Sie sich zusätzlich zu unserer Darstellung einen eigenen Eindruck verschaffen, ob das Training bzw. die Therapie für Sie oder Ihr Kind geeignet ist.
              </p>
            </div>
            
            <div className="p-6 bg-slate-50 rounded-xl">
              <h3 className="text-xl font-bold text-orange-500 mb-4">Therapie</h3>
              <p className="text-slate-600">
                Die eigentliche Therapie besteht dann aus (in der Regel) 20 Trainingseinheiten. Diese jeweils 1-stündigen Sitzungen bestehen aus: Begrüßung und anschließen der Sensoren, Neurofeedback oder Biofeedback Training (40 Minuten) sowie einer kurzen Nachbesprechung.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8">Zeitplan</h2>
          <p className="text-slate-300 mb-4">
            Die Trainingssitzungen sollten idealerweise 2mal wöchentlich erfolgen mit mindestens einem Tag Pause zwischen den Einheiten. Ab der 10ten Sitzung, bzw. wenn sowohl Sie oder Ihr Kind und wir feststellen können, das sich "etwas tut" kann das Training auch 1mal pro Woche erfolgen.
          </p>
          <p className="text-slate-300">
            Es kommt natürlich vor das diese Terminplanung nicht eingehalten werden kann, was bei einem einmaligen Ausfall einer Sitzung nicht weiter ins Gewicht fällt. Sollten aber Termine häufiger ausfallen oder nicht eingehalten werden können werden Sie aber recht schnell merken das sich die Fortschritte nicht im gewünschten Umfang einstellen wollen. Sollte es daher immer wieder zu Schwierigkeiten in der Einhaltung der Termine kommen, sprechen Sie rechtzeitig mit uns!
          </p>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-slate-800 mb-8">Einsatzgebiete</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-slate-600 mb-4">
                In den NeuroFit Praxen in Hagen und Kempen bieten wir, Dr. Andreas Krombholz und Dr. Axel Kowalski, und Christina Erkeling-Köster Ihnen eine Biofeedback- und/oder Neurofeedback-Behandlung an.
              </p>
              <p className="text-slate-600">
                Wir können jederzeit im persönlichen Gespräch oder per E-Mail klären, ob die von uns angebotenen Leistungen für Sie geeignet sind.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {['ADHS', 'Tinnitus', 'Schmerz', 'Sucht', 'Neurologische Rehabilitation', 'Stress'].map((area, i) => (
                <div key={i} className="p-4 bg-white rounded-lg border border-gray-100 text-center">
                  <span className="font-medium text-slate-700">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="kontakt" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-6">Haben Sie Fragen?</h2>
          <p className="text-lg text-slate-600 mb-8">
            Sie können sich jederzeit mit uns in Verbindung setzen!
          </p>
          <Link 
            href="/#kontakt" 
            className="inline-block px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-all"
          >
            Kontakt aufnehmen
          </Link>
        </div>
      </section>

      <footer className="py-12 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-slate-400">© 2024 NeuroFit GmbH - Therapie und Trainingsakademie</p>
        </div>
      </footer>
    </div>
  );
}