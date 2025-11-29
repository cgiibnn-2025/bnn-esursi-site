import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  BsArrowLeft, 
  BsChevronRight, 
  BsSearch,
  BsBuilding,
  BsBook,
  BsLightbulb,
  BsGlobe,
  BsBank,
  BsBookshelf,
  BsJournalText,
  BsGrid,
  BsBookmark,
  BsPlayCircle,
  BsWikipedia,
  BsBoxArrowUpRight
} from 'react-icons/bs';
import './Portail.css';

const Portail = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchFilter, setSearchFilter] = useState('');
  const [ressourcesData, setRessourcesData] = useState([]);
  const [bnnData, setBnnData] = useState([]);
  const [toolsData, setToolsData] = useState([]);

  useEffect(() => {
    // Charger les données des ressources institutionnelles
    fetch('/ressource.insti.json')
      .then(response => response.json())
      .then(data => setRessourcesData(data))
      .catch(error => console.error('Erreur lors du chargement des ressources:', error));
  }, []);

  useEffect(() => {
    // Charger les données de la Bibliothèque Numérique (BNN)
    fetch('/bnn.json')
      .then(response => response.json())
      .then(data => setBnnData(data))
      .catch(error => console.error('Erreur lors du chargement de la BNN:', error));
  }, []);

  useEffect(() => {
    // Charger les données des outils éducatifs
    fetch('/toolseducatifs.json')
      .then(response => response.json())
      .then(data => setToolsData(data))
      .catch(error => console.error('Erreur chargement outils éducatifs:', error));
  }, []);

  const categories = [
    {
      id: 'ressources-institutionnelles',
      title: 'Ressources institutionnelles',
      description: 'Accédez aux ressources officielles et documents institutionnels de la CGIIBNN et du ministère.',
      icon: <BsBuilding />
    },
    {
      id: 'bibliotheque-numerique',
      title: 'Bibliothèque Numérique Nationale',
      description: 'La Bibliothèque Numérique Nationale propose un accès gratuit à des milliers de documents académiques et scientifiques.',
      icon: <BsBook />
    },
    {
      id: 'outils-educatifs',
      title: 'Outils éducatifs',
      description: 'Découvrez nos outils et plateformes éducatives pour améliorer votre apprentissage et vos recherches.',
      icon: <BsLightbulb />
    },
    {
      id: 'portails-libres',
      title: 'Portails à libre accès',
      description: 'Consultez les portails en libre accès qui offrent des ressources gratuites pour l\'éducation et la recherche.',
      icon: <BsGlobe />
    },
    {
      id: 'ressources-universites',
      title: 'Ressources de nos universités',
      description: 'Explorez les ressources mises à disposition par nos universités partenaires de la RDC.',
      icon: <BsBank />
    },
    {
      id: 'bibliotheques-externes',
      title: 'Bibliothèques externes en ligne',
      description: 'Accédez à des bibliothèques numériques prestigieuses du monde entier.',
      icon: <BsBookshelf />
    },
    {
      id: 'revues-ligne',
      title: 'Revues en ligne',
      description: 'Consultez les revues scientifiques et académiques en ligne disponibles pour la communauté universitaire.',
      icon: <BsJournalText />
    },
    {
      id: 'catalogues-ligne',
      title: 'Catalogues en ligne',
      description: 'Parcourez les catalogues en ligne des collections numériques et physiques.',
      icon: <BsGrid />
    },
    {
      id: 'encyclopedies-dictionnaires',
      title: 'Encyclopédies et dictionnaires en ligne',
      description: 'Utilisez nos référentiels pour vos recherches terminologiques et encyclopédiques.',
      icon: <BsBookmark />
    },
    {
      id: 'mooc',
      title: 'MOOC',
      description: 'Suivez des cours en ligne ouverts et gratuits (MOOC) dans différents domaines de connaissance.',
      icon: <BsPlayCircle />
    },
    {
      id: 'wikipedia',
      title: 'Wikipedia',
      description: 'Accédez à l\'encyclopédie libre Wikipedia pour vos recherches et consultations.',
      icon: <BsWikipedia />
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
      'mooc': 'MOOC - Cours en ligne gratuits',
      'wikipedia': 'Wikipedia - Encyclopédie libre'
    };
    return contentMap[categoryId] || 'Sélectionnez une catégorie pour voir le contenu.';
  };

  const filteredCategories = categories.filter(category =>
    category.title.toLowerCase().includes(searchFilter.toLowerCase()) ||
    category.description.toLowerCase().includes(searchFilter.toLowerCase())
  );

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
          
          {/* Zone de filtrage */}
          <div className="drawer-search">
            <BsSearch className="search-icon" />
            <input
              type="text"
              placeholder="Filtrer les catégories..."
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              className="search-input"
            />
          </div>

          <nav className="drawer-menu">
            {filteredCategories.map((category) => (
              <button
                key={category.id}
                className={`drawer-menu-item ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <div className="menu-item-content">
                  <span className="menu-item-icon">{category.icon}</span>
                  <span className="menu-item-title">{category.title}</span>
                </div>
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
                
                {(selectedCategory === 'ressources-institutionnelles' || selectedCategory === 'bibliotheque-numerique' || selectedCategory === 'outils-educatifs') ? (
                  <div className="resources-grid">
                    {(selectedCategory === 'ressources-institutionnelles' ? ressourcesData : selectedCategory === 'bibliotheque-numerique' ? bnnData : toolsData).map((resource, index) => (
                      <a 
                        key={index}
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="resource-card"
                      >
                        <div className="resource-image">
                          <img src={resource.image} alt={resource.titre} />
                        </div>
                        <div className="resource-content">
                          <h3 className="resource-title">{resource.titre}</h3>
                          <p className="resource-description">{resource.content}</p>
                          <div className="resource-link">
                            <span>Visiter le site</span>
                            <BsBoxArrowUpRight />
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                ) : (
                  <div className="content-placeholder">
                    <p>{getContentForCategory(selectedCategory)}</p>
                  </div>
                )}
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




