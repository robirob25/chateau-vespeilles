import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Château Vespeille Les Pins", href: "/" },
    { name: "Vins & Huile d'olive", href: "/vins-et-huile-d-olive" },
    { name: "Séminaires", href: "/seminaires" },
    { name: "Nos gîtes", href: "/nos-gites" },
    { name: "Nos événements", href: "/nos-evenements" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-sm py-4' : 'bg-white py-6'}`}>
        <div className="max-w-[100vw] md:max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          
          {/* Logo */}
          <Link to="/" className="relative z-50 flex-shrink-0">
            <img 
              src="/images/logo_vespeille.png" 
              alt="Château Vespeille les Pins" 
              className={`transition-all duration-500 object-contain ${isScrolled ? 'h-10 md:h-12' : 'h-12 md:h-16'}`}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-12 text-[0.7rem] uppercase tracking-widest font-sans font-semibold text-gray-800">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.href} 
                className="hover:text-vespeille_red transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-vespeille_red transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden relative z-50 p-2 -mr-2 text-gray-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            <div className="flex flex-col gap-1.5 w-6">
              <span className={`block h-[2px] w-full bg-current transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-[8px]' : ''}`}></span>
              <span className={`block h-[2px] w-full bg-current transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-[2px] w-full bg-current transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-[8px]' : ''}`}></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-white z-40 transition-transform duration-500 flex flex-col justify-center px-12 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col gap-8 text-2xl font-title text-gray-900">
          {navLinks.map((link, i) => (
            <Link 
              key={link.name}
              to={link.href} 
              className="hover:text-vespeille_red transition-colors border-b border-gray-100 pb-4"
              onClick={() => setMobileMenuOpen(false)}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="mt-16 text-sm text-gray-500 font-sans uppercase tracking-widest">
          Salses-le-Château
        </div>
      </div>
    </>
  );
}
