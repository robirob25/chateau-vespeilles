import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // Handle scroll for sticky glassmorphism header & auto-hide
  useEffect(() => {
    let timeout;
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
      
      if (scrolled) {
        setIsVisible(true);
        clearTimeout(timeout);
        // Masquer le header après 1.5s d'inactivité de scroll
        timeout = setTimeout(() => {
          // On s'assure que le menu n'est pas ouvert avant de cacher
          setIsVisible(false);
        }, 1500);
      } else {
        setIsVisible(true);
        clearTimeout(timeout);
      }
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeout);
    };
  }, []);

  // Show header if menu is toggled open
  useEffect(() => {
    if (isOpen) setIsVisible(true);
  }, [isOpen]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; }
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header 
        className={`fixed top-0 w-full z-[100] px-6 md:px-12 flex justify-between items-center text-gray-900 transition-all duration-700 ${
          isScrolled 
            ? "py-3 md:py-4 bg-[#F6EFE2]/90 backdrop-blur-md shadow-sm border-b border-gray-300/30" 
            : "py-6 md:py-8 bg-transparent"
        } ${!isVisible && !isOpen ? "-translate-y-full" : "translate-y-0"}`}
      >
        <div className="flex items-center">
          <a 
            href="#accueil" 
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              window.history.replaceState(null, '', ' ');
            }}
            className="cursor-pointer"
          >
            <img 
              src="./images/logo.png" 
              alt="Domaine Gardiés" 
              className={`w-auto object-contain mix-blend-multiply transition-all duration-500 ${
                isScrolled ? "h-16 md:h-20" : "h-20 md:h-28 mt-2"
              }`} 
            />
          </a>
        </div>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-12 text-[0.65rem] font-sans tracking-[0.3em] uppercase">
          <a href="#accueil" className="hover:opacity-60 transition-opacity">Accueil</a>
          <a href="#domaine" className="hover:opacity-60 transition-opacity">Le Domaine</a>
          <a href="#cuvees" className="hover:opacity-60 transition-opacity">Cuvées</a>
          <a href="#evenements" className="hover:opacity-60 transition-opacity">Agenda</a>
          <a href="#contact" className="hover:opacity-60 transition-opacity">Visites</a>
        </nav>

        {/* Mobile Hamburger Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none z-[110]"
          aria-label="Menu"
        >
          <span className={`block w-6 h-[1px] transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-[7px] bg-white' : 'bg-gray-900'}`}></span>
          <span className={`block w-6 h-[1px] transition-opacity duration-300 ${isOpen ? 'opacity-0 bg-white' : 'opacity-100 bg-gray-900'}`}></span>
          <span className={`block w-6 h-[1px] transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-[7px] bg-white' : 'bg-gray-900'}`}></span>
        </button>
      </header>

      {/* Mobile Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[90] bg-[#1a1a1a] flex flex-col justify-center items-center"
          >
            {/* Elegant Wine Glass Icon */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mb-12 text-[#E30613]"
            >
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 22h8" />
                <path d="M12 15v7" />
                <path d="M6.3 7.3l.5 3.3a4.9 4.9 0 0 0 10.4 0l.5-3.3A2 2 0 0 0 15.7 5H8.3a2 2 0 0 0-2 2.3z" />
                <path d="M7 10h10" fill="#E30613" opacity="0.3" /> {/* Simulate wine inside */}
              </svg>
            </motion.div>

            <nav className="flex flex-col items-center gap-8 text-white">
              <motion.a 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                onClick={closeMenu} 
                href="#accueil" 
                className="text-2xl font-title tracking-widest hover:text-[#E30613] transition-colors"
              >
                Accueil
              </motion.a>
              <motion.a 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                onClick={closeMenu} 
                href="#domaine" 
                className="text-2xl font-title tracking-widest hover:text-[#E30613] transition-colors"
              >
                Le Domaine
              </motion.a>
              <motion.a 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                onClick={closeMenu} 
                href="#cuvees" 
                className="text-2xl font-title tracking-widest hover:text-[#E30613] transition-colors"
              >
                Cuvées
              </motion.a>
              <motion.a 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                onClick={closeMenu} 
                href="#evenements" 
                className="text-2xl font-title tracking-widest hover:text-[#E30613] transition-colors"
              >
                Agenda
              </motion.a>
              <motion.a 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                onClick={closeMenu} 
                href="#contact" 
                className="text-2xl font-title tracking-widest hover:text-[#E30613] transition-colors"
              >
                Visites
              </motion.a>
            </nav>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-12 text-center text-gray-500 text-[0.6rem] tracking-[0.3em] uppercase"
            >
              L'abus d'alcool est dangereux pour la santé.
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
