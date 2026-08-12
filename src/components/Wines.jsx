import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Composant Tache de Vin Organique local (CSS Optimisé GPU)
const LocalWineStain = ({ className }) => (
  <div className={`pointer-events-none absolute mix-blend-multiply z-0 flex items-center justify-center ${className}`}>
    <div 
      className="w-[80%] h-[80%] bg-[#E30613] blur-[40px]"
      style={{ borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }}
    />
  </div>
);

const wines = [
  {
    name: "Les Millères",
    type: "Rouge",
    cepages: "Grenache Noir, Syrah, Carignan, Mourvèdre",
    terroir: "Schistes noirs d'Espira & Argilo-calcaires de Vingrau",
    description: "Cuvée phare du domaine, un assemblage magistralement équilibré exprimant la finesse et la complexité de nos terroirs.",
    image: "./images/bottle_red.jpg",
    accent: "#E30613",
    alcool: "14%",
    appellation: "Côtes-du-Roussillon",
    viticulture: "Biologique",
    temperature: "16°",
    arome: "Fruité, équilibré"
  },
  {
    name: "Les Falaises",
    type: "Rouge",
    cepages: "Syrah, Carignan, Mourvèdre, Grenache",
    terroir: "Terroirs de Vingrau (Vieux Carignans centenaires)",
    description: "Une cuvée sérieuse et structurée, forgée à l'image des vertigineuses falaises calcaires qui surplombent nos vignes.",
    image: "./images/bottle_red.jpg",
    accent: "#E30613",
    alcool: "14%",
    appellation: "Côtes-du-Roussillon-Villages Tautavel",
    viticulture: "Biologique",
    temperature: "17°",
    arome: "Gourmand, énergique"
  },
  {
    name: "Les Glacières",
    type: "Blanc",
    cepages: "Grenache Blanc, Grenache Gris, Macabeu, Roussanne",
    terroir: "Argilo-calcaires sur les hauteurs de Vingrau",
    description: "Un vin blanc pur et frais, élevé en demi-muids, réputé pour sa fraîcheur éclatante et sa tension minérale.",
    image: "./images/bottle_white.jpg",
    accent: "#D4AF37",
    alcool: "13.5%",
    appellation: "Côtes-du-Roussillon",
    viticulture: "Biologique",
    temperature: "10-12°",
    arome: "Pur, floral, minéral"
  },
  {
    name: "La Torre",
    type: "Rouge",
    cepages: "Mourvèdre, Grenache, Carignan",
    terroir: "Sols de schistes et d'argiles d'Espira-de-l'Agly",
    description: "Une cuvée de grand caractère issue de vieilles vignes et de rendements limités, puissante, racée avec une concentration remarquable.",
    image: "./images/bottle_red.jpg",
    accent: "#E30613",
    alcool: "14.5%",
    appellation: "Côtes-du-Roussillon-Villages",
    viticulture: "Biologique",
    temperature: "16-17°",
    arome: "Concentré, épicé"
  },
  {
    name: "Clos des Vignes",
    type: "Rouge",
    cepages: "Grenache, Carignan, Syrah",
    terroir: "Tautavel",
    description: "Issu de terroirs historiques, ce vin dévoile une profondeur et une trame tannique d'une grande noblesse.",
    image: "./images/bottle_red.jpg",
    accent: "#E30613",
    alcool: "14%",
    appellation: "Côtes-du-Roussillon-Villages Tautavel",
    viticulture: "Biologique",
    temperature: "17°",
    arome: "Profond, structuré"
  },
  {
    name: "Les Vignes de mon père",
    type: "Blanc",
    cepages: "Macabeu, Grenache Gris, Roussanne",
    terroir: "Sélection de vieilles parcelles familiales",
    description: "Un vibrant hommage en blanc dont l'encépagement varie selon les années, offrant une texture ample et profondément élégante.",
    image: "./images/bottle_white.jpg",
    accent: "#D4AF37",
    alcool: "13.5%",
    appellation: "IGP Côtes Catalanes",
    viticulture: "Biologique",
    temperature: "12°",
    arome: "Ample, complexe"
  },
  {
    name: "Je Cherche le Ciel",
    type: "Rouge",
    cepages: "Cinsault, Mourvèdre, Grenache",
    terroir: "Vingrau & Espira",
    description: "Un assemblage audacieux et aérien, une véritable quête de fraîcheur méditerranéenne.",
    image: "./images/bottle_red.jpg",
    accent: "#E30613",
    alcool: "13.5%",
    appellation: "Côtes-du-Roussillon",
    viticulture: "Biologique",
    temperature: "15°",
    arome: "Frais, croquant"
  },
  {
    name: "On s'en Fish",
    type: "Rouge",
    cepages: "Syrah, Grenache, Cinsault",
    terroir: "Sols profonds",
    description: "Une cuvée de pur plaisir. Un jus léger, gourmand et joyeusement gouleyant.",
    image: "./images/bottle_red.jpg",
    accent: "#E30613",
    alcool: "13%",
    appellation: "IGP Côtes Catalanes",
    viticulture: "Biologique",
    temperature: "14°",
    arome: "Gouleyant, gourmand"
  }
];

