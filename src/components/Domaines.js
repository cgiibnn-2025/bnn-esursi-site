import React from 'react';
import { 
  BsHeartPulse, 
  BsShield, 
  BsGraphUp,
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
      icon: <BsPalette />,
      title: "Lettres, Langues et Arts",
      description: "Ce domaine explore la littérature, les langues, les cultures et les pratiques artistiques. Il développe la créativité, l'expression, l'analyse critique et la compréhension des œuvres humaines."
    },
    {
      icon: <BsHeartPulse />,
      title: "Sciences de la Santé",
      description: "Elles regroupent les disciplines liées à la médecine, aux soins infirmiers, à la pharmacie et à la santé publique. Ce domaine forme des professionnels capables d'améliorer la santé et le bien-être des populations."
    },
    {
      icon: <BsTree />,
      title: "Sciences Agronomiques et Environnement",
      description: "Ce domaine traite de l'agriculture, de l'élevage, de la gestion durable des ressources naturelles et de la protection de l'environnement. Il contribue à la sécurité alimentaire et à la préservation de l'écosystème."
    },
    {
      icon: <BsPeople />,
      title: "Sciences de l'Homme et de la Société",
      description: "Il regroupe les disciplines qui analysent les comportements humains, les cultures, les interactions sociales et les dynamiques communautaires. Ce domaine aide à comprendre et résoudre les enjeux sociétaux."
    },
    {
      icon: <BsGraphUp />,
      title: "Sciences Économiques et de Gestion",
      description: "Ce domaine étudie la production, la distribution des richesses, le management et la gouvernance des organisations. Il forme des experts capables d'analyser les marchés et de piloter la performance économique."
    },
    {
      icon: <BsCpu />,
      title: "Sciences et Technologies",
      description: "Il couvre les domaines de la physique, de la chimie, des mathématiques, de l'informatique et des innovations techniques. Ce secteur développe les compétences nécessaires pour concevoir des solutions technologiques."
    },
    {
      icon: <BsShield />,
      title: "Sciences Juridiques, Politiques et Administratives",
      description: "Ce domaine analyse le droit, les institutions, la gouvernance et les politiques publiques. Il forme des professionnels capables d'assurer la justice, l'administration efficace et la gestion publique."
    },
    {
      icon: <BsLightbulb />,
      title: "Sciences Psychologiques et de l'Éducation",
      description: "Il étudie les comportements, les processus mentaux et les méthodes pédagogiques. Ce domaine prépare à accompagner le développement humain, l'apprentissage et le bien-être psychologique."
    }
  ];

  return (
    <section className="domaines">
      <div className="domaines-container">
        <h2 className="section-title">Domaines d'Enseignement Supérieur</h2>
        <p className="section-subtitle">
          Découvrez les ressources disponibles dans les 8 domaines de l'enseignement supérieur en RDC
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
