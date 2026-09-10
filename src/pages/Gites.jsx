import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Gites() {
  const { scrollY } = useScroll();
  // Un effet parallax très léger
  const heroY = useTransform(scrollY, [0, 1000], [0, 150]);

  return (
    <div className="min-h-screen bg-texture text-gray-900 pb-24">
      
      {/* Header */}
      <div className="pt-32 pb-16 lg:pt-48 lg:pb-24 px-6 lg:px-12 text-center border-b border-gray-200">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-title text-gray-900 leading-tight mb-8">
          Réservez votre <span className="italic font-light text-vespeille_red">séjour en gîte</span>
        </h1>
        <p className="font-serif text-xl text-gray-600 leading-relaxed font-light max-w-4xl mx-auto">
          Dans un domaine viticole et oléicole à Salses-le-Château. Offrez-vous une parenthèse de sérénité en séjournant dans nos gîtes au cœur du domaine. Entouré de vignes et baigné par le soleil du Roussillon, notre hébergement vous invite à un séjour authentique et ressourçant, idéal pour les amoureux de la nature et du vin. Que vous soyez en couple, en famille ou entre amis, profitez d’un cadre privilégié pour découvrir les richesses de notre terroir et explorer la région.
        </p>
        <div className="mt-10">
          <Link to="/contact" className="inline-block border border-gray-900 text-gray-900 px-8 py-3 uppercase tracking-widest text-xs font-bold hover:bg-gray-900 hover:text-white transition-colors duration-300">
            Contactez-nous
          </Link>
        </div>
      </div>

      {/* Hero Image */}
      <div className="w-full px-6 lg:px-12 mt-12 mb-24">
        <div className="max-w-7xl mx-auto h-[50vh] md:h-[70vh] relative shadow-2xl overflow-hidden">
          <motion.img 
            style={{ y: heroY }}
            src="./images/luxury_gite.jpg" 
            alt="Intérieur luxueux du gîte" 
            className="w-full h-[130%] object-cover absolute inset-0 -top-[15%]"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          <div className="space-y-12 lg:space-y-24 lg:sticky lg:top-32">
            
            <section className="relative">
              <h2 className="text-sm font-sans uppercase tracking-[0.3em] font-bold text-gray-400 mb-6">Emplacement Privilégié</h2>
              <h3 className="text-3xl font-title text-gray-900 mb-6">Gîtes au cœur des vignes</h3>
              <p className="font-serif text-lg text-gray-700 leading-relaxed font-light mb-6">
                Entre mer et montagne, nos gîtes sont le point de départ pour explorer le Roussillon, tout en profitant d’un cadre unique et reposant.
              </p>
              <a href="tel:+33618340989" className="text-vespeille_red underline uppercase tracking-widest text-xs font-bold hover:text-gray-900 transition-colors">
                Appelez-nous
              </a>
            </section>

            <section className="relative">
              <h2 className="text-sm font-sans uppercase tracking-[0.3em] font-bold text-gray-400 mb-6">Activités & Découvertes</h2>
              <h3 className="text-3xl font-title text-gray-900 mb-6">Une location idéale pour un séjour reposant</h3>
              <p className="font-serif text-lg text-gray-700 leading-relaxed font-light mb-6">
                Envie d’un séjour au calme, loin de l’agitation ? Notre gîte en pleine nature est l’option parfaite pour se détendre et profiter des paysages viticoles dans une atmosphère paisible. Au programme :
              </p>
              <ul className="space-y-4 font-serif text-lg text-gray-800 font-light mb-8">
                <li className="flex items-center gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-vespeille_red"></span>
                  Balades dans les vignes et sentiers environnants
                </li>
                <li className="flex items-center gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-vespeille_red"></span>
                  Dégustation de vins et d’huiles d’olive au caveau
                </li>
                <li className="flex items-center gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-vespeille_red"></span>
                  Apéritifs vignerons et rencontres avec les producteurs pendant nos événements
                </li>
                <li className="flex items-center gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-vespeille_red"></span>
                  Circuits de randonnées à proximité
                </li>
              </ul>
              <Link to="/vins-et-huile-d-olive" className="text-vespeille_red underline uppercase tracking-widest text-xs font-bold hover:text-gray-900 transition-colors">
                Découvrez nos Vins
              </Link>
            </section>

            <section className="relative bg-vespeille_red text-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-title mb-4">Tarifs de location de notre gîte</h3>
              <div className="flex items-end gap-4 mb-6 border-b border-white/30 pb-4">
                <span className="text-5xl font-light">55€</span>
                <span className="font-serif text-lg opacity-90 pb-1">/ par nuit</span>
              </div>
              <p className="font-serif text-lg leading-relaxed font-light mb-6 opacity-90">
                Prévoir des frais de ménage de 10€ par séjour.
              </p>
              <h4 className="text-xl font-title mt-8 mb-2">Envie de passer un week-end au cœur des vignes ?</h4>
              <p className="font-serif text-lg leading-relaxed font-light mb-6 opacity-90">
                Réservez notre gîte pour une escapade pleine de saveurs !
              </p>
              <a href="tel:+33618340989" className="inline-block border border-white text-white px-6 py-2 uppercase tracking-widest text-xs font-bold hover:bg-white hover:text-vespeille_red transition-colors duration-300">
                Appelez-nous pour réserver
              </a>
            </section>

          </div>

          <div className="w-full space-y-12">
             <div className="w-full relative shadow-lg bg-white p-4">
                <img 
                  src="./images/10_Domaine-viticole-salle-de-seminaire-gites-a-Salses-le-Chateau-11.png" 
                  alt="Décoration du Gîte" 
                  className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-500"
                />
              </div>

             <div className="bg-white shadow-lg p-12 text-center mt-12 border border-gray-100">
                <h3 className="text-2xl font-title text-gray-900 mb-6">À venir prochainement : le second gîte du domaine</h3>
                <p className="font-serif text-lg text-gray-600 leading-relaxed font-light mb-8">
                  Face au succès de notre première location, nous avons le plaisir de vous annoncer l’ouverture prochaine d’un second gîte, toujours au cœur du vignoble.
                  <br/><br/>
                  Restez connectés pour en savoir plus sur cette nouveauté...
                </p>
                <Link to="/contact" className="text-vespeille_red underline uppercase tracking-widest text-xs font-bold hover:text-gray-900 transition-colors">
                  En savoir plus sur nos gîtes
                </Link>
             </div>
          </div>

        </div>

      </div>

    </div>
  );
}
