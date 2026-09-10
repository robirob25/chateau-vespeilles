import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Seminaires() {
  const { scrollY } = useScroll();
  const galleryY = useTransform(scrollY, [0, 2000], [0, -100]);

  const images = [
    import.meta.env.BASE_URL + "images/14_Domaine_20viticole_20salle_20de_20seminaire_20gites_20a_20Salses-le-Chateau_204.png",
    import.meta.env.BASE_URL + "images/15_Domaine_20viticole_20salle_20de_20seminaire_20gites_20a_20Salses-le-Chateau_205.png",
    import.meta.env.BASE_URL + "images/16_Domaine_20viticole_20salle_20de_20seminaire_20gites_20a_20Salses-le-Chateau_206.png"
  ];

  return (
    <div className="min-h-screen bg-texture text-gray-900 pb-24">
      
      <div className="pt-32 pb-16 lg:pt-48 lg:pb-24 px-6 lg:px-12 text-center border-b border-gray-200">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-title text-gray-900 leading-tight mb-8">
          Organisation de <span className="italic font-light text-vespeille_red">séminaire</span>
        </h1>
        <p className="font-serif text-xl text-gray-600 leading-relaxed font-light max-w-3xl mx-auto">
          Dans un domaine viticole et oléicole près de Perpignan. Offrez à votre équipe un cadre d’exception pour vos réunions, séminaires et événements professionnels. Niché au cœur des vignes, notre domaine viticole allie authenticité, sérénité et confort pour une expérience unique, propice au travail et à la convivialité.
        </p>
        <div className="mt-10">
          <Link to="/contact" className="inline-block border border-gray-900 text-gray-900 px-8 py-3 uppercase tracking-widest text-xs font-bold hover:bg-gray-900 hover:text-white transition-colors duration-300">
            Contactez-nous
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          <div className="space-y-12 lg:space-y-20 lg:sticky lg:top-32">
            
            <section className="relative">
              <h2 className="text-sm font-sans uppercase tracking-[0.3em] font-bold text-gray-400 mb-6">Un Cadre Inspirant</h2>
              <h3 className="text-3xl font-title text-gray-900 mb-6">Organisez un séminaire d’entreprise inoubliable au domaine</h3>
              <p className="font-serif text-lg text-gray-700 leading-relaxed font-light mb-6">
                Profitez d’un environnement inspirant, où la nature et le terroir se mêlent à l’art de recevoir, pour renforcer la cohésion et la motivation de vos collaborateurs.
              </p>
              <a href="tel:+33618340989" className="text-vespeille_red underline uppercase tracking-widest text-xs font-bold hover:text-gray-900 transition-colors">
                Appelez-nous
              </a>
            </section>

            <section className="relative">
              <h2 className="text-sm font-sans uppercase tracking-[0.3em] font-bold text-gray-400 mb-6">Vos Réunions d'Affaires</h2>
              <h3 className="text-3xl font-title text-gray-900 mb-6">Près de Perpignan au coeur de notre vignoble</h3>
              <p className="font-serif text-lg text-gray-700 leading-relaxed font-light mb-6">
                Notre vignoble accueille vos séminaires, conférences, formations et réunions d’entreprise, en intérieur et en extérieur. Adaptée à vos besoins, elle dispose de tout le matériel nécessaire pour un événement réussi :
              </p>
              <ul className="space-y-4 font-serif text-lg text-gray-800 font-light mb-8">
                <li className="flex items-center gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-vespeille_red"></span>
                  Capacité modulable selon le nombre de participants
                </li>
                <li className="flex items-center gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-vespeille_red"></span>
                  Équipements modernes : écran, vidéoprojecteur, connexion Wi-Fi
                </li>
                <li className="flex items-center gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-vespeille_red"></span>
                  Ambiance chaleureuse et authentique au cœur des vignes
                </li>
                <li className="flex items-center gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-vespeille_red"></span>
                  Espaces extérieurs pour des pauses détente en plein air
                </li>
              </ul>
              <Link to="/contact" className="text-vespeille_red underline uppercase tracking-widest text-xs font-bold hover:text-gray-900 transition-colors">
                Réservez votre séminaire
              </Link>
            </section>

            <section className="relative">
              <h2 className="text-sm font-sans uppercase tracking-[0.3em] font-bold text-gray-400 mb-6">Gastronomie & Vins</h2>
              <h3 className="text-3xl font-title text-gray-900 mb-6">Nos prestations et dégustation de vins</h3>
              <p className="font-serif text-lg text-gray-700 leading-relaxed font-light mb-6">
                Faites de votre séminaire un moment inoubliable en associant travail et plaisir gastronomique ! Nous vous proposons des repas traiteur sur-mesure, mettant à l’honneur des produits locaux et de saison, accompagnés de <Link to="/vins-et-huile-d-olive" className="text-vespeille_red underline">nos vins et huile d’olive</Link> du domaine.
              </p>
              <p className="font-serif text-lg text-gray-700 leading-relaxed font-light mb-6">
                Ajoutez une touche œnotouristique à votre événement avec une dégustation commentée de nos cuvées. Pour une immersion totale, prolongez l’expérience avec une visite de la cave, une balade dans les vignes ou un apéritif vigneron en fin de journée.
              </p>
              <Link to="/contact" className="text-vespeille_red underline uppercase tracking-widest text-xs font-bold hover:text-gray-900 transition-colors">
                Plus d'infos sur nos formules
              </Link>
            </section>

            <section className="relative bg-vespeille_red text-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-title mb-4">Organisez vos réunions d’entreprise dans notre domaine</h3>
              <p className="font-serif text-lg leading-relaxed font-light mb-6 opacity-90">
                Notre domaine offre un cadre dépaysant et inspirant, idéal pour se réunir en dehors du cadre habituel. Faites vivre à vos équipes une expérience originale, alliant professionnalisme, nature et art de vivre.
              </p>
              <Link to="/contact" className="inline-block border border-white text-white px-6 py-2 uppercase tracking-widest text-xs font-bold hover:bg-white hover:text-vespeille_red transition-colors duration-300">
                Contactez-nous
              </Link>
            </section>

          </div>

          <motion.div style={{ y: galleryY }} className="w-full space-y-12">
            {images.map((src, index) => (
              <div key={index} className="w-full relative shadow-lg bg-white p-4">
                <img 
                  src={src} 
                  alt={`Séminaire au Château Vespeille - ${index + 1}`} 
                  className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            ))}
          </motion.div>

        </div>

      </div>

    </div>
  );
}
