import Link from 'next/link';
import { siteContent } from '@/data/siteContent';

export default function Fortbildung() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-slate-800">
            NeuroFit<span className="text-orange-500">.</span>
          </Link>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
            <Link href="/#philosophie" className="hover:text-orange-500 transition">Philosophie</Link>
            <Link href="/#therapie" className="hover:text-orange-500 transition">Therapie</Link>
            <Link href="/fortbildung" className="text-orange-500">Fortbildung</Link>
            <Link href="/#team" className="hover:text-orange-500 transition">Team</Link>
            <Link href="/#kontakt" className="hover:text-orange-500 transition">Kontakt</Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-24 pb-16 bg-slate-900">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Fortbildung</h1>
          <p className="text-xl text-orange-400">Ausbildung zum Neurofeedback-Therapeut</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-lg text-slate-600 leading-relaxed">
            {siteContent.fortbildung.intro}
          </p>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-800 mb-12">Curriculum</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {siteContent.fortbildung.courses.map((course, i) => (
              <div key={i} className="p-8 bg-slate-50 rounded-2xl border border-gray-100">
                <h3 className="text-xl font-bold text-orange-500 mb-4">{course.title}</h3>
                <ul className="space-y-2">
                  {course.topics.map((topic, j) => (
                    <li key={j} className="text-slate-600 text-sm flex items-start">
                      <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Courses */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8">Weitere Kurse</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {siteContent.fortbildung.additionalCourses.map((course, i) => (
              <div key={i} className="flex items-center">
                <span className="w-3 h-3 bg-orange-500 rounded mr-3"></span>
                <span>{course}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
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