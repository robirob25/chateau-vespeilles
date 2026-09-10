import { motion } from "framer-motion";

export default function VinsEtHuiles() {
  return (
    <section id="vins" className="py-24 md:py-32 px-6 md:px-12 bg-white">
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
              Vins & Huile <br/>
              <span className="italic text-vespeille_red font-light">d'Olive</span>
            </h2>
            
            <div className="space-y-6 text-gray-700 font-serif md:text-lg leading-relaxed">
              <p>
                Le domaine produit une gamme variée de vins issus des cépages du Roussillon :
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2 font-bold text-gray-900">
                <li>AOC Côtes du Roussillon (Rouges, Blancs, Rosés)</li>
                <li>IGP Côtes Catalanes</li>
              </ul>
              <p>
                En tant que propriétaire-récoltant, l'ensemble du processus de vinification et d'élevage est réalisé sur place. La vente directe et des dégustations sont proposées au caveau du domaine.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="pt-8 border-t border-gray-200"
          >
            <h3 className="text-2xl font-title text-gray-900 mb-4">Huile d'olive vierge extra</h3>
            <p className="text-gray-700 font-serif md:text-lg leading-relaxed">
              Extraction à froid par procédés mécaniques à partir des oliviers du domaine. Conditionnée et vendue directement au caveau.
            </p>
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
              src="./images/12_vins_20et_20huiles_20d_olives.jpg" 
              alt="Bouteilles de vins et huile d'olive du Château Vespeille" 
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
