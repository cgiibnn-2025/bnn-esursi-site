import React from 'react';
import './Partenaires.css';
import esuLogo from '../assets/parteners/esu.png';
import airtelLogo from '../assets/parteners/airtel.png';
import aufLogo from '../assets/parteners/auf.png';
import cedesurkLogo from '../assets/parteners/cedesurk.png';

const Partenaires = () => {
  const partenaires = [
    {
      nom: "Ministère ESU-RDC",
      logo: esuLogo,
      alt: "Ministère de l'Enseignement Supérieur et Universitaire",
      url: "https://minesursi.gouv.cd/"
    },
    {
      nom: "Airtel RDC",
      logo: airtelLogo,
      alt: "Airtel RDC",
      url: "https://www.airtel.cd/"
    },
    {
      nom: "AUF",
      logo: aufLogo,
      alt: "Agence Universitaire de la Francophonie",
      url: "https://www.auf.org/"
    },
    {
      nom: "CEDESURK",
      logo: cedesurkLogo,
      alt: "CEDESURK",
      url: "https://www.cedesurk.cd/"
    }
  ];

  return (
    <section className="partenaires">
      <div className="partenaires-container">
        <h2 className="section-title">Nos Partenaires</h2>
        <p className="section-subtitle">
          En collaboration avec des institutions de référence
        </p>

        <div className="partenaires-grid">
          {partenaires.map((partenaire, index) => (
            <a 
              key={index} 
              href={partenaire.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="partenaire-card"
            >
              <div className="partenaire-logo">
                <img src={partenaire.logo} alt={partenaire.alt} />
              </div>
              <p className="partenaire-nom">{partenaire.nom}</p>
            </a>
          ))}
        </div>

        <div className="partenariat-cta">
          <p>Vous souhaitez devenir partenaire ?</p>
          <button className="btn-contact">Contactez-nous</button>
        </div>
      </div>
    </section>
  );
};

export default Partenaires;
