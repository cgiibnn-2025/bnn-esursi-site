import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsSearch, BsChevronDown, BsChevronUp, BsEnvelope, BsQuestionCircle, BsArrowLeft } from 'react-icons/bs';
import './LegalPages.css';

const CentreAide = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaq, setOpenFaq] = useState(null);

  const faqCategories = [
    {
      category: "Compte et Inscription",
      questions: [
        {
          q: "Comment créer un compte sur la BNN ?",
          a: "Pour créer un compte, cliquez sur le bouton 'S'inscrire' en haut à droite. Remplissez le formulaire avec vos informations (nom, email, institution). Vous recevrez un email de confirmation pour activer votre compte."
        },
        {
          q: "J'ai oublié mon mot de passe, que faire ?",
          a: "Cliquez sur 'Mot de passe oublié' sur la page de connexion. Entrez votre email et suivez les instructions pour réinitialiser votre mot de passe. Vérifiez également votre dossier spam."
        },
        {
          q: "Puis-je modifier mes informations personnelles ?",
          a: "Oui, connectez-vous à votre compte, allez dans 'Mon Profil' puis 'Paramètres'. Vous pouvez modifier vos informations personnelles, votre email et votre mot de passe."
        },
        {
          q: "Comment supprimer mon compte ?",
          a: "Pour supprimer votre compte, contactez-nous à cgiibnnesursi@gmail.com avec votre demande. Notez que cette action est irréversible et toutes vos données seront supprimées."
        }
      ]
    },
    {
      category: "Recherche et Consultation",
      questions: [
        {
          q: "Comment rechercher un document sur la BNN ?",
          a: "Utilisez la barre de recherche en haut de la page. Vous pouvez rechercher par titre, auteur, mots-clés ou domaine. Utilisez des filtres avancés pour affiner vos résultats (année, type de document, langue)."
        },
        {
          q: "Puis-je consulter les documents sans créer de compte ?",
          a: "Vous pouvez parcourir le catalogue, mais la consultation complète et le téléchargement nécessitent un compte gratuit. L'inscription prend moins de 2 minutes."
        },
        {
          q: "Comment fonctionne le système de recommandations ?",
          a: "Notre algorithme analyse vos lectures et recherches pour suggérer des ressources pertinentes. Plus vous utilisez la BNN, plus les recommandations sont précises."
        },
        {
          q: "Les documents sont-ils disponibles dans toutes les langues ?",
          a: "La majorité des documents sont en français, mais nous avons également des ressources en anglais, lingala et d'autres langues. Utilisez le filtre 'Langue' pour affiner vos recherches."
        }
      ]
    },
    {
      category: "Téléchargement et Accès",
      questions: [
        {
          q: "Comment télécharger un document ?",
          a: "Connectez-vous, recherchez le document souhaité, cliquez sur 'Télécharger' et sélectionnez le format (PDF, EPUB). Le téléchargement démarre automatiquement."
        },
        {
          q: "Y a-t-il une limite de téléchargements ?",
          a: "Les comptes standards peuvent télécharger jusqu'à 50 documents par mois. Les comptes institutionnels ont des quotas plus élevés. Contactez-nous pour des besoins spécifiques."
        },
        {
          q: "Puis-je lire les documents hors ligne ?",
          a: "Oui, téléchargez l'application mobile BNN (Android/iOS). Les documents téléchargés restent accessibles hors ligne pendant 30 jours."
        },
        {
          q: "Les téléchargements sont-ils compatibles avec les liseuses ?",
          a: "Oui, téléchargez au format EPUB pour les liseuses Kindle, Kobo, etc. Les PDF sont également compatibles avec la plupart des appareils."
        }
      ]
    },
    {
      category: "Application Mobile",
      questions: [
        {
          q: "L'application BNN est-elle gratuite ?",
          a: "Oui, l'application est entièrement gratuite et disponible sur Google Play Store et Apple App Store. Recherchez 'BNN ESURSI'."
        },
        {
          q: "Puis-je synchroniser mes lectures entre appareils ?",
          a: "Oui, connectez-vous avec le même compte sur tous vos appareils. Vos marque-pages, notes et historique se synchronisent automatiquement."
        },
        {
          q: "L'application fonctionne-t-elle hors ligne ?",
          a: "Oui, vous pouvez télécharger des documents pour une lecture hors ligne. Seules la recherche et la synchronisation nécessitent une connexion."
        }
      ]
    },
    {
      category: "Problèmes Techniques",
      questions: [
        {
          q: "Le site ne se charge pas, que faire ?",
          a: "Vérifiez votre connexion internet. Videz le cache de votre navigateur (Ctrl+Shift+Del). Essayez un autre navigateur (Chrome, Firefox, Safari). Si le problème persiste, contactez cgiibnnesursi@gmail.com"
        },
        {
          q: "Je ne peux pas télécharger un document",
          a: "Vérifiez votre quota de téléchargements, votre connexion internet et l'espace disponible sur votre appareil. Essayez un autre format (PDF au lieu d'EPUB). Contactez le support si le problème persiste."
        },
        {
          q: "La recherche ne fonctionne pas correctement",
          a: "Essayez des termes de recherche différents ou plus simples. Vérifiez l'orthographe. Utilisez les filtres pour affiner. Actualisez la page. Si le problème continue, signalez-le à cgiibnnesursi@gmail.com"
        },
        {
          q: "Je n'arrive pas à me connecter",
          a: "Vérifiez votre email et mot de passe. Assurez-vous que votre compte est activé (vérifiez vos emails). Essayez de réinitialiser votre mot de passe. Contactez le support si nécessaire."
        }
      ]
    },
    {
      category: "Droits et Utilisation",
      questions: [
        {
          q: "Puis-je utiliser les documents pour mes travaux ?",
          a: "Oui, vous pouvez utiliser les documents pour vos recherches, études et publications académiques. N'oubliez pas de citer correctement la source et les auteurs."
        },
        {
          q: "Puis-je partager des documents avec mes collègues ?",
          a: "Vous pouvez partager des liens vers les documents, mais pas les fichiers téléchargés. Encouragez vos collègues à créer leur propre compte gratuit."
        },
        {
          q: "Puis-je imprimer les documents ?",
          a: "Oui, vous pouvez imprimer pour usage personnel académique. L'impression massive ou à des fins commerciales nécessite une autorisation spéciale."
        },
        {
          q: "Comment citer un document de la BNN ?",
          a: "Format : NOM, Prénom. Titre. Bibliothèque Nationale Numérique (BNN) - CGIIBNN-ESURSI. [Date d'accès]. Disponible sur : [URL]"
        }
      ]
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const filteredFaqs = faqCategories.map(cat => ({
    ...cat,
    questions: cat.questions.filter(q => 
      q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.a.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(cat => cat.questions.length > 0);

  return (
    <div className="legal-page aide-page">
      <div className="legal-container">
        <Link to="/" className="back-button">
          <BsArrowLeft /> Retour à l'accueil
        </Link>
        <h1>Centre d'Aide</h1>
        <p className="page-subtitle">Trouvez rapidement des réponses à vos questions</p>

        {/* Barre de recherche */}
        <div className="search-box">
          <BsSearch className="search-icon" />
          <input
            type="text"
            placeholder="Rechercher dans la FAQ..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>

        {/* Sections d'aide rapide */}
        <div className="quick-help">
          <div className="help-card" onClick={() => document.getElementById('faq-section')?.scrollIntoView({ behavior: 'smooth' })} style={{ cursor: 'pointer' }}>
            <BsQuestionCircle className="help-icon" />
            <h3>FAQ Complète</h3>
            <p>Consultez nos questions fréquentes ci-dessous</p>
          </div>
          <div className="help-card" onClick={() => document.getElementById('support-section')?.scrollIntoView({ behavior: 'smooth' })} style={{ cursor: 'pointer' }}>
            <BsEnvelope className="help-icon" />
            <h3>Contactez-nous</h3>
            <p>cgiibnnesursi@gmail.com</p>
          </div>
        </div>

        {/* FAQ par catégories */}
        <div className="faq-section" id="faq-section">
          {filteredFaqs.map((category, catIndex) => (
            <div key={catIndex} className="faq-category">
              <h2 className="category-title">{category.category}</h2>
              {category.questions.map((item, qIndex) => {
                const globalIndex = `${catIndex}-${qIndex}`;
                return (
                  <div key={qIndex} className="faq-item">
                    <div 
                      className="faq-question" 
                      onClick={() => toggleFaq(globalIndex)}
                    >
                      <h3>{item.q}</h3>
                      {openFaq === globalIndex ? <BsChevronUp /> : <BsChevronDown />}
                    </div>
                    {openFaq === globalIndex && (
                      <div className="faq-answer">
                        <p>{item.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        {/* Contact support */}
        <section className="legal-section support-section" id="support-section">
          <h2>Besoin d'aide supplémentaire ?</h2>
          <p>Notre équipe de support est disponible pour vous aider.</p>
          
          <div className="support-options">
            <div className="support-card">
              <h3>Email</h3>
              <p><strong>Contact :</strong> cgiibnnesursi@gmail.com</p>
              <p><strong>Délai de réponse :</strong> 24-48h</p>
            </div>

            <div className="support-card">
              <h3>Téléphone</h3>
              <p><strong>Numéro :</strong> +243 99 980 886</p>
              <p><strong>Horaires :</strong> Lun-Ven, 8h-17h (GMT+1)</p>
            </div>

            <div className="support-card">
              <h3>Adresse</h3>
              <p>KINSHASA GOMBE</p>
              <p>Av. de l'hopital</p>
              <p>République Démocratique du Congo</p>
            </div>
          </div>
        </section>

        {/* Tutoriels */}
        <section className="legal-section" id="tutorials-section">
          <h2>Tutoriels et Guides</h2>
          <div className="tutorials-grid">
            <div className="tutorial-card">
              <h3>Guide de démarrage rapide</h3>
              <p>Apprenez les bases de la BNN en 5 minutes</p>
              <a href="#guide-demarrage" className="tutorial-link">Voir le guide →</a>
            </div>
            <div className="tutorial-card">
              <h3>Recherche avancée</h3>
              <p>Maîtrisez les techniques de recherche</p>
              <a href="#recherche-avancee" className="tutorial-link">En savoir plus →</a>
            </div>
            <div className="tutorial-card">
              <h3>Application mobile</h3>
              <p>Utilisez la BNN sur votre smartphone</p>
              <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="tutorial-link">Télécharger →</a>
            </div>
            <div className="tutorial-card">
              <h3>Gestion des citations</h3>
              <p>Citez correctement vos sources</p>
              <a href="#citations" className="tutorial-link">Voir les exemples →</a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CentreAide;
