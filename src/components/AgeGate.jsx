import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AgeGate({ onVerify }) {
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà confirmé son âge lors de cette session
    const hasConfirmedAge = sessionStorage.getItem('age_verified');
    if (!hasConfirmedAge) {
      setIsOpen(true);
      // Bloquer le scroll du body quand la modale est ouverte
      document.body.style.overflow = 'hidden';
    } else {
      if(onVerify) onVerify();
    }
  }, [onVerify]);

  const handleConfirm = () => {
    sessionStorage.setItem('age_verified', 'true');
    setIsOpen(false);
    // Réactiver le scroll
    document.body.style.overflow = 'auto';
    if(onVerify) onVerify();
  };

  const handleDeny = () => {
    setError(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#F6EFE2]/80 backdrop-blur-xl px-6"
        >
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="max-w-xl w-full text-center"
          >
            <div className="text-[0.65rem] font-sans tracking-[0.4em] uppercase font-bold text-[#E30613] mb-8">
              Domaine Gardiés
            </div>
            
            <h1 className="text-4xl md:text-5xl font-title text-gray-900 leading-tight mb-6">
              Avez-vous l'âge légal <br/>
              <span className="italic font-light">pour consommer de l'alcool ?</span>
            </h1>
            
            <p className="font-serif text-gray-600 mb-12">
              Pour visiter notre site, vous devez avoir l'âge légal fixé par la loi de votre pays de résidence pour la consommation d'alcool.
            </p>

            {!error ? (
              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <button 
                  onClick={handleConfirm}
                  className="w-full md:w-auto px-10 py-4 rounded-full bg-[#1a1a1a] text-white hover:bg-[#E30613] transition-all duration-300 text-[0.65rem] font-sans tracking-[0.2em] uppercase font-bold"
                >
                  Oui, j'ai l'âge légal
                </button>
                <button 
                  onClick={handleDeny}
                  className="w-full md:w-auto px-10 py-4 rounded-full border border-gray-900 text-gray-900 hover:bg-gray-100 transition-all duration-300 text-[0.65rem] font-sans tracking-[0.2em] uppercase font-bold"
                >
                  Non, je suis mineur
                </button>
              </div>
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-[#E30613] font-sans text-sm tracking-widest uppercase font-bold p-6 border border-[#E30613]/20 bg-[#E30613]/5 rounded-3xl"
              >
                L'accès à ce site est strictement réservé aux personnes majeures.
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
