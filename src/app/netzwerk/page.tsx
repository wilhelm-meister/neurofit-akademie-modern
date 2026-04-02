import Link from 'next/link';
import { siteContent } from '@/data/siteContent';

export default function Netzwerk() {
  return (
    <div className="min-h-screen bg-white pt-20">

      <section className="pt-24 pb-16 bg-slate-900 relative overflow-hidden min-h-[400px] flex items-center">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="https://res.cloudinary.com/dargyap8x/video/upload/v1775108093/neurofit/undtchrggcialhry9j9s.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-slate-900/70"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Netzwerk</h1>
          <p className="text-xl text-orange-400">Kooperationen in Forschung und Lehre</p>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-lg text-slate-600 mb-12 max-w-3xl">
            {siteContent.network.intro}
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {siteContent.network.partners.map((partner, i) => (
              <a 
                key={i}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white rounded-xl border border-gray-100 hover:border-orange-300 hover:shadow-md transition"
              >
                <span className="text-slate-700 font-medium">{partner.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-slate-800 mb-8">Produkte & Links</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {siteContent.network.products.map((product, i) => (
              <a 
                key={i}
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 bg-slate-50 rounded-xl border border-gray-100 hover:border-orange-300 transition"
              >
                <h3 className="font-bold text-slate-800 mb-2">{product.name}</h3>
                <p className="text-slate-600 text-sm">{product.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}