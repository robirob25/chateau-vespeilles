import { useState, useEffect } from 'react';
import Navbar from './components/Navbar'
import AgeGate from './components/AgeGate'
import Hero from './components/Hero'
import History from './components/History'
import Gallery from './components/Gallery'
import Wines from './components/Wines'
import Events from './components/Events'
import Contact from './components/Contact'

// Composant Tache de Vin Organique (CSS Optimisé GPU)
const WineStain = ({ className }) => (
  <div className={`pointer-events-none absolute mix-blend-multiply flex items-center justify-center ${className}`}>
    <div 
      className="w-[80%] h-[80%] bg-[#E30613] blur-[40px]"
      style={{ borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }}
    />
  </div>
);

function App() {
  const [isAgeVerified, setIsAgeVerified] = useState(true);

  useEffect(() => {
    setIsAgeVerified(sessionStorage.getItem('age_verified') === 'true');
    // Forcer le retour en haut de page au rechargement (évite que le navigateur garde le scroll précédent)
    window.scrollTo(0, 0);
    // Si l'URL contient un fragment (ex: #contact), l'enlever visuellement pour éviter un saut
    if (window.location.hash) {
      window.history.replaceState(null, '', ' ');
    }
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-[#F6EFE2] text-gray-900 overflow-hidden font-sans selection:bg-[#E30613] selection:text-white">
      
      <AgeGate onVerify={() => setIsAgeVerified(true)} />
      
      {/* Ultra-subtle Fixed Paper Grain */}
      <div 
        className="fixed inset-0 z-[9999] pointer-events-none mix-blend-multiply opacity-[0.06]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundAttachment: "fixed"
        }}
      ></div>

      {/* Decorative Wine Stains (Absolute positioning over the whole scrolling document) */}
      <WineStain className="w-[500px] h-[500px] opacity-[0.06] top-[10%] -left-[200px] rotate-45" />
      <WineStain className="w-[800px] h-[800px] opacity-[0.04] top-[35%] -right-[300px] -rotate-12 scale-150" />
      <WineStain className="w-[400px] h-[400px] opacity-[0.08] top-[65%] left-[10%] rotate-90" />
      <WineStain className="w-[600px] h-[600px] opacity-[0.05] top-[85%] -right-[150px] rotate-180" />

      <Navbar />
      <Hero isAgeVerified={isAgeVerified} />
      <Gallery />
      <History />
      <Wines />
      <Events />
      <Contact />
      <footer className="bg-transparent text-gray-900 py-16 px-6 md:px-12 border-t border-gray-300/30 relative z-10">
        <div className="max-w-[95vw] md:max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          {/* Logo */}
          <div className="md:col-span-3 flex justify-center md:justify-start">
            <img src="/images/logo.png" alt="Domaine Gardiés" className="h-20 md:h-28 w-auto object-contain mix-blend-multiply opacity-80" />
          </div>

          {/* Menu */}
          <div className="md:col-span-5 flex flex-wrap justify-center gap-6 text-[0.65rem] tracking-[0.3em] uppercase font-bold text-gray-600">
            <a href="#accueil" className="hover:text-[#E30613] transition-colors">Le Domaine</a>
            <a href="#galerie" className="hover:text-[#E30613] transition-colors">Galerie</a>
            <a href="#histoire" className="hover:text-[#E30613] transition-colors">Histoire</a>
            <a href="#cuvees" className="hover:text-[#E30613] transition-colors">Les Vins</a>
            <a href="#contact" className="hover:text-[#E30613] transition-colors">Contact</a>
          </div>

          {/* Social & Legal */}
          <div className="md:col-span-4 flex flex-col items-center md:items-end gap-6">
            <div className="flex gap-8 text-gray-800">
              {/* Instagram Icon */}
              <a href="https://instagram.com/domainegardies" target="_blank" rel="noopener noreferrer" className="hover:text-[#E30613] transition-transform hover:scale-110" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              {/* Facebook Icon */}
              <a href="https://www.facebook.com/domainegardies/" target="_blank" rel="noopener noreferrer" className="hover:text-[#E30613] transition-transform hover:scale-110" aria-label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.312h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
              </a>
            </div>
            <div className="text-[0.55rem] tracking-[0.2em] text-gray-500 uppercase text-center md:text-right">
              L'abus d'alcool est dangereux pour la santé.<br className="hidden md:block" /> À consommer avec modération.
            </div>
          </div>

        </div>
      </footer>
    </div>
  )
}

export default App
