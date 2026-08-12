import { motion } from "framer-motion";

export default function Hero({ isAgeVerified = true }) {
  return (
    <section id="accueil" className="relative w-full min-h-[90vh] md:min-h-screen bg-transparent overflow-hidden flex flex-col md:flex-row md:items-center justify-center pt-24 md:pt-20 pb-12">
      
      {/* --- FOUR CORNERS EDITORIAL BLOCKS (Desktop) & STACKED (Mobile) --- */}
      
      {/* Top Left (Desktop) / Hidden Mobile or stacked */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={isAgeVerified ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="hidden lg:block absolute top-32 left-12 z-20"
      >
        <h3 className="text-[0.65rem] font-sans tracking-[0.3em] uppercase text-gray-400 mb-3">Vignerons</h3>
        <p className="text-sm text-gray-900 font-serif italic max-w-[180px]">
          Jean & Victor Gardiés.<br/>Artisans vignerons du Roussillon.
        </p>
      </motion.div>

      {/* Top Right (Desktop) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={isAgeVerified ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="hidden lg:block absolute top-32 right-12 z-20 text-right"
      >
        <h3 className="text-[0.65rem] font-sans tracking-[0.3em] uppercase text-gray-400 mb-3">Viticulture</h3>
        <p className="text-sm text-gray-900 font-serif italic">
          Agriculture Biologique
        </p>
      </motion.div>

      {/* Bottom Left (Desktop) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={isAgeVerified ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="hidden lg:block absolute bottom-24 left-12 z-20"
      >
        <h3 className="text-[0.65rem] font-sans tracking-[0.3em] uppercase text-gray-400 mb-3">Distinction</h3>
        <p className="text-sm text-gray-900 font-serif italic">
          Guide Vert RVF <span className="text-[#E30613] tracking-widest text-xs">★★</span>
        </p>
      </motion.div>

      {/* Bottom Right (Desktop) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={isAgeVerified ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="hidden lg:block absolute bottom-24 right-16 z-20 text-right"
      >
        <h3 className="text-[0.65rem] font-sans tracking-[0.3em] uppercase text-gray-400 mb-3">Terroirs</h3>
        <p className="text-sm text-gray-900 font-serif italic max-w-[200px] ml-auto">
          L'exigence des schistes et argilo-calcaires.<br/>
          <span className="text-xs text-gray-500 mt-2 block">Espira-de-l’Agly | Vingrau | Tautavel</span>
        </p>
      </motion.div>

      {/* Center piece: Title + Image overlapping - Magazine Layout */}
      <div className="relative flex items-center justify-center w-full max-w-[100vw] lg:max-w-6xl mx-auto h-[50vh] md:h-[60vh] lg:h-full mt-12 md:mt-0">
        
        {/* Image offset to the right to create dynamic tension */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isAgeVerified ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="w-[90%] md:w-[75%] lg:w-[60%] lg:ml-auto relative z-10 md:translate-x-[5%] lg:translate-x-[10%]"
        >
          <img 
            src="/images/falaises_lavis.png" 
            alt="Lavis" 
            className="w-full h-auto object-contain"
          />
        </motion.div>

        {/* Title perfectly centered structurally, but visually offset to overlap the image */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={isAgeVerified ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
          className="absolute top-[10%] md:top-[15%] lg:top-[25%] left-4 lg:-left-[2%] z-30 text-[#1a1a1a] text-[3.5rem] md:text-[6rem] lg:text-[10rem] xl:text-[11rem] font-title leading-[0.8] md:leading-[0.75] tracking-tight pointer-events-none md:mix-blend-darken [text-shadow:0_0_20px_#F6EFE2,0_0_10px_#F6EFE2] md:[text-shadow:none]"
        >
          Domaine<br/>
          <span className="italic font-light text-[#E30613] ml-4 md:ml-24">Gardiés</span>
        </motion.h1>
      </div>

      {/* Mobile Information Blocks (Stacked below) */}
      <div className="lg:hidden w-full px-6 flex flex-col gap-6 mt-auto mb-12 relative z-20">
        <div className="flex justify-between border-t border-gray-300/30 pt-4">
          <div>
            <h3 className="text-[0.55rem] font-sans tracking-[0.2em] uppercase text-gray-400 mb-1">Vignerons</h3>
            <p className="text-xs text-gray-900 font-serif italic">Jean & Victor Gardiés</p>
          </div>
          <div className="text-right">
            <h3 className="text-[0.55rem] font-sans tracking-[0.2em] uppercase text-gray-400 mb-1">Viticulture</h3>
            <p className="text-xs text-gray-900 font-serif italic">Agriculture Bio</p>
          </div>
        </div>
        <div className="flex justify-between border-t border-gray-300/30 pt-4">
          <div>
            <h3 className="text-[0.55rem] font-sans tracking-[0.2em] uppercase text-gray-400 mb-1">Distinction</h3>
            <p className="text-xs text-gray-900 font-serif italic">Guide RVF <span className="text-[#E30613]">★★</span></p>
          </div>
          <div className="text-right">
            <h3 className="text-[0.55rem] font-sans tracking-[0.2em] uppercase text-gray-400 mb-1">Terroirs</h3>
            <p className="text-xs text-gray-900 font-serif italic">Espira | Vingrau</p>
          </div>
        </div>
      </div>

      {/* Center Bottom - Scroll Indicator (Desktop only, or small on mobile) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={isAgeVerified ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:block"
      >
        <a href="#domaine" className="flex flex-col items-center gap-2 text-[0.55rem] tracking-[0.3em] uppercase font-bold text-[#E30613] hover:text-black transition-colors">
          <span>Découvrir</span>
          <span className="w-[1px] h-12 bg-[#E30613]"></span>
        </a>
      </motion.div>

    </section>
  );
}
