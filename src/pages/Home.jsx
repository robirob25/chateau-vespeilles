import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import WineStain from '../components/WineStain';

// --- Custom Hooks for "2026" Effects ---

function useScrollY() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => requestAnimationFrame(() => setScrollY(window.scrollY));
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return scrollY;
}

function useReveal(threshold = 0.1) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, isVisible];
}

// --- Bottle 3D Component ---

function Bottle3D() {
  const [style, setStyle] = useState({ transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)' });
  const [glowStyle, setGlowStyle] = useState({ opacity: 0 });
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xPct = (x / rect.width - 0.5) * 2;
    const yPct = (y / rect.height - 0.5) * 2;
    const rotateX = yPct * -15; 
    const rotateY = xPct * 15;

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.08) translateY(-10px)`,
      transition: 'transform 0.1s ease-out'
    });
    setGlowStyle({
      opacity: 1,
      background: `radial-gradient(circle at ${x}px ${y}px, rgba(153, 27, 27, 0.15) 0%, rgba(153, 27, 27, 0) 60%)`,
      transition: 'background 0.1s, opacity 0.3s'
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1) translateY(0px)',
      transition: 'transform 1s cubic-bezier(0.34, 1.56, 0.64, 1)'
    });
    setGlowStyle({ opacity: 0, transition: 'opacity 0.5s' });
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex justify-center items-center w-full h-[500px] cursor-pointer"
    >
      <div className="absolute inset-0 pointer-events-none rounded-full blur-2xl transition-opacity" style={glowStyle}></div>
      <div style={style} className="relative z-20 h-[400px] flex justify-center items-center drop-shadow-[0_20px_30px_rgba(0,0,0,0.3)]">
        <img src={import.meta.env.BASE_URL + "images/wine_gentleman.png"} alt="Cuvée Le Gentleman" className="h-full object-contain pointer-events-none" style={{ mixBlendMode: 'multiply' }} />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 mix-blend-overlay hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      </div>
    </div>
  );
}

// --- Main Page Component ---

export default function Home() {
  const scrollY = useScrollY();
  const [historyRef, historyVisible] = useReveal();
  const [cuveeRef, cuveeVisible] = useReveal();
  const [gridRef, gridVisible] = useReveal(0.05);

  const offers = [
    {
      title: "Vins & Huile d'olive",
      description: "Vente directe et dégustation au caveau de vins et d'huile d'olive vierge extra.",
      image: import.meta.env.BASE_URL + "images/luxury_wine.jpg",
      link: "/vins-et-huile-d-olive"
    },
    {
      title: "Nos Gîtes",
      description: "Séjours de prestige au cœur du domaine viticole, entre mer et montagne.",
      image: import.meta.env.BASE_URL + "images/luxury_gite.jpg",
      link: "/nos-gites"
    },
    {
      title: "Séminaires",
      description: "Événements professionnels dans un cadre d'exception, dégustations et ateliers.",
      image: import.meta.env.BASE_URL + "images/15_Domaine_20viticole_20salle_20de_20seminaire_20gites_20a_20Salses-le-Chateau_205.png",
      link: "/seminaires"
    },
    {
      title: "Événements",
      description: "Réceptions grandioses, soirées estivales et rencontres vigneronnes inoubliables.",
      image: import.meta.env.BASE_URL + "images/luxury_event.jpg", 
      link: "/nos-evenements"
    }
  ];

  return (
    <div className="min-h-screen bg-texture text-gray-900 pb-24 overflow-hidden">
      
      {/* 1. Hero Section with Parallax */}
      <div className="relative w-full h-[80vh] md:h-[90vh] overflow-hidden">
        <div 
          className="absolute inset-0 will-change-transform"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }} // Parallax scrolling slower than page
        >
          <img src={import.meta.env.BASE_URL + "images/hero_canigou_blur.png"} alt="Vignoble du Château Vespeille" className="w-full h-full object-cover animate-ken-burns origin-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
        </div>

        <div 
          className="absolute inset-0 flex flex-col justify-end items-center pb-24 md:pb-32 px-6 text-center z-10 will-change-transform"
          style={{ transform: `translateY(${-scrollY * 0.15}px)`, opacity: 1 - scrollY / 600 }} // Text moves up slightly and fades out
        >
          <p className="text-[0.65rem] md:text-[0.75rem] uppercase tracking-[0.3em] font-sans text-white/80 mb-6 animate-[fade-in-up_1s_ease-out]">
            Salses-le-Château, Roussillon
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-[7rem] font-title text-white leading-none mb-8 drop-shadow-2xl animate-[fade-in-up_1.2s_ease-out_0.2s_both]">
            Château <br className="md:hidden" /><span className="italic font-light">Vespeille</span> <br /><span className="italic font-light text-vespeille_red">les Pins</span>
          </h1>
          <p className="font-serif text-lg md:text-xl text-white/90 max-w-2xl font-light animate-[fade-in-up_1.4s_ease-out_0.4s_both]">
            Découvrez l'authenticité de notre terroir à travers nos vins et huiles d'olive.
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
          <div className="w-[1px] h-10 md:h-12 bg-vespeille_red opacity-90"></div>
        </div>
      </div>

      {/* 2. Editorial with Scroll Reveal */}
      <div 
        ref={historyRef}
        className={`relative max-w-4xl mx-auto px-6 pb-16 md:pb-32 pt-16 md:pt-24 text-center transition-all duration-1000 transform ${historyVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'}`}
      >
        <div className="flex justify-center items-center mb-12 -mt-16 md:-mt-24 relative z-30">
          <WineStain className="w-[300px] md:w-[450px] absolute top-10 md:top-20 left-0 right-0 mx-auto z-0" staticShape />
          <img src={import.meta.env.BASE_URL + "images/logo_vespeille.png"} alt="Château Vespeille les Pins Logo" className="w-48 md:w-64 lg:w-[22rem] h-auto object-contain animate-[spin_20s_linear_infinite] origin-[48%_59%] relative z-10" />
        </div>
        <h2 className="text-sm font-sans uppercase tracking-[0.3em] font-bold text-gray-400 mb-8 relative z-10">
          Notre Histoire
        </h2>
        <h3 className="text-4xl lg:text-5xl font-title text-gray-900 leading-snug mb-12 relative z-10">
          Un domaine familial <br/> <span className="italic text-vespeille_red">depuis 1992</span>
        </h3>
        <div className="font-serif text-lg md:text-xl leading-relaxed text-gray-700 space-y-6 text-left md:text-center relative z-10">
          <p>
            Le Château Vespeille Les Pins est un domaine viticole et oléicole familial situé à Salses-le-Château, dans les Pyrénées-Orientales. Propriétaire-récoltant depuis sa création, nous cultivons avec passion nos vignes et nos oliviers entre mer Méditerranée et montagnes.
          </p>
          <p>
            De la vigne à la bouteille, nous préservons la tradition et le savoir-faire pour vous offrir des produits d'exception. Notre domaine ne s'arrête pas à la production : nous avons voulu en faire un véritable lieu de vie, ouvert au partage.
          </p>
        </div>
      </div>

      {/* 3. Feature Focus with Scroll Reveal */}
      <div 
        ref={cuveeRef}
        className={`relative max-w-7xl mx-auto px-6 lg:px-12 py-12 transition-all duration-1000 delay-200 transform ${cuveeVisible ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0'}`}
      >
        <WineStain className="w-[250px] md:w-[400px] -bottom-12 md:-bottom-24 -left-12 md:-left-20 z-0" />
        <div className="flex flex-col lg:flex-row bg-white shadow-2xl border border-gray-100 overflow-hidden relative z-10">
          <div className="w-full lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center">
            <h2 className="text-sm font-sans uppercase tracking-[0.3em] font-bold text-vespeille_red mb-6">
              Notre Cuvée Phare
            </h2>
            <h3 className="text-4xl font-title text-gray-900 mb-8">
              L'élégance du <span className="italic">Roussillon</span>
            </h3>
            <p className="font-serif text-lg text-gray-600 leading-relaxed mb-10">
              Découvrez la Cuvée <strong>Le Gentleman</strong> (Côtes du Roussillon), un assemblage chic de Grenache noir et Syrah idéal pour accompagner vos viandes rouges et fromages de caractère. Une véritable signature du domaine.
            </p>
            <Link to="/vins-et-huile-d-olive" className="text-[0.65rem] uppercase tracking-[0.2em] font-bold text-gray-900 relative inline-block self-start border-b border-gray-900 pb-1 hover:text-vespeille_red hover:border-vespeille_red transition-colors">
              Découvrir tous nos vins
            </Link>
          </div>
          <div className="w-full lg:w-1/2 bg-texture flex items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-gray-100/50 to-transparent opacity-50 pointer-events-none"></div>
            <Bottle3D />
          </div>
        </div>
      </div>

      {/* 4. Asymmetric Grid with Staggered Parallax/Reveal */}
      <div ref={gridRef} className="relative max-w-7xl mx-auto px-6 lg:px-12 mt-40">
        <WineStain className="w-[250px] md:w-[350px] top-1/4 -left-10 md:-left-24 opacity-60 z-0" />
        <WineStain className="w-[350px] md:w-[500px] bottom-1/4 -right-16 md:-right-32 opacity-40 z-0" />
        <WineStain className="w-[200px] md:w-[250px] top-2/3 left-1/3 opacity-50 z-0" />
        <h2 className={`text-4xl font-title text-center mb-24 transition-all duration-700 relative z-10 ${gridVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          Vivre le Domaine
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {offers.map((offer, index) => (
            <Link 
              key={index} 
              to={offer.link}
              className={`group flex flex-col relative z-10 transition-all duration-1000 ease-out transform ${gridVisible ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0'} ${index % 2 !== 0 ? 'md:mt-32' : ''}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="w-full aspect-[3/4] overflow-hidden bg-gray-100 mb-8 relative drop-shadow-xl">
                {/* Image Parallax (scaling and fixed attachment trick) */}
                <div className="w-full h-full animate-ken-burns origin-center" style={{ animationDuration: `${40 + index * 5}s` }}>
                  <img 
                    src={offer.image} 
                    alt={offer.title} 
                    className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)]"
                  />
                </div>
              </div>
              <h3 className="text-3xl font-title text-gray-900 mb-4 group-hover:text-vespeille_red transition-colors duration-300">
                {offer.title}
              </h3>
              <p className="text-base font-serif text-gray-600 leading-relaxed mb-6">
                {offer.description}
              </p>
              <div className="text-[0.65rem] uppercase tracking-[0.2em] font-bold text-gray-900 relative inline-block self-start">
                Découvrir
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
}
