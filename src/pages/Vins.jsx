import { useState, useRef } from 'react';

export default function Vins() {
  const wines = [
    {
      id: 1,
      name: "La vie en Rosé",
      type: "Rosé",
      appellation: "I.G.P Côtes Catalanes",
      millesime: "2024",
      degre: "12.5°",
      terroir: "Parcelles situées sur le domaine, sur des sols argilo-calcaire sur la commune de Salses le Château. Exposition plein Est ou Sud.",
      cepages: "100% Grenache noir",
      rendements: "Autour de 15 hl/ha.",
      vinification: "Récolte Manuelle tôt le matin, pressurage direct fin de presse du Blanc de noir.",
      elevage: "Sur lies fines en cuve à chapeau flottant en fibre pendant environ 3 mois.",
      degustation: "Un nez fruité tirant sur la grenadine. En bouche, une bonne fraicheur soutenue par une bonne acidité.",
      accords: "A déguster à température comprise entre 8 et 10°C, en apéritif avec un plateau de charcuterie, vos salades vertes ou composées. Pour accompagner vos grillades mais aussi pour vous rafraichir durant une partie de pétanque.",
      image: "/images/wine_rose.png",
      imageStyle: "scale-[1.8] translate-y-12 object-contain mix-blend-multiply contrast-125 brightness-110",
      ambiance_images: [
        "/images/rose_ambiance_1.jpg",
        "/images/rose_ambiance_2.jpg"
      ],
      color: "text-rose-500",
      theme: "bg-rose-50"
    },
    {
      id: 2,
      name: "L'œuvre d'Art",
      type: "Blanc Moelleux",
      appellation: "I.G.P Côtes Catalanes",
      millesime: "2023",
      degre: "12.5°",
      terroir: "Parcelles situées sur le domaine, sur des sols argilo-calcaire sur la commune de Salses le Château. Exposition plein Est ou Sud.",
      cepages: "Muscat petit grain, Muscat d'Alexandrie, malvoisie & macabeu.",
      rendements: "Autour de 8 hl/ha.",
      vinification: "Récolte Manuelle tôt le matin, pressurage direct doux et filtration stérile pour ne garder que 25 à 26 gr de sucres résiduels par litre de vin.",
      elevage: "Sur lies fines en cuve à chapeau flottant en fibre pendant environ 6 mois.",
      degustation: "Un nez fruité, exotique et agréable. En bouche, une finesse aromatique et un bouquet de fraîcheur suivie d'une légère sucrosité brève laissant place à une finale acidulée.",
      accords: "A déguster à température comprise entre 8 et 10°C, en apéritif pour accompagner un plateau de charcuterie, des toast au frais gras, une volaille avec une sauce aux girolles mais aussi une belle assiette de fromage et pour finir sur un dessert tel que des crepes, croquants, rousquilles et des délices chocolatés. Ce vin est le bijoux le plus polyvalent de notre gamme.",
      image: "/images/wine_art.png",
      imageStyle: "scale-[2.5] object-contain mix-blend-multiply",
      ambiance_images: [
        "/images/white_ambiance_1.jpg",
        "/images/raisins_terroir.jpg"
      ],
      color: "text-amber-500",
      theme: "bg-amber-50"
    },
    {
      id: 3,
      name: "Le Gentleman",
      type: "Rouge",
      appellation: "A.O.C Côtes du Roussillon",
      millesime: "2023",
      degre: "14°",
      terroir: "Parcelles situées sur le domaine, sur des sols argilo-calcaire sur la commune de Salses le Château. Exposition plein Est ou Sud.",
      cepages: "60% Syrah, 40% Grenache Noir",
      rendements: "Autour de 15 hl/ha.",
      vinification: "Récolte Manuelle tôt le matin. Macération pelliculaire de 8 jours, décuvage, pressurage et assemblage des jus (coules et presses).",
      elevage: "Sur lies fines en cuve à chapeau flottant en fibre pendant environ 8 mois.",
      degustation: "Un nez fruité et intense. En bouche, aromes de fruits noirs bien mûrs accompagné de tanins soyeux. Un assemblage optimal entre le caractère de la syrah et la douceur du grenache noir mur à souhait.",
      accords: "A déguster à température comprise entre 15 et 18°C, pour accompagner un plateau de charcuterie, a partager autour d'une grillade ou avec un poulet roti et ses petites patates. Vin traditionnel du Roussillon.",
      image: "/images/wine_gentleman.png",
      imageStyle: "scale-[1.15] object-contain mix-blend-multiply",
      ambiance_images: [
        "/images/red_ambiance_1.jpg",
        "/images/red_ambiance_2.jpg"
      ],
      color: "text-red-900",
      theme: "bg-red-50"
    },
    {
      id: 4,
      name: "Muscat de Rivesaltes",
      type: "Vin Doux Naturel",
      appellation: "A.O.C Muscat de Rivesaltes",
      millesime: "2021",
      degre: "16°",
      terroir: "Parcelles situées sur le domaine, sur des sols argilo-calcaire sur la commune de Salses le Château. Exposition plein Est ou Sud.",
      cepages: "Muscat petit grain, Muscat d'Alexandrie.",
      rendements: "Autour de 15 hl/ha.",
      vinification: "Pressurage direct doux et muté à 8% à l'alcool vinique pour stopper la fermentation et conserver 100gr de sucres par litre de vin obligatoire pour l'obtention de l'appélation \"Muscat de Rivesaltes\".",
      elevage: "Sur lies fines en cuve à chapeau flottant pendant 3 mois.",
      degustation: "Le secret pour des Muscajitos exceptionnels.",
      accords: "A déguster à température comprise entre 8 et 10°C, en apéritif ou dessert avec un gateau au chocolat, un sorbet a l'abricot.",
      image: "/images/wine_muscat.png",
      imageStyle: "scale-[2.5] object-contain mix-blend-multiply",
      ambiance_images: [
        "/images/sweet_ambiance_1.jpg",
        "/images/luxury_wine.jpg"
      ],
      color: "text-amber-600",
      theme: "bg-amber-100"
    },
    {
      id: 5,
      name: "Cuvée Prestige Denis Pigouche",
      type: "Vin Doux Naturel",
      appellation: "A.O.C Rivesaltes",
      millesime: "1996",
      degre: "16.5°",
      terroir: "Parcelles situées sur le domaine, sur des sols argilo-calcaire sur la commune de Salses le Château. Exposition plein Est ou Sud.",
      cepages: "100% Malvoisie",
      rendements: "Autour de 5 hl/ha.",
      vinification: "Pressurage direct et muté à 8%",
      elevage: "Sur lies fines en cuve inox en milieu oxydatif pendant 26 ans.",
      degustation: "Un nez aux aromes de noix. En bouche la noix se confirme ainsi que des notes ranciotées et de figues.",
      accords: "A déguster à température comprise entre 15 et 18°C, en apéritif ou digestif mais là où la cuvée Prestige fait des merveilles cela reste en dessert avec un gateau de crêpes, une glace rhum raisin ou des canelés avec ou sans coque au chocolat noir. Ce vin reste un bijoux rare issu d'un savoir faire unique.",
      image: "/images/wine_prestige.png",
      imageStyle: "scale-[1.25] object-contain mix-blend-multiply",
      ambiance_images: [
        "/images/prestige_ambiance_1.jpg",
        "/images/prestige_ambiance_2.jpg"
      ],
      color: "text-amber-800",
      theme: "bg-amber-50"
    },
    {
      id: 6,
      name: "Cuvée Blanc de Noir",
      type: "Blanc",
      appellation: "I.G.P Côtes Catalanes",
      millesime: "2024",
      degre: "13°",
      terroir: "Parcelles situées sur le domaine, sur des sols argilo-calcaire sur la commune de Salses le Château.",
      cepages: "Grenache Noir (Vinifié en blanc)",
      rendements: "Autour de 40 hl/ha.",
      vinification: "Pressurage direct, débourbage à froid.",
      elevage: "En cuve inox.",
      degustation: "Doux et sec, ce blanc jeune a beaucoup de caractère.",
      accords: "Se marie à merveille avec du poisson, ou en apéritif.",
      image: "/images/wine_blanc.png",
      imageStyle: "scale-[2.5] object-contain mix-blend-multiply",
      ambiance_images: [
        "/images/gallery_new_3.jpg",
        "/images/vignes_falaise.jpg"
      ],
      color: "text-gray-400",
      theme: "bg-gray-100"
    },
    {
      id: 7,
      name: "Cuvée Théo",
      type: "Rouge",
      appellation: "A.O.C Côtes du Roussillon",
      millesime: "2023",
      degre: "13.5°",
      terroir: "Parcelles situées sur le domaine, sur des sols argilo-calcaire sur la commune de Salses le Château.",
      cepages: "Syrah, Grenache",
      rendements: "Autour de 35 hl/ha.",
      vinification: "Méthode traditionnelle.",
      elevage: "En cuve.",
      degustation: "Long en bouche et terminant sa course aux saveurs avec un subtil parfum de vanille.",
      accords: "Idéal pour tout type de repas, avec une préférence tout de même pour les fromages de caractères.",
      image: "/images/wine_theo.png",
      imageStyle: "scale-[1.15] object-contain mix-blend-multiply",
      ambiance_images: [
        "/images/gallery_new_1.jpg",
        "/images/gallery_new_2.jpg"
      ],
      color: "text-red-900",
      theme: "bg-red-50"
    },
    {
      id: 8,
      name: "Huile d'Olive",
      type: "Vierge Extra",
      appellation: "Huile d'olive du Roussillon",
      millesime: "2024",
      degre: "-",
      terroir: "Oliveraie centenaire située sur le domaine.",
      cepages: "Olives locales",
      rendements: "Extraction douce",
      vinification: "Première pression à froid, sans traitement chimique.",
      elevage: "En cuve inox pour préserver la fraîcheur.",
      degustation: "Une huile d'exception aux arômes d'herbe fraîche et d'artichaut.",
      accords: "Une tranche de pain, un filet d'huile d'olive et un peu de fleur de sel. Idéale pour sublimer vos salades et poissons.",
      image: "/images/huile_olive.png",
      imageStyle: "scale-[1.8] translate-y-12 object-contain mix-blend-multiply contrast-125 brightness-110",
      ambiance_images: [
        "/images/olive_oil_1.jpg",
        "/images/olive_oil_2.jpg"
      ],
      color: "text-green-700",
      theme: "bg-green-50"
    }
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const activeWine = wines[selectedIndex];
  const animationKey = `${activeWine.id}-${Date.now()}`;
  const collectionRef = useRef(null);

  return (
    <div className="min-h-screen bg-white text-gray-900 pb-24">
      {/* Header */}
      <div className="pt-32 pb-12 px-6 lg:px-12 text-center border-b border-gray-200 flex flex-col items-center">
        <p className="text-[0.65rem] uppercase tracking-[0.3em] font-bold text-gray-400 mb-4">Notre Caveau</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-title text-gray-900 leading-tight mb-6">
          Les <span className="italic font-light text-vespeille_red">Cuvées</span>
        </h1>
        <img src="/images/logo_vespeille.png" alt="Château Vespeille les Pins Logo" className="w-48 md:w-56 h-auto object-contain mt-4 animate-[spin_20s_linear_infinite] origin-[48%_59%]" />
      </div>

      <div ref={collectionRef} className="max-w-[1600px] mx-auto px-6 lg:px-12 mt-12">
        <div className="flex flex-col lg:flex-row gap-12 xl:gap-24">
          
          {/* Vertical Menu (Sidebar) */}
          <div className="w-full lg:w-1/4 xl:w-1/5">
            <div className="sticky top-32">
              <h3 className="text-[0.65rem] font-sans uppercase tracking-[0.3em] text-gray-400 font-bold mb-8 border-b border-gray-200 pb-4">
                La Collection
              </h3>
              <ul className="space-y-3">
                {wines.map((wine, idx) => (
                  <li key={wine.id}>
                    <button 
                      onClick={() => {
                        setSelectedIndex(idx);
                        if (collectionRef.current) {
                          const y = collectionRef.current.getBoundingClientRect().top + window.scrollY - 100;
                          window.scrollTo({ top: y, behavior: 'smooth' });
                        }
                      }}
                      className={`text-left w-full transition-all duration-300 font-title text-xl py-2 flex items-center justify-between group ${
                        idx === selectedIndex 
                          ? 'text-gray-900 border-l-2 border-vespeille_red pl-6 font-bold bg-white/50 rounded-r-md shadow-sm' 
                          : 'text-gray-400 hover:text-gray-900 hover:pl-2'
                      }`}
                    >
                      <span>{wine.name}</span>
                      {idx === selectedIndex && <span className="w-2 h-2 rounded-full bg-vespeille_red mr-4"></span>}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Master Detail: Bottle + Bento */}
          <div className="w-full lg:w-3/4 xl:w-4/5 flex flex-col xl:flex-row gap-12" key={animationKey}>
            
            {/* Image Presentation (Packshot + Ambiance) */}
            <div className="w-full xl:w-1/2 flex justify-center animate-[fade-in-up_0.6s_ease-out]">
              <div className="flex flex-col sm:flex-row gap-4 w-full h-full max-h-[700px]">
                <div className={`w-full sm:w-1/2 rounded-md flex items-center justify-center p-2 sm:p-4 overflow-hidden ${activeWine.theme}`}>
                  <img 
                    src={activeWine.image} 
                    alt={activeWine.name} 
                    className="w-full h-[600px] object-contain mix-blend-multiply drop-shadow-2xl py-8 transition-opacity duration-500"
                  />
                </div>
                <div className="w-full sm:w-1/2 flex flex-col gap-4">
                  <div className="h-[240px] sm:h-1/2 rounded-md overflow-hidden bg-gray-100">
                    <img src={activeWine.ambiance_images[0]} className="w-full h-full object-cover" alt="Ambiance 1" />
                  </div>
                  <div className="h-[240px] sm:h-1/2 rounded-md overflow-hidden bg-gray-100">
                    <img src={activeWine.ambiance_images[1]} className="w-full h-full object-cover" alt="Ambiance 2" />
                  </div>
                </div>
              </div>
            </div>

            {/* Bento Grid */}
            <div className="w-full xl:w-1/2 flex flex-col animate-[fade-in-up_0.8s_ease-out]">
              
              <div className="mb-10 flex justify-between items-end">
                <div>
                  <p className={`text-[0.65rem] uppercase tracking-[0.3em] font-bold mb-3 ${activeWine.color}`}>
                    {activeWine.type} — {activeWine.millesime}
                  </p>
                  <h2 className="text-4xl lg:text-5xl font-title text-gray-900">{activeWine.name}</h2>
                </div>
              </div>

              {/* Bento Layout Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-min">
                
                {/* Dégustation (Large Block) */}
                <div className="md:col-span-2 bg-white border border-gray-100 p-8 shadow-sm hover:shadow-md transition-shadow rounded-sm group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 group-hover:bg-vespeille_red/5 transition-colors duration-700"></div>
                  <h4 className="text-[0.65rem] font-sans uppercase tracking-[0.3em] text-gray-400 font-bold mb-6">Dégustation</h4>
                  <p className="font-serif text-gray-800 leading-relaxed text-lg lg:text-xl">{activeWine.degustation}</p>
                </div>

                {/* Accords (Square Block) */}
                <div className="bg-gray-900 text-white p-8 shadow-sm hover:shadow-md transition-shadow rounded-sm relative overflow-hidden">
                  <h4 className="text-[0.65rem] font-sans uppercase tracking-[0.3em] text-white/50 font-bold mb-4">Accords</h4>
                  <p className="font-serif text-white/90 leading-relaxed text-sm">{activeWine.accords}</p>
                </div>

                {/* Appellation */}
                <div className="bg-white border border-gray-100 p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-center rounded-sm">
                  <h4 className="text-[0.65rem] font-sans uppercase tracking-[0.3em] text-gray-400 font-bold mb-3">Appellation</h4>
                  <p className="font-title text-xl text-gray-900 mb-1">{activeWine.appellation}</p>
                  <p className="font-serif text-sm text-gray-500">Degré: {activeWine.degre}</p>
                </div>
                
                {/* Terroir & Rendements (Wide Block) */}
                <div className="md:col-span-2 bg-white border border-gray-100 p-8 shadow-sm hover:shadow-md transition-shadow rounded-sm">
                  <h4 className="text-[0.65rem] font-sans uppercase tracking-[0.3em] text-gray-400 font-bold mb-4">Terroir & Origine</h4>
                  <p className="font-serif text-gray-800 leading-relaxed text-base">{activeWine.terroir}</p>
                  <div className="mt-4 inline-block bg-gray-50 px-4 py-2 border border-gray-100 rounded-sm">
                    <span className="font-bold text-gray-900 text-xs">Rendements : </span>
                    <span className="font-serif text-gray-600 text-sm">{activeWine.rendements}</span>
                  </div>
                </div>

                {/* Cépages */}
                <div className="bg-white border border-gray-100 p-8 shadow-sm hover:shadow-md transition-shadow rounded-sm">
                  <h4 className="text-[0.65rem] font-sans uppercase tracking-[0.3em] text-gray-400 font-bold mb-3">Cépages</h4>
                  <p className="font-serif text-gray-800 leading-relaxed text-sm">{activeWine.cepages}</p>
                </div>

                {/* Vinification & Elevage */}
                <div className="bg-white border border-gray-100 p-8 shadow-sm hover:shadow-md transition-shadow rounded-sm">
                  <h4 className="text-[0.65rem] font-sans uppercase tracking-[0.3em] text-gray-400 font-bold mb-6">Cave</h4>
                  <div className="space-y-6">
                    <div>
                      <span className="block font-bold text-gray-900 text-[0.65rem] uppercase tracking-wider mb-2">Vinification</span>
                      <p className="font-serif text-sm text-gray-600">{activeWine.vinification}</p>
                    </div>
                    <div>
                      <span className="block font-bold text-gray-900 text-[0.65rem] uppercase tracking-wider mb-2">Élevage</span>
                      <p className="font-serif text-sm text-gray-600">{activeWine.elevage}</p>
                    </div>
                  </div>
                </div>
                
                <div className="md:col-span-2 mt-4">
                  <button className="text-[0.65rem] uppercase tracking-[0.2em] font-bold text-gray-900 relative inline-block border-b border-gray-900 pb-1 hover:text-vespeille_red hover:border-vespeille_red transition-colors w-max">
                    Commander cette cuvée
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
