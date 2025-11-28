import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsArrowLeft, BsChevronRight } from 'react-icons/bs';
import './Portail.css';

const Portail = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    {
      id: 'ressources-institutionnelles',
      title: 'Ressources institutionnelles',
      description: 'Accédez aux ressources officielles et documents institutionnels de la CGIIBNN et du ministère.'
    },
    {
      id: 'bibliotheque-numerique',
      title: 'Bibliothèque Numérique Nationale',
      description: 'La Bibliothèque Numérique Nationale propose un accès gratuit à des milliers de documents académiques et scientifiques.'
    },
    {
      id: 'outils-educatifs',
      title: 'Outils éducatifs',
      description: 'Découvrez nos outils et plateformes éducatives pour améliorer votre apprentissage et vos recherches.'
    },
    {
      id: 'portails-libres',
      title: 'Portails à libre accès',
      description: 'Consultez les portails en libre accès qui offrent des ressources gratuites pour l\'éducation et la recherche.'
    },
    {
      id: 'ressources-universites',
      title: 'Ressources de nos universités',
      description: 'Explorez les ressources mises à disposition par nos universités partenaires de la RDC.'
    },
    {
      id: 'bibliotheques-externes',
      title: 'Bibliothèques externes en ligne',
      description: 'Accédez à des bibliothèques numériques prestigieuses du monde entier.'
    },
    {
      id: 'revues-ligne',
      title: 'Revues en ligne',
      description: 'Consultez les revues scientifiques et académiques en ligne disponibles pour la communauté universitaire.'
    },
    {
      id: 'catalogues-ligne',
      title: 'Catalogues en ligne',
      description: 'Parcourez les catalogues en ligne des collections numériques et physiques.'
    },
    {
      id: 'encyclopedies-dictionnaires',
      title: 'Encyclopédies et dictionnaires en ligne',
      description: 'Utilisez nos référentiels pour vos recherches terminologiques et encyclopédiques.'
    },
    {
      id: 'mooc',
      title: 'MOOC',
      description: 'Suivez des cours en ligne ouverts et gratuits (MOOC) dans différents domaines de connaissance.'
    }
  ];

  const getContentForCategory = (categoryId) => {
    const contentMap = {
      'ressources-institutionnelles': 'Ressources institutionnelles - Contenu à venir',
      'bibliotheque-numerique': 'Bibliothèque Numérique Nationale - Accédez à notre collection',
      'outils-educatifs': 'Outils éducatifs - Découvrez nos outils',
      'portails-libres': 'Portails à libre accès - Ressources gratuites',
      'ressources-universites': 'Ressources de nos universités - Collections partenaires',
      'bibliotheques-externes': 'Bibliothèques externes en ligne - Ressources mondiales',
      'revues-ligne': 'Revues en ligne - Publications scientifiques',
      'catalogues-ligne': 'Catalogues en ligne - Collections numériques',
      'encyclopedies-dictionnaires': 'Encyclopédies et dictionnaires - Références',
      'mooc': 'MOOC - Cours en ligne gratuits'
    };
    return contentMap[categoryId] || 'Sélectionnez une catégorie pour voir le contenu.';
  };

  return (
    <div className="portail-page">
      <div className="portail-header">
        <button 
          className="back-button-portail"
          onClick={() => navigate('/')}
        >
          <BsArrowLeft /> Retour
        </button>
        <h1>Portail des Ressources</h1>
      </div>

      <div className="portail-container">
        {/* Menu Drawer Gauche */}
        <div className="portail-drawer">
          <div className="drawer-header">
            <h2>Catégories</h2>
          </div>
          <nav className="drawer-menu">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`drawer-menu-item ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <span>{category.title}</span>
                <BsChevronRight />
              </button>
            ))}
          </nav>
        </div>

        {/* Contenu Principal Droite */}
        <div className="portail-content">
          {selectedCategory ? (
            <>
              <div className="content-header">
                <h2>{categories.find(c => c.id === selectedCategory)?.title}</h2>
              </div>
              <div className="content-body">
                <p className="content-description">
                  {categories.find(c => c.id === selectedCategory)?.description}
                </p>
                <div className="content-placeholder">
                  <p>{getContentForCategory(selectedCategory)}</p>
                </div>
              </div>
            </>
          ) : (
            <div className="content-welcome">
              <h2>Bienvenue sur le Portail des Ressources</h2>
              <p>
                Sélectionnez une catégorie dans le menu de gauche pour accéder aux ressources.
              </p>
              <div className="welcome-info">
                <p>
                  Ce portail centralise l'accès à de nombreuses ressources éducatives, scientifiques 
                  et académiques pour soutenir votre apprentissage et vos recherches.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Portail;




