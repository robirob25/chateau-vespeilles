import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Vins from './pages/Vins';
import Seminaires from './pages/Seminaires';
import Gites from './pages/Gites';
import Events from './pages/Events';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="relative w-full min-h-screen bg-white text-gray-900 font-sans">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vins-et-huile-d-olive" element={<Vins />} />
          <Route path="/seminaires" element={<Seminaires />} />
          <Route path="/nos-gites" element={<Gites />} />
          <Route path="/nos-evenements" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <footer className="bg-gray-50 text-gray-900 py-16 px-6 md:px-12 border-t border-gray-200">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            
            <div className="md:col-span-3 flex justify-center md:justify-start">
              <img src="./images/logo_vespeille.png" alt="Chateau Vespeille" className="h-24 md:h-32 w-auto object-contain" />
            </div>

            <div className="md:col-span-6 flex flex-wrap justify-center gap-6 text-[0.65rem] tracking-[0.3em] uppercase font-bold text-gray-600">
              <Link to="/" className="hover:text-vespeille_red transition-colors">Accueil</Link>
              <Link to="/vins-et-huile-d-olive" className="hover:text-vespeille_red transition-colors">Vins & Huiles</Link>
              <Link to="/seminaires" className="hover:text-vespeille_red transition-colors">Séminaires</Link>
              <Link to="/nos-gites" className="hover:text-vespeille_red transition-colors">Gîtes</Link>
              <Link to="/nos-evenements" className="hover:text-vespeille_red transition-colors">Événements</Link>
              <Link to="/contact" className="hover:text-vespeille_red transition-colors">Contact</Link>
            </div>

            <div className="md:col-span-3 text-[0.55rem] tracking-[0.2em] text-gray-500 uppercase text-center md:text-right">
              L'abus d'alcool est dangereux pour la santé.<br/> À consommer avec modération.
            </div>

          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
