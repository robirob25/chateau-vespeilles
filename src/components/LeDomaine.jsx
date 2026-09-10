import { motion } from "framer-motion";

export default function LeDomaine() {
  return (
    <section id="domaine" className="relative w-full bg-[#F9F6F0] py-24 md:py-40 px-6 md:px-12 flex items-center justify-center">
      <div className="max-w-[100vw] md:max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Left: Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col justify-center order-2 md:order-1"
        >
          <h2 className="text-[2.5rem] md:text-[4rem] font-title text-gray-900 leading-tight mb-8">
            Notre Domaine<br/>
            <span className="italic font-light text-[#D4AF37]">Récoltant Vigneron</span>
          </h2>
          <div className="space-y-6 text-gray-700 font-serif md:text-lg leading-relaxed">
            <p>
              Installés en famille depuis 1992, nous cultivons la vigne avec passion sur les terroirs d'exception de Salses-le-Château.
            </p>
            <p>
              Bienvenue dans notre domaine viticole et oléicole, où tradition et exigence se rencontrent pour donner naissance à des produits authentiques et généreux.
            </p>
          </div>
        </motion.div>

        {/* Right: Image */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative w-full aspect-[4/5] md:aspect-[3/4] order-1 md:order-2"
        >
          <img 
            src="./images/15_Domaine_20viticole_20salle_20de_20seminaire_20gites_20a_20Salses-le-Chateau_205.png" 
            alt="Le Domaine" 
            className="w-full h-full object-cover rounded-3xl"
          />
        </motion.div>

      </div>
    </section>
  );
}
