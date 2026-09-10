import { motion } from "framer-motion";

export default function History() {
  return (
    <section id="domaine" className="relative w-full bg-transparent py-16 md:py-32 px-6 md:px-12 border-t border-gray-300/30 overflow-hidden">
      
      {/* Absolute Bonhomme Graphic - Elegant, static watermark */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.15 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute top-[2%] md:top-[10%] right-[5%] md:right-auto md:left-[15%] w-[40vw] md:w-[28vw] z-0 pointer-events-none origin-center -rotate-12 opacity-40 md:opacity-100"
      >
        <img src={import.meta.env.BASE_URL + "images/bonhomme.png"} className="w-full h-auto object-contain mix-blend-darken" alt="Emblème Domaine"/>
      </motion.div>

      <div className="max-w-[100vw] md:max-w-[85vw] mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-start">
          
          {/* Left Title */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="md:col-span-4"
          >
            <h2 className="text-[2.5rem] md:text-[3.5rem] font-title leading-[1.1] md:leading-[1] text-gray-900 tracking-tight">
              Depuis le <br className="hidden md:block"/><span className="italic text-[#1A3636] md:block">XVIIIe Siècle</span>
            </h2>
          </motion.div>

          {/* Right Text - Magazine article style */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="md:col-span-7 md:col-start-6 space-y-8 md:space-y-12 backdrop-blur-sm bg-white/20 p-6 md:p-8 rounded-3xl"
          >
            <p className="text-lg md:text-2xl font-serif text-gray-800 leading-relaxed relative z-10">
              <span className="text-4xl md:text-7xl float-left mr-4 md:mr-5 mt-1 md:mt-[-0.15em] font-title text-[#1A3636]">L</span>
              'histoire du Domaine Gardiés plonge ses racines dans la seconde moitié du XVIIIème siècle. C'est à cette époque que la famille Castany s’installe au beau milieu des Corbières, au lieu-dit Mas Farine.
            </p>

            <p className="text-base md:text-xl font-serif text-gray-700 leading-relaxed relative z-10">
              Ils y possèdent alors quelques hectares de vignes sur les terres rocailleuses qui composent l’actuel domaine. Plus tard, au début du XXème siècle, Justin Castany récupère ces parcelles de garrigue et les défriche à la force des bras pour y planter nos premières véritables vignes.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6 md:pt-8 border-t border-gray-300/50 relative z-10">
              <div>
                <h4 className="text-[0.65rem] md:text-xs tracking-[0.2em] uppercase font-bold text-[#1A3636] mb-3 md:mb-4">Deux Terroirs Majeurs</h4>
                <p className="text-sm font-sans text-gray-600 leading-loose">
                  Le domaine s'étend aujourd'hui sur 35 hectares. Jean Gardiés, désormais accompagné de son fils Victor, sublime ces deux grands terroirs du Roussillon : Espira-de-L'Agly sur des sols de schistes noirs très friables, et Vingrau sur de vertigineux argilo-calcaires balayés par les vents de la Méditerranée.
                </p>
              </div>
              
              <div>
                <h4 className="text-[0.65rem] md:text-xs tracking-[0.2em] uppercase font-bold text-[#1A3636] mb-3 md:mb-4">L'artisanat du Vivant</h4>
                <p className="text-sm font-sans text-gray-600 leading-loose">
                  Cultivées en agriculture biologique certifiée, nos vignes ne connaissent aucun traitement chimique depuis 2004. Les vinifications se font aux levures indigènes avec des doses de soufre minimales. Saluée par la Revue du Vin de France (2 étoiles), notre quête absolue reste la finesse, la fraîcheur et l'élégance.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
