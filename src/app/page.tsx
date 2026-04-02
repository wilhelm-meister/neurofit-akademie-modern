import Link from 'next/link';
import { siteContent } from '@/data/siteContent';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-slate-800 flex items-center gap-3">
            <img src="https://res.cloudinary.com/dargyap8x/image/upload/v1775107548/neurofit/xme9bfptiwcv4gfl8smo.png" alt="NeuroFit" className="h-8" />
            NeuroFit<span className="text-orange-500">.</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
            <Link href="/fortbildung" className="hover:text-orange-500 transition">Fortbildung</Link>
            <Link href="/netzwerk" className="hover:text-orange-500 transition">Netzwerk</Link>
            <Link href="/produkte" className="hover:text-orange-500 transition">Produkte</Link>
            <Link href="/news" className="hover:text-orange-500 transition">News</Link>
            <Link href="#kontakt" className="hover:text-orange-500 transition">Kontakt</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section with Video Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster={siteContent.hero.imageUrl}
        >
          <source src={siteContent.hero.videoUrl} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-slate-900/70"></div>
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
            NeuroFit
          </h1>
          <p className="text-xl md:text-2xl text-orange-400 font-medium mb-6">
            Therapie und Trainingsakademie GmbH
          </p>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10">
            {siteContent.hero.description}
          </p>
          <Link 
            href="#kontakt"
            className="inline-block px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-all hover:scale-105"
          >
            Kostenloses Erstgespräch vereinbaren
          </Link>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophie" className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-slate-800 mb-12 text-center">Unsere Philosophie</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {siteContent.philosophy.content.slice(0, 2).map((text, i) => (
              <p key={i} className="text-lg text-slate-600 leading-relaxed">
                {text}
              </p>
            ))}
          </div>
          <div className="mt-12 p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
            <p className="text-lg text-slate-700 leading-relaxed text-center">
              Ein unverbindliches, persönliches und kostenloses Erstgespräch können Sie jederzeit mit uns vereinbaren!
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="therapie" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-slate-800 mb-4 text-center">Unsere Leistungen</h2>
          <p className="text-lg text-slate-600 text-center mb-16 max-w-2xl mx-auto">
            Biofeedback und Neurofeedback als wirksame Methoden zur positiven Beeinflussung von Körper und Geist
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {siteContent.services.map((service, i) => (
              <div key={i} className="p-8 rounded-2xl bg-slate-50 hover:bg-slate-100 transition border border-gray-100">
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-4">{service.description}</p>
                {service.areas && (
                  <div className="flex flex-wrap gap-2">
                    {service.areas.map((area, j) => (
                      <span key={j} className="px-3 py-1 bg-slate-200 text-slate-700 text-sm rounded-full">
                        {area}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fortbildung Section */}
      <section id="fortbildung" className="py-24 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4 text-center">Fortbildung</h2>
          <p className="text-lg text-slate-400 text-center mb-16 max-w-2xl mx-auto">
            Ausbildung zum Neurofeedback-Therapeut nach den Kriterien der Deutschen Gesellschaft für Biofeedback (DGBfb)
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="p-6 bg-slate-800 rounded-xl border border-slate-700">
                <div className="text-3xl font-bold text-orange-500 mb-2">Grundkurs {num}</div>
                <p className="text-slate-400 text-sm">
                  {num === 1 && "Einführung / Geschichte des Biofeedback"}
                  {num === 2 && "Langsame kortikale Potentiale (SCPs)"}
                  {num === 3 && "Lernen und neuronale Prozesse"}
                  {num === 4 && "Neurofeedback bei Schmerz"}
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <a href="#" className="inline-block px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-all">
              Mehr Infos zur Fortbildung
            </a>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-slate-800 mb-12 text-center">Unser Team</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {siteContent.team.members.map((member, i) => (
              <div key={i} className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100 text-center">
                <div className="w-24 h-24 bg-slate-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-3xl font-bold text-slate-400">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-800">{member.name}</h3>
                <p className="text-orange-500 font-medium mb-3">{member.role}</p>
                <p className="text-slate-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kontakt Section */}
      <section id="kontakt" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-slate-800 mb-12 text-center">Kontakt</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-6">Standorte</h3>
              {siteContent.locations.map((loc, i) => (
                <div key={i} className="mb-6 p-6 bg-slate-50 rounded-xl">
                  <h4 className="font-bold text-slate-800 mb-2">{loc.name}</h4>
                  <p className="text-slate-600">Festnetz: {loc.phone}</p>
                  <p className="text-slate-600">Mobil: {loc.mobile}</p>
                </div>
              ))}
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-6">Nachricht</h3>
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Name" 
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-orange-500"
                />
                <input 
                  type="email" 
                  placeholder="E-Mail" 
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-orange-500"
                />
                <input 
                  type="tel" 
                  placeholder="Telefon" 
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-orange-500"
                />
                <textarea 
                  placeholder="Nachricht" 
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-orange-500"
                ></textarea>
                <button 
                  type="submit"
                  className="w-full px-6 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-all"
                >
                  Nachricht senden
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-slate-400">
            © 2024 NeuroFit GmbH - Therapie und Trainingsakademie
          </p>
        </div>
      </footer>
    </div>
  );
}