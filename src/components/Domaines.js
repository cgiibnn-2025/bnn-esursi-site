import React from 'react';
import { 
  BsBook, 
  BsHeartPulse, 
  BsShield, 
  BsGraphUp, 
  BsGear,
  BsPeople,
  BsTree,
  BsPalette,
  BsCpu,
  BsLightbulb
} from 'react-icons/bs';
import './Domaines.css';

const Domaines = () => {
  const domaines = [
    {
      icon: <BsLightbulb />,
      title: "Sciences",
      description: "Physique, Chimie, Biologie et sciences fondamentales"
    },
    {
      icon: <BsBook />,
      title: "Lettres",
      description: "Littérature, Langues, Philosophie et Sciences humaines"
    },
    {
      icon: <BsHeartPulse />,
      title: "Médecine",
      description: "Sciences médicales, Pharmacie et Sciences de la santé"
    },
    {
      icon: <BsShield />,
      title: "Droit",
      description: "Sciences juridiques, Droit public et privé"
    },
    {
      icon: <BsGraphUp />,
      title: "Économie",
      description: "Gestion, Économie, Finance et Commerce"
    },
    {
      icon: <BsGear />,
      title: "Ingénierie",
      description: "Génie civil, Mécanique, Électrique et Industriel"
    },
    {
      icon: <BsPeople />,
      title: "Pédagogie",
      description: "Sciences de l'éducation et Formation des enseignants"
    },
    {
      icon: <BsTree />,
      title: "Agriculture",
      description: "Agronomie, Vétérinaire et Développement rural"
    },
    {
      icon: <BsPalette />,
      title: "Arts",
      description: "Beaux-arts, Musique, Théâtre et Arts appliqués"
    },
    {
      icon: <BsCpu />,
      title: "Technologies",
      description: "Informatique, Télécommunications et Numérique"
    }
  ];

  return (
    <section className="domaines">
      <div className="domaines-container">
        <h2 className="section-title">Domaines d'Enseignement Supérieur</h2>
        <p className="section-subtitle">
          Découvrez les ressources disponibles dans les 10 domaines de l'enseignement supérieur en RDC
        </p>
        
        <div className="domaines-grid">
          {domaines.map((domaine, index) => (
            <div key={index} className="domaine-card">
              <div className="domaine-icon">{domaine.icon}</div>
              <h3 className="domaine-title">{domaine.title}</h3>
              <p className="domaine-description">{domaine.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Domaines;
