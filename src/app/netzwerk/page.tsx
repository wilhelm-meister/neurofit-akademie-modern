import Link from 'next/link';
import { siteContent } from '@/data/siteContent';

export default function Netzwerk() {
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
            <Link href="/netzwerk" className="text-orange-500">Netzwerk</Link>
            <Link href="/#kontakt" className="hover:text-orange-500 transition">Kontakt</Link>
          </div>
        </div>
      </nav>

      <section className="pt-24 pb-16 bg-slate-900">
        <div className="max-w-6xl mx-auto px-6">
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

      <footer className="py-12 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-slate-400">© 2024 NeuroFit GmbH</p>
        </div>
      </footer>
    </div>
  );
}