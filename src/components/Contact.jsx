import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="w-full bg-transparent py-16 md:py-32 px-6 md:px-12 border-t border-gray-300/30 relative z-10">
      <div className="max-w-[100vw] md:max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        
        {/* Left Side: Booking Form */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
        >
           <h2 className="text-[2.5rem] md:text-[3.5rem] font-title mb-2 md:mb-4 text-gray-900 leading-none tracking-tight">
             Visite & <span className="italic text-[#E30613] font-light">Dégustation</span>.
           </h2>
           <p className="text-gray-600 font-serif text-sm md:text-base mb-8 md:mb-12 max-w-md">
             Venez découvrir nos terroirs et déguster nos cuvées au cœur du vignoble. Remplissez ce formulaire pour planifier votre venue.
           </p>

           <form className="space-y-8 md:space-y-10 max-w-lg" onSubmit={(e) => {
             e.preventDefault();
             const formData = new FormData(e.target);
             const data = Object.fromEntries(formData);
             const subject = `Demande de visite/dégustation - ${data.name || ''}`;
             const body = `Nom: ${data.name || ''}\nEmail: ${data.email || ''}\nDate souhaitée: ${data.date || ''}\nNombre de personnes: ${data.people || ''}\n\nMessage:\n${data.message || ''}`;
             window.location.href = `mailto:info.domainegardies@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
           }}>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
               <input 
                 type="text" 
                 name="name"
                 aria-label="Prénom et Nom"
                 placeholder="Prénom & Nom" 
                 required
                 className="w-full bg-transparent border-b border-gray-400 focus:border-[#E30613] pb-3 text-sm font-sans text-gray-900 placeholder:text-gray-500 focus:outline-none transition-colors rounded-none"
               />
               <input 
                 type="email" 
                 name="email"
                 aria-label="Adresse email"
                 placeholder="Adresse email" 
                 required
                 className="w-full bg-transparent border-b border-gray-400 focus:border-[#E30613] pb-3 text-sm font-sans text-gray-900 placeholder:text-gray-500 focus:outline-none transition-colors rounded-none"
               />
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
               <div className="relative">
                 <input 
                   type="date" 
                   name="date"
                   aria-label="Date souhaitée"
                   required
                   className="w-full bg-transparent border-b border-gray-400 focus:border-[#E30613] pb-3 text-sm font-sans text-gray-900 focus:outline-none transition-colors rounded-none cursor-pointer appearance-none"
                 />
                 <span className="absolute left-0 -top-4 text-[0.6rem] font-bold tracking-widest uppercase text-gray-400">Date souhaitée</span>
               </div>
               <div className="relative">
                 <select 
                   name="people"
                   defaultValue=""
                   required
                   aria-label="Nombre de personnes"
                   className="w-full bg-transparent border-b border-gray-400 focus:border-[#E30613] pb-3 text-sm font-sans text-gray-900 focus:outline-none transition-colors rounded-none cursor-pointer appearance-none"
                 >
                   <option value="" disabled hidden>Nombre de personnes</option>
                   <option value="1-2" className="text-black">1 à 2 personnes</option>
                   <option value="3-5" className="text-black">3 à 5 personnes</option>
                   <option value="6+" className="text-black">6 personnes ou plus</option>
                 </select>
                 <span className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 text-xs">▼</span>
               </div>
             </div>
             <textarea 
               name="message"
               aria-label="Votre message"
               placeholder="Votre message ou demande particulière..." 
               rows="3" 
               className="w-full bg-transparent border-b border-gray-400 focus:border-[#E30613] pb-3 text-sm font-sans text-gray-900 placeholder:text-gray-500 focus:outline-none transition-colors rounded-none resize-none"
             ></textarea>
             
             <button 
               type="submit" 
               className="inline-flex items-center justify-center px-10 py-4 rounded-full border border-gray-900 text-gray-900 hover:bg-[#E30613] hover:border-[#E30613] hover:text-white transition-all duration-300 text-[0.65rem] font-sans tracking-[0.2em] uppercase font-bold mt-4"
             >
               Envoyer la demande
             </button>
           </form>
        </motion.div>

        {/* Right Side: Contact Info */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col lg:items-end justify-center space-y-12 text-sm font-sans text-gray-600 backdrop-blur-sm bg-white/20 p-8 md:p-12 lg:p-16 rounded-3xl border border-white/30 h-fit"
        >
          <div className="text-left lg:text-right w-full">
            <h3 className="font-bold text-gray-900 uppercase tracking-[0.2em] text-[0.65rem] mb-4 border-b border-gray-300/30 pb-3 lg:border-b-0 lg:pb-0">Où nous trouver</h3>
            <p className="font-serif text-xl italic text-gray-700 leading-relaxed">
              Domaine Gardiés<br/>
              Chemin de Montpins<br/>
              66600 Espira-de-L'Agly, France
            </p>
          </div>
          <div className="text-left lg:text-right w-full">
            <h3 className="font-bold text-gray-900 uppercase tracking-[0.2em] text-[0.65rem] mb-4 border-b border-gray-300/30 pb-3 lg:border-b-0 lg:pb-0">Contact direct</h3>
            <a href="mailto:info.domainegardies@gmail.com" className="block font-serif text-xl italic text-gray-700 hover:text-[#E30613] transition-colors leading-relaxed">
              info.domainegardies@gmail.com
            </a>
            <a href="tel:+33468646116" className="block font-serif text-xl italic text-gray-700 hover:text-[#E30613] transition-colors leading-relaxed mt-2">
              +33 (0)4 68 64 61 16
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
