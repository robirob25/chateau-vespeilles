import { motion } from "framer-motion";

export default function Seminaires() {
  return (
    <section id="seminaires" className="py-24 md:py-32 px-6 md:px-12 bg-[#F9F6F0]">
      <div className="max-w-[100vw] md:max-w-7xl mx-auto flex flex-col lg:flex-row-reverse gap-16 lg:gap-24 items-center">
        
        {/* Text Content */}
        <div className="flex-1 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-title text-gray-900 leading-tight mb-6">
              Séminaires & <br/>
              <span className="italic text-vespeille_red font-light">Événements PRO</span>
            </h2>
            
            <div className="space-y-6 text-gray-700 font-serif md:text-lg leading-relaxed">
              <p>
                Organisation de réunions, séminaires d'entreprise, journées d'étude et réceptions professionnelles au sein du domaine viticole.
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2 font-bold text-gray-900">
                <li>Salle de séminaire dédiée et équipée située au caveau.</li>
              </ul>
              <p>
                Possibilité de combiner les sessions de travail avec des dégustations de vins, ateliers œnologiques et visites guidées du domaine.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Image Component */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="flex-1 w-full"
        >
          <div className="relative w-full rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="./images/15_Domaine_20viticole_20salle_20de_20seminaire_20gites_20a_20Salses-le-Chateau_205.png" 
              alt="Salle de séminaire au Château Vespeille" 
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
