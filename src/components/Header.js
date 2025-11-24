import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { BsBook, BsList, BsX, BsXCircle } from 'react-icons/bs';
import './Header.css';
import logo from '../assets/Logobleu.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavClick = (sectionId) => {
    setMenuOpen(false);
    if (sectionId === 'apropos') {
      setModalOpen(true);
      return;
    }
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="header-logo">
          <img src={logo} height={50} width={120} alt="Logo" />
        </Link>

        <nav className={`header-nav ${menuOpen ? 'active' : ''}`}>
          <a href="#accueil" onClick={() => handleNavClick('accueil')}>Accueil</a>
          <a href="#domaines" onClick={() => handleNavClick('domaines')}>Domaines</a>
          <a href="#statistiques" onClick={() => handleNavClick('statistiques')}>Statistiques</a>
          <a href="#apropos" onClick={() => handleNavClick('apropos')}>À propos</a>
          <a href="#contact" onClick={() => handleNavClick('contact')}>Contact</a>
        </nav>

        <div className="header-actions">
          <a href="https://bnn.cgiibnn-esursi.cd/" target="_blank" rel="noopener noreferrer" className="btn-login">Se connecter</a>
          <a href="https://bnn.cgiibnn-esursi.cd/" target="_blank" rel="noopener noreferrer" className="btn-signup">S'inscrire</a>
        </div>

        <button className="menu-toggle" onClick={toggleMenu}>
          {menuOpen ? <BsX /> : <BsList />}
        </button>
      </div>

      {modalOpen && (
        <div className="modal-overlay" onClick={() => setModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setModalOpen(false)}>
              <BsXCircle />
            </button>
            <h2>À propos de la CGIIBNN-MINESURSI</h2>
            <div className="modal-body">
              <p>
                La <strong>Cellule de Gestion des Infrastructures Informatiques et de la Bibliothèque Numérique Nationale</strong> est une structure du Ministère de l'Enseignement Supérieur et Universitaire chargée de développer, gérer et sécuriser les outils numériques utilisés dans les établissements de l'ESU.
              </p>
              <p>
                Elle met en place les plateformes et réseaux informatiques, assure leur bon fonctionnement et veille à offrir aux étudiants, enseignants et chercheurs un accès facile aux ressources numériques.
                À travers la Bibliothèque Numérique Nationale, elle facilite la consultation des documents académiques et scientifiques en ligne.
              </p>
              <p>
                Son objectif est de moderniser le système éducatif congolais grâce à des solutions technologiques fiables, accessibles et adaptées aux besoins de la communauté universitaire.
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
