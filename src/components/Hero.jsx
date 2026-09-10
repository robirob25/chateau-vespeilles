import { motion } from "framer-motion";

export default function Hero({ isAgeVerified = true }) {
  return (
    <section id="accueil" className="relative w-full min-h-screen bg-[#F9F6F0] flex flex-col justify-center pt-24 md:pt-32 pb-16 px-6 md:px-12 overflow-hidden">
      
      <div className="max-w-[100vw] md:max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Text Content */}
        <div className="relative z-20 order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isAgeVerified ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block px-4 py-1 border border-vespeille_red/30 text-vespeille_red text-xs uppercase tracking-widest font-bold mb-6 rounded-full"
          >
            Salses-le-Château
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={isAgeVerified ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-4xl md:text-5xl lg:text-[4.5rem] font-title text-gray-900 leading-[1.1] mb-6"
          >
            Château <br/>
            <span className="italic text-vespeille_red font-light">Vespeille Les Pins</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isAgeVerified ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-gray-700 font-serif md:text-lg leading-relaxed max-w-xl mb-10"
          >
            Bienvenue dans notre domaine viticole et oléicole, salle de séminaire et gîtes à Salses-le-Château. Propriétaire-récoltant, le domaine s'étend entre mer et montagne et propose la vente directe de sa production artisanale.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isAgeVerified ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <a href="#vins" className="bg-vespeille_red text-white px-8 py-3 rounded-full uppercase tracking-widest text-xs font-bold hover:bg-gray-900 transition-colors">
              Découvrir nos vins
            </a>
            <a href="#gites" className="border border-gray-300 text-gray-800 px-8 py-3 rounded-full uppercase tracking-widest text-xs font-bold hover:border-vespeille_red hover:text-vespeille_red transition-colors">
              Nos hébergements
            </a>
          </motion.div>
        </div>

        {/* Hero Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isAgeVerified ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="relative order-1 lg:order-2 w-full h-[40vh] lg:h-[70vh] rounded-2xl overflow-hidden shadow-2xl"
        >
          {/* Using the beautiful vineyard landscape image */}
          <img 
            src="./images/14_Domaine_20viticole_20salle_20de_20seminaire_20gites_20a_20Salses-le-Chateau_204.png" 
            alt="Vignoble du Château Vespeille Les Pins" 
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
        
      </div>
    </section>
  );
}
