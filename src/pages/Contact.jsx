export default function Contact() {
  return (
    <div className="min-h-screen bg-white text-gray-900 pb-24">
      
      <div className="pt-32 pb-16 px-6 lg:px-12 text-center">
        <h1 className="text-5xl lg:text-7xl font-title text-gray-900 leading-tight mb-8">
          Contactez <span className="italic font-light text-vespeille_red">le Domaine</span>
        </h1>
        <p className="font-serif text-xl text-gray-600 leading-relaxed font-light max-w-2xl mx-auto">
          Pour toute demande de réservation, d'événement ou de dégustation.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          
          {/* Minimalist Info */}
          <div className="space-y-16 lg:pr-12">
            
            <section className="space-y-4">
              <h2 className="text-sm font-sans uppercase tracking-[0.3em] font-bold text-gray-400 border-b border-gray-200 pb-4 mb-6">Coordonnées</h2>
              <div className="font-serif text-lg text-gray-700 leading-relaxed space-y-6 font-light">
                <p>
                  <strong className="text-gray-900 block font-normal mb-1">Adresse</strong>
                  Domaine de Vespeille, Mas Vespeille, <br/>66600 Salses-le-Château, France
                </p>
                <p>
                  <strong className="text-gray-900 block font-normal mb-1">Téléphone</strong>
                  +33 6 18 34 09 89 <br/> +33 6 15 24 47 85
                </p>
                <p>
                  <strong className="text-gray-900 block font-normal mb-1">En Ligne</strong>
                  <a href="https://www.chateau-vespeillelespins.fr/" target="_blank" rel="noreferrer" className="hover:text-vespeille_red transition-colors">
                    www.chateau-vespeillelespins.fr
                  </a>
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-sm font-sans uppercase tracking-[0.3em] font-bold text-gray-400 border-b border-gray-200 pb-4 mb-6">Horaires d'accueil</h2>
              <div className="font-serif text-lg text-gray-700 leading-relaxed space-y-4 font-light">
                <div className="flex justify-between items-end border-b border-gray-100 pb-2">
                  <span className="text-gray-900">Lundi – Samedi</span>
                  <span className="text-right">09h00 – 12h30 <br/> 15h00 – 18h30</span>
                </div>
                <div className="flex justify-between items-end border-b border-gray-100 pb-2">
                  <span className="text-gray-900">Dimanche</span>
                  <span className="text-right">09h00 – 12h30</span>
                </div>
              </div>
            </section>

          </div>

          {/* Minimalist Form */}
          <div className="w-full bg-texture p-12">
            <h3 className="text-2xl font-title text-gray-900 mb-10">Laissez-nous un message</h3>
            <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-[0.65rem] uppercase tracking-[0.2em] font-bold text-gray-500">Nom complet</label>
                <input type="text" id="name" className="bg-transparent border-b border-gray-300 px-0 py-2 focus:outline-none focus:border-vespeille_red font-serif transition-colors" />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-[0.65rem] uppercase tracking-[0.2em] font-bold text-gray-500">Email</label>
                <input type="email" id="email" className="bg-transparent border-b border-gray-300 px-0 py-2 focus:outline-none focus:border-vespeille_red font-serif transition-colors" />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-[0.65rem] uppercase tracking-[0.2em] font-bold text-gray-500">Votre demande</label>
                <textarea id="message" rows="5" className="bg-transparent border-b border-gray-300 px-0 py-2 focus:outline-none focus:border-vespeille_red font-serif resize-none transition-colors"></textarea>
              </div>

              <button type="submit" className="mt-8 bg-gray-900 text-white px-10 py-5 uppercase tracking-[0.2em] text-[0.65rem] font-bold hover:bg-vespeille_red transition-colors self-start">
                Envoyer
              </button>
            </form>
          </div>

        </div>

      </div>

    </div>
  );
}
