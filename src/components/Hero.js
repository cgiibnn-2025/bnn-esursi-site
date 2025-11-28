import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
import desktopImg from '../assets/desktop.png';
import tabletImg from '../assets/tablet.png';
import phoneImg from '../assets/phone.png';

const Hero = () => {
  const [currentDevice, setCurrentDevice] = useState(0);
  
  const devices = [
    { img: desktopImg, alt: 'Desktop', name: 'Desktop' },
    { img: tabletImg, alt: 'Tablette', name: 'Tablette' },
    { img: phoneImg, alt: 'Mobile', name: 'Mobile' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDevice((prev) => (prev + 1) % devices.length);
    }, 3000); // Change toutes les 3 secondes

    return () => clearInterval(interval);
  }, [devices.length]);

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">CGIIBNN - Cellule de Gestion des Infrastructures Informatiques</h1>
          <p className="hero-description">
            La CGIIBNN (Cellule de Gestion des Infrastructures Informatiques) est l'entité responsable 
            du développement et de la maintenance de la Bibliothèque Nationale Numérique (BNN). 
            Nous assurons un accès libre et numérique aux ressources académiques, scientifiques 
            et culturelles de la République Démocratique du Congo.
          </p>
          <p className="hero-slogan">
            "Innovation technologique au service de l'enseignement supérieur et de la recherche."
          </p>
          
          <div className="hero-actions">
            <Link to="/portail" className="btn btn-primary">Portail</Link>
            <a href="https://bnn.cgiibnn-esursi.cd/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Se connecter</a>
          </div>

          <div className="app-downloads">
            <h3>Téléchargez notre application</h3>
            <div className="download-buttons">
              <a href="https://play.google.com/" target="_blank" rel="noopener noreferrer" className="download-btn playstore">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" />
              </a>
              <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer" className="download-btn appstore">
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" />
              </a>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="devices-carousel">
            <div className="carousel-container">
              {devices.map((device, index) => (
                <div
                  key={index}
                  className={`carousel-slide ${index === currentDevice ? 'active' : ''}`}
                >
                  <img src={device.img} alt={device.alt} />
                  <p className="device-name">{device.name}</p>
                </div>
              ))}
            </div>
            
            {/* Indicateurs */}
            <div className="carousel-indicators">
              {devices.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${index === currentDevice ? 'active' : ''}`}
                  onClick={() => setCurrentDevice(index)}
                  aria-label={`Voir ${devices[index].name}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
