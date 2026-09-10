import { motion } from "framer-motion";

export default function Events() {
  const events = [
    {
      id: 1,
      title: "Apéros Vignerons",
      description: "Soirées conviviales autour des vins du château et de produits du terroir.",
      icon: "🍷"
    },
    {
      id: 2,
      title: "Vespeille Plage",
      description: "Événements estivaux et soirées guinguette en plein air sur le domaine.",
      icon: "☀️"
    },
    {
      id: 3,
      title: "Activités Plein Air",
      description: "Balades dans les vignes (VTT, quad), visites guidées de la cave et du vignoble.",
      icon: "🌿"
    },
    {
      id: 4,
      title: "Événements Culturels",
      description: "Marchés de producteurs locaux, concerts et rencontres vigneronnes.",
      icon: "🎶"
    }
  ];

  return (
    <section id="evenements" className="py-24 md:py-32 px-6 md:px-12 bg-[#F9F6F0]">
      <div className="max-w-[100vw] md:max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-16 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-title text-gray-900 leading-tight mb-4">
              Nos <span className="italic text-vespeille_red font-light">Événements</span>
            </h2>
            <p className="text-gray-600 font-serif md:text-lg max-w-2xl mx-auto">
              Animations & Œnotourisme au cœur des vignes. Rejoignez-nous pour nos prochaines dégustations.
            </p>
          </motion.div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <motion.article 
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{event.icon}</div>
              <h3 className="text-2xl font-title text-vespeille_red mb-3">
                {event.title}
              </h3>
              <p className="text-gray-700 font-serif leading-relaxed">
                {event.description}
              </p>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
