import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation - Same on all pages */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-slate-800 flex items-center gap-3">
            <img src="https://res.cloudinary.com/dargyap8x/image/upload/v1775107548/neurofit/xme9bfptiwcv4gfl8smo.png" alt="NeuroFit" className="h-8" />
            <span className="text-orange-500">.</span>
          </Link>
          <div className="hidden md:flex gap-6 text-sm font-medium text-slate-600">
            <Link href="/" className="hover:text-orange-500 transition py-4">Home</Link>
            <Link href="/#philosophie" className="hover:text-orange-500 transition py-4">Philosophie</Link>
            <Link href="/#team" className="hover:text-orange-500 transition py-4">Team</Link>
            <Link href="/#standorte" className="hover:text-orange-500 transition py-4">Standorte</Link>
            <Link href="#kontakt" className="hover:text-orange-500 transition py-4">Kontakt</Link>
            <Link href="/news" className="hover:text-orange-500 transition py-4">News</Link>
            <Link href="/news/#aktuelles" className="hover:text-orange-500 transition py-4">Aktuelles</Link>
            <Link href="/news/#archiv" className="hover:text-orange-500 transition py-4">Archiv</Link>
            
            {/* Therapie & Training Dropdown */}
            <div className="relative group h-full">
              <Link href="/therapie" className="hover:text-orange-500 transition py-4 block">Therapie & Training</Link>
              <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 hidden group-hover:block min-w-[160px] z-50">
                <Link href="/therapie/#philosophie" className="block px-4 py-2 hover:bg-slate-50">Philosophie</Link>
                <Link href="/therapie/#basics" className="block px-4 py-2 hover:bg-slate-50">Basics</Link>
                <Link href="/therapie/#einsatzgebiete" className="block px-4 py-2 hover:bg-slate-50">Einsatzgebiete</Link>
                <Link href="/therapie/#flyer" className="block px-4 py-2 hover:bg-slate-50">Flyer</Link>
              </div>
            </div>
            
            {/* Fortbildung Dropdown */}
            <div className="relative group h-full">
              <Link href="/fortbildung" className="hover:text-orange-500 transition py-4 block">Fortbildung</Link>
              <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 hidden group-hover:block min-w-[160px] z-50">
                <Link href="/fortbildung/#philosophie" className="block px-4 py-2 hover:bg-slate-50">Philosophie</Link>
                <Link href="/fortbildung/#curriculum" className="block px-4 py-2 hover:bg-slate-50">Curriculum</Link>
                <Link href="/fortbildung/#kurse" className="block px-4 py-2 hover:bg-slate-50">Kurse</Link>
              </div>
            </div>
            
            {/* Produkte Dropdown */}
            <div className="relative group h-full">
              <Link href="/produkte" className="hover:text-orange-500 transition py-4 block">Produkte</Link>
              <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 hidden group-hover:block min-w-[160px] z-50">
                <Link href="/produkte/#angebote" className="block px-4 py-2 hover:bg-slate-50">Angebote</Link>
                <Link href="/produkte/#neuigkeiten" className="block px-4 py-2 hover:bg-slate-50">Neuigkeiten</Link>
              </div>
            </div>
            
            <Link href="/netzwerk" className="hover:text-orange-500 transition py-4">Netzwerk</Link>
          </div>
        </div>
      </nav>

      {/* Page content */}
      {children}

      {/* Footer - Same on all pages */}
      <footer className="py-16 bg-slate-800 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="font-bold text-lg mb-4">Praxis Kempen + Verwaltung</h3>
              <p className="text-slate-300">Dr. Axel Kowalski, Dipl.-Psych.</p>
              <p className="text-slate-300">Heinrich-Horten-Str. 35, 47906 Kempen</p>
              <p className="text-slate-300 mt-2">Telefon: 02152-809 66 42</p>
              <p className="text-slate-300">Mobil: 0174-950 1404</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Praxis Hagen</h3>
              <p className="text-slate-300">Christina Erkeling-Köster, M.Sc.</p>
              <p className="text-slate-300">Bergischer Ring 50, 58095 Hagen</p>
              <p className="text-slate-300 mt-2">Telefon: 02331-7 87 54 48</p>
              <p className="text-slate-300">Mobil: 0176-924 432 49</p>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400">© 2024 NeuroFit GmbH - Therapie und Trainingsakademie</p>
            <div className="flex gap-6">
              <Link href="/impressum" className="text-slate-400 hover:text-orange-400">Impressum</Link>
              <Link href="/datenschutz" className="text-slate-400 hover:text-orange-400">Datenschutzerklärung</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}