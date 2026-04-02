import Link from 'next/link';
import { siteContent } from '@/data/siteContent';

export default function Produkte() {
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
            <Link href="/#therapie" className="hover:text-orange-500 transition">Therapie</Link>
            <Link href="/fortbildung" className="hover:text-orange-500 transition">Fortbildung</Link>
            <Link href="/produkte" className="text-orange-500">Produkte</Link>
            <Link href="/#kontakt" className="hover:text-orange-500 transition">Kontakt</Link>
          </div>
        </div>
      </nav>

      <section className="pt-24 pb-16 bg-slate-900">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Produkte & Service</h1>
          <p className="text-xl text-orange-400">Neurofeedback-Geräte und Fernwartung</p>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-lg text-slate-600 mb-12">
            {siteContent.produkte.intro}
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {siteContent.produkte.services.map((service, i) => (
              <a 
                key={i}
                href={service.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-8 bg-white rounded-2xl border border-gray-100 hover:border-orange-300 hover:shadow-lg transition"
              >
                <h3 className="text-xl font-bold text-slate-800 mb-2">{service.title}</h3>
                <p className="text-slate-600 mb-4">{service.desc}</p>
                <span className="text-orange-500 font-medium">Download →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-slate-800 mb-8">Unsere Produkte</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {siteContent.produkte.products.map((product, i) => (
              <div key={i} className="p-6 bg-slate-50 rounded-xl border border-gray-100">
                <h3 className="text-lg font-bold text-slate-800 mb-2">{product.name}</h3>
                <p className="text-slate-600">{product.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="kontakt" className="py-16 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Fragen zu unseren Produkten?</h2>
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
          <p className="text-slate-400">© 2024 NeuroFit GmbH</p>
        </div>
      </footer>
    </div>
  );
}