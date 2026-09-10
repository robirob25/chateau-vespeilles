import { motion } from "framer-motion";

export default function Gites() {
  return (
    <section id="gites" className="py-24 md:py-32 px-6 md:px-12 bg-white">
      <div className="max-w-[100vw] md:max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        
        {/* Text Content */}
        <div className="flex-1 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-title text-gray-900 leading-tight mb-6">
              Nos Gîtes <br/>
              <span className="italic text-vespeille_red font-light">au Domaine</span>
            </h2>
            
            <div className="space-y-6 text-gray-700 font-serif md:text-lg leading-relaxed">
              <p>
                Hébergements en gîtes aménagés au cœur de l'exploitation viticole et oléicole, offrant un environnement calme et naturel entre mer Méditerranée et montagnes des Pyrénées.
              </p>
              <p>
                Offre d'hébergement en gîte avec extension/ouverture d'un second gîte pour accueillir les vacanciers et œnotouristes.
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2 font-bold text-gray-900">
                <li>Proximité du caveau de dégustation et accès privilégié aux activités du château.</li>
              </ul>
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
              src="./images/16_Domaine_20viticole_20salle_20de_20seminaire_20gites_20a_20Salses-le-Chateau_206.png" 
              alt="Gîte au Château Vespeille" 
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
