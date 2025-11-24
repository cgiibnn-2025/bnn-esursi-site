import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { BsEnvelope, BsPhone, BsGeoAlt, BsFacebook, BsTwitter, BsLinkedin, BsYoutube, BsXCircle } from 'react-icons/bs';
import './Footer.css';
import logoBlanc from '../assets/Logoblanc.png';

const Footer = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
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
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Section Logo et Description */}
          <div className="footer-section">
            <div className="footer-logo">
              <img src={logoBlanc} alt="CGIIBNN Logo" height={40} width={110} />
            </div>
            <p className="footer-description">
              {"Cellule de Gestion des Infrastructures Informatiques\nDéveloppement et maintenance de la BNN, au service de l'excellence académique en RDC."}
            </p>
            <div className="footer-social">
              <a href="#facebook" className="social-link"><BsFacebook /></a>
              <a href="#twitter" className="social-link"><BsTwitter /></a>
              <a href="#linkedin" className="social-link"><BsLinkedin /></a>
              <a href="#youtube" className="social-link"><BsYoutube /></a>
            </div>
          </div>

          {/* Liens rapides */}
          <div className="footer-section">
            <h4>Liens Rapides</h4>
            <ul className="footer-links">
              <li><a href="#accueil" onClick={(e) => handleNavClick(e, 'accueil')}>Accueil</a></li>
              <li><a href="#domaines" onClick={(e) => handleNavClick(e, 'domaines')}>Domaines</a></li>
              <li><a href="#statistiques" onClick={(e) => handleNavClick(e, 'statistiques')}>Statistiques</a></li>
              <li><a href="#apropos" onClick={(e) => handleNavClick(e, 'apropos')}>À propos</a></li>
              <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a></li>
            </ul>
          </div>

          {/* Informations légales */}
          <div className="footer-section">
            <h4>Informations</h4>
            <ul className="footer-links">
              <li><Link to="/politique-confidentialite">Politique de confidentialité</Link></li>
              <li><Link to="/conditions-utilisation">Conditions d'utilisation</Link></li>
              <li><Link to="/mentions-legales">Mentions légales</Link></li>
              <li><Link to="/centre-aide">Centre d'aide</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-section">
            <h4>Contact</h4>
            <div className="footer-contact">
              <p>
                <BsEnvelope className="contact-icon" />
                contact@cgiibnn-esursi.cd
              </p>
              <p>
                <BsPhone className="contact-icon" />
                +243 99 980 886
              </p>
              <p>
                <BsGeoAlt className="contact-icon" />
                KINSHASA GOMBE, Av. de l'hopital 
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <p className="footer-copyright">
            © CGIIBNN–ESURSI 2025 — Tous droits réservés.
          </p>
          <p className="footer-credit">
            Ministre de l'Enseignement Supérieur, Universitaire, Recherche Scientifique et Innovations (ESURSI)
          </p>
        </div>
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
    </footer>
  );
};

export default Footer;
