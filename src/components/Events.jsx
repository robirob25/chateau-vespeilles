import { motion } from "framer-motion";

const events = [
  {
    id: 1,
    title: 'Fête du nouveau millésime "On s\'en Fish"',
    date: "Dimanche 3 mai 2026",
    time: "11h - 18h",
    location: "Cave du Domaine Gardiés - Chemin de Montpins, 66600 Espira de l'Agly",
    description: "Le Domaine Gardiés et Amourette Plage se retrouvent pour fêter ensemble le nouveau millésime ! Un moment vivant et convivial autour de petits plats à partager. Restauration sur place, Music live avec Lemon Grass. Entrée libre.",
    link: "https://instagram.com/domainegardies",
    day: "03",
    month: "MAI"
  },
  {
    id: 2,
    title: 'Dégustation "Le Grand Bal"',
    date: "Lundi 31 mars 2025",
    time: "10h - 18h30",
    location: "Hôtel Georges V - 31 Avenue Georges V, 75008 Paris",
    description: "L'événement incontournable de l'année. Une rencontre et une dégustation exceptionnelle rassemblant 60 vignerons de prestige en plein cœur de Paris.",
    link: "https://instagram.com/domainegardies",
    day: "31",
    month: "MARS"
  }
];

export default function Events() {
  return (
    <section id="evenements" className="relative w-full bg-transparent py-16 md:py-32 px-6 md:px-12 border-t border-gray-300/30 overflow-hidden">
      
      {/* Arrière-plan "On s'en Fish" en filigrane (couvre tout l'écran) */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.07] mix-blend-multiply bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: 'url("./images/fishes.png")' }}
      />

      <div className="max-w-[100vw] md:max-w-6xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="mb-12 md:mb-24 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[2.5rem] md:text-[4rem] font-title leading-[1.1] md:leading-[1] text-[#1a1a1a] tracking-tight">
              Agenda <br className="hidden md:block"/>
              <span className="italic text-[#E30613] font-light md:block">du Domaine</span>
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-600 font-serif text-sm md:text-base max-w-sm md:text-right mx-auto md:mx-0"
          >
            Retrouvez-nous lors de nos événements au domaine, salons professionnels et rencontres vigneronnes à travers le monde.
          </motion.p>
        </div>

        {/* Events List */}
        <div className="space-y-6 md:space-y-8">
          {events.map((event, index) => (
            <motion.article 
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group backdrop-blur-sm bg-white/20 p-6 md:p-12 rounded-3xl border border-white/30 hover:bg-white/40 transition-colors duration-500 shadow-sm flex flex-col lg:flex-row gap-6 lg:gap-16 items-start lg:items-center"
            >
              
              {/* Date Block (Editorial typography) */}
              <div className="flex flex-col items-center justify-center min-w-[120px] text-[#E30613] border-b lg:border-b-0 lg:border-r border-gray-300/30 pb-6 lg:pb-0 lg:pr-12 w-full lg:w-auto">
                <span className="text-6xl md:text-7xl font-title leading-none">{event.day}</span>
                <span className="text-sm tracking-[0.2em] uppercase font-bold mt-2">{event.month}</span>
              </div>

              {/* Info Block */}
              <div className="flex-1 space-y-4">
                <div className="flex flex-col gap-1">
                  <h3 className="text-2xl md:text-3xl font-title text-gray-900 group-hover:text-[#E30613] transition-colors duration-300">
                    {event.title}
                  </h3>
                  <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs uppercase tracking-widest text-gray-500 font-bold mt-2">
                    <span className="flex items-center gap-2">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                      {event.time}
                    </span>
                    <span className="flex items-center gap-2">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                      {event.location}
                    </span>
                  </div>
                </div>
                
                <p className="text-lg font-serif text-gray-700 leading-relaxed max-w-3xl">
                  {event.description}
                </p>
              </div>

              {/* Action Button */}
              <div className="mt-4 lg:mt-0 pt-6 lg:pt-0 border-t lg:border-t-0 border-gray-300/30 w-full lg:w-auto flex justify-start lg:justify-end">
                <a 
                  href={event.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-6 py-3 rounded-full border border-gray-900 text-gray-900 hover:bg-[#E30613] hover:border-[#E30613] hover:text-white transition-all duration-300 text-sm font-sans tracking-widest uppercase font-bold"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                  Voir sur Instagram
                </a>
              </div>
              
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
