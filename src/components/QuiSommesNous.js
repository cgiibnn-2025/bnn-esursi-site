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
              La <strong>Cellule de Gestion des Infrastructures Informatiques et de la Bibliothèque Numérique Nationale 
              du Ministère de l'Enseignement Supérieur, Universitaire, Recherche Scientifique et Innovation (CGIIBNN-MINESURSI)</strong> 
              est une structure spécialisée dédiée à la gestion des infrastructures technologiques et à la démocratisation 
              de l'accès au savoir en République Démocratique du Congo.
            </p>
            <p className="description">
              Notre mission est de fournir un accès gratuit et illimité aux ressources académiques et scientifiques pour tous. 
              Nous mettons à disposition des milliers d'ouvrages, articles scientifiques, thèses et documents pédagogiques 
              couvrant tous les domaines du savoir. Notre plateforme s'adresse aux étudiants, enseignants, chercheurs et à 
              toute personne désireuse d'approfondir ses connaissances et de contribuer au développement scientifique et 
              académique du pays.
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
