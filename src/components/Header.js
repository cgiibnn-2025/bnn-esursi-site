import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { BsBook, BsList, BsX } from 'react-icons/bs';
import './Header.css';
import logo from '../assets/Logobleu.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavClick = (sectionId) => {
    setMenuOpen(false);
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
    </header>
  );
};

export default Header;