export default function Wines() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = wines[currentIndex];

  return (
    <section id="cuvees" className="relative w-full bg-transparent py-16 md:py-32 px-6 md:px-12 border-t border-gray-300/30 overflow-hidden">
      
      {/* Tache de vin décorative (en arrière-plan) */}
      <LocalWineStain className="w-[600px] h-[600px] opacity-[0.06] -top-[100px] -right-[150px] rotate-[120deg]" />
      <LocalWineStain className="w-[800px] h-[800px] opacity-[0.04] bottom-[-200px] -left-[300px] -rotate-45" />
      
      <div className="max-w-[100vw] md:max-w-7xl mx-auto relative z-10">
        <div className="mb-12 md:mb-24 text-center md:text-left">
          <h2 className="text-[2.5rem] md:text-[4rem] font-title leading-[1] text-[#1a1a1a] tracking-tight">
            La Collection<br/>
            <span className="italic text-[#E30613] font-light">du Domaine</span>
          </h2>
          <p className="mt-4 md:mt-6 text-gray-600 font-serif text-sm md:text-base max-w-xl">
            Découvrez les fiches techniques détaillées de nos cuvées.<br className="hidden md:block" /> Sélectionnez un vin dans le menu ci-dessous pour l'afficher.
          </p>
        </div>

        {/* Layout : Menu (3) | Bottle (3) | Specs (6) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Column 1: Menu (Horizontal scroll on mobile, Vertical on desktop) */}
          <div 
            className="lg:col-span-3 flex lg:flex-col gap-6 lg:gap-2 overflow-x-auto lg:overflow-x-visible snap-x snap-mandatory pb-4 lg:pb-0 border-b border-gray-300/30 lg:border-b-0 lg:border-l-2 lg:border-gray-200 lg:pl-6 h-fit"
            style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
          >
            {/* Injecter un petit bloc style pour cacher la scrollbar webkit si nécessaire */}
            <style dangerouslySetInnerHTML={{__html: `::-webkit-scrollbar { display: none; }`}} />
            
            {wines.map((wine, i) => (
              <button 
                key={wine.name}
                onClick={() => setCurrentIndex(i)}
                className={`snap-start whitespace-nowrap lg:whitespace-normal text-left font-title text-2xl transition-all duration-300 ${
                  i === currentIndex 
                    ? 'text-[#E30613] italic lg:-ml-2 border-b-2 border-[#E30613] lg:border-b-0 pb-1 lg:pb-0' 
                    : 'text-gray-400 hover:text-gray-900 lg:hover:translate-x-2 pb-1 lg:pb-0'
                }`}
              >
                {wine.name}
              </button>
            ))}
          </div>

          {/* Column 2: Bottle Display */}
          <div className="lg:col-span-4 h-[450px] md:h-[500px] lg:h-[600px] flex items-center justify-center p-4 relative group">
            <AnimatePresence mode="wait">
              <motion.img 
                key={current.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                src={current.image}
                alt={current.name}
                className="w-auto h-full object-contain mix-blend-multiply opacity-90 scale-125 md:scale-150 origin-center"
              />
            </AnimatePresence>
          </div>

          {/* Column 3: Bento Info Grid with Enriched Data */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={`info-${current.name}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {/* Header Block */}
                <div className="sm:col-span-2 backdrop-blur-sm bg-white/20 p-8 rounded-3xl border border-white/30 flex flex-col justify-center">
                  <span className="text-[0.65rem] tracking-[0.3em] uppercase font-bold mb-3" style={{ color: current.accent }}>
                    {current.type} • {current.appellation}
                  </span>
                  <h3 className="text-4xl md:text-5xl font-title text-gray-900 leading-none mb-4">
                    {current.name}
                  </h3>
                  <p className="text-lg font-serif text-gray-700 italic">
                    "{current.description}"
                  </p>
                </div>

                {/* Caractéristiques Block */}
                <div className="sm:col-span-2 backdrop-blur-sm bg-white/20 p-6 md:p-8 rounded-3xl border border-white/30">
                  <h4 className="text-sm font-sans text-gray-900 uppercase tracking-widest mb-6 font-bold flex items-center gap-2">
                    Caractéristiques détaillées
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 text-sm font-sans">
                    <div className="flex justify-between border-b border-gray-300/30 pb-2">
                      <span className="text-gray-500 font-bold">Pourcentage d'alcool</span>
                      <span className="text-gray-900 text-right">{current.alcool}</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-300/30 pb-2">
                      <span className="text-gray-500 font-bold">Température de service</span>
                      <span className="text-gray-900 text-right">{current.temperature}</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-300/30 pb-2">
                      <span className="text-gray-500 font-bold">Viticulture</span>
                      <span className="text-gray-900 text-right">{current.viticulture}</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-300/30 pb-2">
                      <span className="text-gray-500 font-bold">Arôme dominant</span>
                      <span className="text-gray-900 text-right">{current.arome}</span>
                    </div>
                  </div>
                </div>

                {/* Cépages Block */}
                <div className="backdrop-blur-sm bg-white/20 p-6 md:p-8 rounded-3xl border border-white/30">
                  <h4 className="text-[0.65rem] font-sans text-gray-400 uppercase tracking-widest mb-3 font-bold">Encépagement</h4>
                  <p className="text-base font-serif text-gray-800 leading-snug">
                    {current.cepages}
                  </p>
                </div>

                {/* Terroir Block */}
                <div className="backdrop-blur-sm bg-white/20 p-6 md:p-8 rounded-3xl border border-white/30">
                  <h4 className="text-[0.65rem] font-sans text-gray-400 uppercase tracking-widest mb-3 font-bold">Terroir</h4>
                  <p className="text-base font-serif text-gray-800 leading-snug">
                    {current.terroir}
                  </p>
                </div>

              </motion.div>
            </AnimatePresence>

          </div>
        </div>
      </div>
    </section>
  );
}
