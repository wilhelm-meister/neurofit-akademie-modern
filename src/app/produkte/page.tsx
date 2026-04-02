import Link from 'next/link';
import { siteContent } from '@/data/siteContent';

export default function Produkte() {
  return (
    <div className="min-h-screen bg-white pt-20">

      <section className="pt-24 pb-16 bg-slate-900 relative overflow-hidden min-h-[400px] flex items-center">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="https://res.cloudinary.com/dargyap8x/video/upload/v1775108093/neurofit/undtchrggcialhry9j9s.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-slate-900/70"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
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

    </div>
  );
}