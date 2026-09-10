import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-12 bg-white">
      <div className="max-w-[100vw] md:max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
        
        {/* Left Column: Info & Exact Content */}
        <div className="flex-1 space-y-12 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-title leading-tight text-gray-900 mb-4">
              Contactez <br/>
              <span className="italic font-light text-vespeille_red">le Domaine</span>
            </h2>
            <p className="text-gray-600 font-serif md:text-lg mb-8 max-w-md">
              Contactez notre domaine viticole et oléicole pour organiser des dégustations et des événements à Salses-le-Château.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Coordonnées */}
            <div>
              <h3 className="text-sm font-sans tracking-widest uppercase font-bold text-gray-400 mb-4">Coordonnées</h3>
              <div className="space-y-4 text-gray-900 font-serif">
                <p>
                  <strong className="font-sans text-xs uppercase tracking-wider text-vespeille_red block mb-1">Adresse</strong>
                  Domaine de Vespeille, Mas Vespeille, <br/>
                  66600 Salses-le-Château, France
                </p>
                <p>
                  <strong className="font-sans text-xs uppercase tracking-wider text-vespeille_red block mb-1">Téléphone</strong>
                  +33 6 18 34 09 89<br/>
                  +33 6 15 24 47 85
                </p>
              </div>
            </div>

            {/* Horaires */}
            <div>
              <h3 className="text-sm font-sans tracking-widest uppercase font-bold text-gray-400 mb-4">Horaires d'accueil au domaine</h3>
              <div className="space-y-2 text-gray-900 font-serif">
                <p><span className="font-bold">Du Lundi au Samedi :</span> 09h00 – 12h30 & 15h00 – 18h30</p>
                <p><span className="font-bold">Le Dimanche :</span> 09h00 – 12h30</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Simple Form */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex-1 w-full bg-[#F9F6F0] p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100"
        >
          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-xs uppercase tracking-widest font-bold text-gray-500">Nom</label>
              <input type="text" id="name" className="bg-white border-b border-gray-300 px-0 py-3 text-gray-900 focus:outline-none focus:border-vespeille_red transition-colors font-serif" placeholder="Votre nom" />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-xs uppercase tracking-widest font-bold text-gray-500">Email</label>
              <input type="email" id="email" className="bg-white border-b border-gray-300 px-0 py-3 text-gray-900 focus:outline-none focus:border-vespeille_red transition-colors font-serif" placeholder="votre@email.com" />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-xs uppercase tracking-widest font-bold text-gray-500">Message</label>
              <textarea id="message" rows="4" className="bg-white border-b border-gray-300 px-0 py-3 text-gray-900 focus:outline-none focus:border-vespeille_red transition-colors font-serif resize-none" placeholder="Comment pouvons-nous vous aider ?"></textarea>
            </div>

            <button type="submit" className="mt-4 bg-vespeille_red text-white px-8 py-4 uppercase tracking-widest text-xs font-bold hover:bg-gray-900 transition-colors self-start rounded-full">
              Envoyer le message
            </button>
          </form>
        </motion.div>
        
      </div>
    </section>
  );
}
