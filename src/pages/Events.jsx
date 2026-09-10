import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Events() {
  const { scrollY } = useScroll();
  const galleryY = useTransform(scrollY, [0, 2000], [0, -100]);

  const images = [
    "/images/10_Domaine-viticole-salle-de-seminaire-gites-a-Salses-le-Chateau-11.png",
    "/images/12_vins_20et_20huiles_20d_olives.jpg",
    "/images/gallery_new_4.jpg"
  ];

  return (
    <div className="min-h-screen bg-texture text-gray-900 pb-24">
      
      {/* Header */}
      <div className="pt-32 pb-16 lg:pt-48 lg:pb-24 px-6 lg:px-12 text-center border-b border-gray-200">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-title text-gray-900 leading-tight mb-8">
          Événements et <span className="italic font-light text-vespeille_red">Activités</span>
        </h1>
        <p className="font-serif text-xl text-gray-600 leading-relaxed font-light max-w-4xl mx-auto">
          Dans un domaine viticole et oléicole près de Rivesaltes. Plongez dans l’ambiance conviviale du domaine avec nos apéros vignerons, balades œnotouristiques et animations festives. Entre dégustations, concerts et découvertes, chaque événement est une invitation à partager notre passion du vin dans un cadre authentique et chaleureux.
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
              <h2 className="text-sm font-sans uppercase tracking-[0.3em] font-bold text-gray-400 mb-6">Partage & Découvertes</h2>
              <h3 className="text-3xl font-title text-gray-900 mb-6">Des événements inoubliables au domaine</h3>
              <p className="font-serif text-lg text-gray-700 leading-relaxed font-light mb-6">
                En plus de l’organisation de vos réunions professionnelles et séminaires, notre domaine viticole vous propose des moments autour de dégustations thématiques et rencontres vigneronnes. Profitez d’un cadre exceptionnel pour des instants de partage et de plaisir, mêlant gastronomie, terroir et festivités.
              </p>
              <Link to="/seminaires" className="text-vespeille_red underline uppercase tracking-widest text-xs font-bold hover:text-gray-900 transition-colors">
                Réservez notre salle de réception
              </Link>
            </section>

            <section className="relative">
              <h2 className="text-sm font-sans uppercase tracking-[0.3em] font-bold text-gray-400 mb-6">Gourmandise & Vin</h2>
              <h3 className="text-3xl font-title text-gray-900 mb-6">L’apéro vigneron : l’événement convivial par excellence</h3>
              <p className="font-serif text-lg text-gray-700 leading-relaxed font-light mb-6">
                Venez partager un moment de convivialité et de gourmandise lors de notre apéritif vigneron ! Dans une ambiance chaleureuse et détendue, dégustez nos vins du domaine accompagnés de produits du terroir soigneusement sélectionnés. Au programme :
              </p>
              <ul className="space-y-4 font-serif text-lg text-gray-800 font-light mb-8">
                <li className="flex items-center gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-vespeille_red"></span>
                  Dégustation commentée de nos cuvées
                </li>
                <li className="flex items-center gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-vespeille_red"></span>
                  Planche de charcuterie et fromages locaux
                </li>
                <li className="flex items-center gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-vespeille_red"></span>
                  Échange avec les vignerons sur le métier
                </li>
              </ul>
              <p className="font-serif text-lg text-gray-700 leading-relaxed font-light mb-6">
                Un moment authentique, parfait pour une soirée entre amis ou en famille !
              </p>
              <Link to="/contact" className="text-vespeille_red underline uppercase tracking-widest text-xs font-bold hover:text-gray-900 transition-colors">
                Réservez votre moment
              </Link>
            </section>
            
            <section className="relative">
              <h2 className="text-sm font-sans uppercase tracking-[0.3em] font-bold text-gray-400 mb-6">Immersion</h2>
              <h3 className="text-3xl font-title text-gray-900 mb-6">La balade vigneronne : ressourcez-vous au cœur des vignes</h3>
              <p className="font-serif text-lg text-gray-700 leading-relaxed font-light mb-6">
                Prenez le temps d’explorer notre domaine viticole à travers une balade immersive au cœur des vignes. En visite libre ou accompagnée, découvrez le travail de la vigne au fil des saisons et les secrets de notre terroir. Nos formules de balades :
              </p>
              <ul className="space-y-4 font-serif text-lg text-gray-800 font-light mb-8">
                <li className="flex items-center gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-vespeille_red"></span>
                  Visite libre
                </li>
                <li className="flex items-center gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-vespeille_red"></span>
                  Balade accompagnée avec un vigneron
                </li>
                <li className="flex items-center gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-vespeille_red"></span>
                  Circuits de randonnées sur demande
                </li>
              </ul>
              <p className="font-serif text-lg text-vespeille_red italic leading-relaxed mb-6">
                Clôturez votre balade par une dégustation de nos vins au caveau !
              </p>
            </section>
            
            <section className="relative">
              <h2 className="text-sm font-sans uppercase tracking-[0.3em] font-bold text-gray-400 mb-6">Ambiance Estivale</h2>
              <h3 className="text-3xl font-title text-gray-900 mb-6">Vespeille Plage : le concept pieds dans le sable au domaine</h3>
              <p className="font-serif text-lg text-gray-700 leading-relaxed font-light mb-6">
                Un esprit bord de mer en plein vignoble, ça vous tente ? Avec Vespeille Plage, profitez d’une expérience unique et estivale, où vous pourrez déguster nos vins les pieds dans le sable, dans une ambiance lounge et décontractée. Ce qui vous attend :
              </p>
              <ul className="space-y-4 font-serif text-lg text-gray-800 font-light mb-8">
                <li className="flex items-center gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-vespeille_red"></span>
                  Espace aménagé façon plage en plein vignoble
                </li>
                <li className="flex items-center gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-vespeille_red"></span>
                  Dégustation de vins et cocktails maison
                </li>
                <li className="flex items-center gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-vespeille_red"></span>
                  Concerts live et soirées thématiques
                </li>
                <li className="flex items-center gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-vespeille_red"></span>
                  Transats et coin détente
                </li>
              </ul>
              <p className="font-serif text-lg text-gray-700 leading-relaxed font-light font-bold mb-6">
                Venez vivre un moment festif et hors du temps, entre vignes et musique.
                <br />
                <span className="text-vespeille_red font-normal italic">À partir de 10€ par personne</span>
              </p>
            </section>
            
            <section className="relative">
              <h2 className="text-sm font-sans uppercase tracking-[0.3em] font-bold text-gray-400 mb-6">Culture & Art</h2>
              <h3 className="text-3xl font-title text-gray-900 mb-6">Animations et spectacles : le divertissement au pied des ceps</h3>
              <p className="font-serif text-lg text-gray-700 leading-relaxed font-light mb-6">
                Parce que le vin rime avec partage et festivités, nous organisons tout au long de l’année des événements culturels et artistiques au cœur du domaine. Nos animations et spectacles :
              </p>
              <ul className="space-y-4 font-serif text-lg text-gray-800 font-light mb-8">
                <li className="flex items-center gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-vespeille_red"></span>
                  Concerts live et soirées musicales sous les étoiles
                </li>
                <li className="flex items-center gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-vespeille_red"></span>
                  Théâtre et spectacles vivants dans un cadre naturel
                </li>
                <li className="flex items-center gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-vespeille_red"></span>
                  Ateliers œnologiques et dégustations à thème
                </li>
                <li className="flex items-center gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-vespeille_red"></span>
                  Marchés de producteurs et événements gastronomiques
                </li>
              </ul>
              <p className="font-serif text-lg text-gray-700 leading-relaxed font-light mb-6">
                Un programme varié pour petits et grands, mêlant plaisir du vin et découverte artistique !
              </p>
              <Link to="/contact" className="text-vespeille_red underline uppercase tracking-widest text-xs font-bold hover:text-gray-900 transition-colors">
                Réservez vos évènements
              </Link>
            </section>

            <section className="relative bg-vespeille_red text-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-title mb-4">En savoir plus sur nos événements au domaine</h3>
              <p className="font-serif text-lg leading-relaxed font-light mb-6 opacity-90">
                Pour réserver, en savoir plus ou tout simplement découvrir notre programme événementiel au domaine près de Rivesaltes, contactez-nous !
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
                  alt={`Événement au Château Vespeille - ${index + 1}`} 
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
