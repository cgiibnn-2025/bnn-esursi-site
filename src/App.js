import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import QuiSommesNous from './components/QuiSommesNous';
import Domaines from './components/Domaines';
import Partenaires from './components/Partenaires';
import Statistiques from './components/Statistiques';
import Footer from './components/Footer';
import PolitiqueConfidentialite from './pages/PolitiqueConfidentialite';
import ConditionsUtilisation from './pages/ConditionsUtilisation';
import MentionsLegales from './pages/MentionsLegales';
import CentreAide from './pages/CentreAide';
import Portail from './pages/Portail';

function HomePage() {
  return (
    <>
      <section id="accueil">
        <Hero />
      </section>
      <section id="qui-sommes-nous">
        <QuiSommesNous />
      </section>
      <section id="domaines">
        <Domaines />
      </section>
      <section id="apropos">
        <Partenaires />
      </section>
      <section id="statistiques">
        <Statistiques />
      </section>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portail" element={<Portail />} />
          <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
          <Route path="/conditions-utilisation" element={<ConditionsUtilisation />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/centre-aide" element={<CentreAide />} />
        </Routes>
        <section id="contact">
          <Footer />
        </section>
      </div>
    </Router>
  );
}

export default App;
