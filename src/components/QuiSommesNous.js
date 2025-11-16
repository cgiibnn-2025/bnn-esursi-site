import React from 'react';
import './QuiSommesNous.css';
import aboutImg from '../assets/about.png';

const QuiSommesNous = () => {
  return (
    <section className="qui-sommes-nous">
      <div className="qui-sommes-nous-container">
        <div className="content-wrapper">
          <div className="text-content">
            <h2 className="section-title" style={{color:"white"}}>Qui sommes nous</h2>
            <p className="intro-text">
              La <strong>Bibliothèque Numérique Nationale (BNN)</strong> est une plateforme innovante dédiée à 
              la démocratisation de l'accès au savoir en République Démocratique du Congo. Notre mission est de 
              fournir un accès gratuit et illimité aux ressources académiques et scientifiques pour tous.
            </p>
            <p className="description">
              Nous mettons à disposition des milliers d'ouvrages, articles scientifiques, thèses et documents 
              pédagogiques couvrant tous les domaines du savoir. Notre plateforme s'adresse aux étudiants, 
              enseignants, chercheurs et à toute personne désireuse d'approfondir ses connaissances et de 
              contribuer au développement scientifique et académique du pays.
            </p>

            <div className="stats-mini">
              <div className="stat-item">
                <h4>2022</h4>
                <p>Année de lancement</p>
              </div>
              <div className="stat-item">
                <h4>+100</h4>
                <p>Universités partenaires</p>
              </div>
              <div className="stat-item">
                <h4>24/7</h4>
                <p>Accès disponible</p>
              </div>
            </div>
          </div>

          <div className="image-content">
            <div className="image-wrapper">
              <img src={aboutImg} alt="À propos de la BNN" />
              <div className="image-overlay">
                <p className="overlay-text">Innovation • Accès • Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuiSommesNous;
