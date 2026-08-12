import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    image: "./images/gallery_new_2.jpg",
    title: "L'Héritage",
    subtitle: "La Famille Gardiés",
    description: "Une histoire de transmission et de passion ancrée dans la terre des Corbières depuis des générations.",
    positionStyle: "50% 0%",
    origin: "50% 0%"
  },
  {
    id: 2,
    image: "./images/gallery_new_4.jpg",
    title: "Les Origines",
    subtitle: "L'empreinte du temps",
    description: "Un terroir rocailleux, riche de fossiles et d'histoire, qui forge le caractère indomptable de nos vins."
  },
  {
    id: 3,
    image: "./images/gallery_new_3.jpg",
    title: "La Récolte",
    subtitle: "Le Geste",
    description: "La main de l'artisan qui cueille le fruit à sa parfaite maturité, dans le plus pur respect du vivant."
  },
  {
    id: 4,
    image: "./images/gallery_new_1.jpg",
    title: "L'Artisanat",
    subtitle: "Le Chai",
    description: "Le temps du silence et de la patience, où chaque barrique élève le vin vers sa plus juste expression."
  },
  {
    id: 5,
    image: "./images/hero_vineyard.jpg",
    title: "L'Immensité",
    subtitle: "Terroir de Vingrau",
    description: "Des falaises de calcaire blanc sculptées par les vents dominants. Le point zéro de notre cuvée."
  },
  {
    id: 6,
    image: "./images/bw_old_vine.jpg",
    title: "La Résilience",
    subtitle: "L'Âge de la Vigne",
    description: "Des décennies de lutte silencieuse face à l'aridité pour puiser l'essence même du schiste."
  },
  {
    id: 7,
    image: "./images/bw_grapes.jpg",
    title: "La Concentration",
    subtitle: "Le Fruit Brut",
    description: "Une matière première d'une intensité rare, le fruit d'un terroir sans aucun compromis."
  }
];

export default function Gallery() {
  const [current, setCurrent] = useState(0);

  // Auto-play (cinematic feel)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  return (
    <section id="galerie" className="relative w-full h-[100svh] md:h-screen overflow-hidden bg-[#1a1a1a] z-10">
      
      {/* Background Images with Crossfade and Slow Zoom (Ken Burns) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {/* Overlay sombre pour assurer la lisibilité du texte blanc */}
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          
          <motion.img 
            src={slides[current].image} 
            alt={slides[current].title} 
            initial={{ scale: 1.08 }}
            animate={{ scale: 1.03 }}
            transition={{ duration: 10, ease: "easeOut" }}
            style={{ 
              transformOrigin: slides[current].origin || "center",
              objectPosition: slides[current].positionStyle || "center",
              willChange: "transform"
            }}
            className="w-full h-full object-cover filter contrast-[1.15] grayscale"
          />
        </motion.div>
      </AnimatePresence>

      {/* Contenu Textuel Superposé */}
      <div className="relative z-20 h-full flex flex-col justify-between px-6 md:px-16 py-8 md:py-20 max-w-[1400px] mx-auto pt-24 md:pt-20">
        
        {/* Titre Haut */}
        <div>
          <h2 className="text-[2rem] md:text-[3rem] font-title text-white tracking-tighter">
            Mémoire <span className="italic font-light text-[#E30613] block md:inline">des Corbières</span>
          </h2>
        </div>

        {/* Détails du Slide & Navigation */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-12 mt-auto pb-4 lg:pb-0">
          
          <div className="max-w-xl">
            <motion.p 
              key={`subtitle-${current}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-[0.6rem] md:text-xs tracking-[0.4em] uppercase font-bold text-white/70 mb-2 md:mb-4"
            >
              {slides[current].subtitle}
            </motion.p>
            
            <motion.h3 
              key={`title-${current}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-[3rem] md:text-[5rem] lg:text-[6rem] leading-[0.9] font-title text-white mb-4 md:mb-6"
            >
              {slides[current].title}
            </motion.h3>
            
            <motion.p 
              key={`desc-${current}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="font-serif italic text-white/90 text-sm md:text-lg leading-relaxed max-w-[90%]"
            >
              {slides[current].description}
            </motion.p>
          </div>

          {/* Contrôles de navigation */}
          <div className="flex gap-4 md:gap-8 items-center pt-4 md:pt-0 pb-2 md:pb-4 border-t border-white/20 lg:border-t-0 mt-4 md:mt-0">
            <button 
              onClick={prevSlide}
              className="text-white/50 hover:text-white transition-colors duration-300 p-2 md:p-2 -ml-2 md:ml-0"
              aria-label="Image précédente"
            >
              <svg className="w-6 h-6 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            {/* Indicateurs (Dots) */}
            <div className="flex gap-3 md:gap-4 flex-1 md:flex-none justify-center">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`transition-all duration-500 rounded-full ${
                    idx === current 
                      ? 'w-8 md:w-10 h-[2px] bg-white' 
                      : 'w-3 md:w-4 h-[2px] bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Aller à l'image ${idx + 1}`}
                />
              ))}
            </div>

            <button 
              onClick={nextSlide}
              className="text-white/50 hover:text-white transition-colors duration-300 p-2 md:p-2"
              aria-label="Image suivante"
            >
              <svg className="w-6 h-6 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
