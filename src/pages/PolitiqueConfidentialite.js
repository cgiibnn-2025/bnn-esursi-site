import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import './LegalPages.css';

const PolitiqueConfidentialite = () => {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <Link to="/" className="back-button">
          <BsArrowLeft /> Retour à l'accueil
        </Link>
        <h1>Politique de Confidentialité</h1>
        <p className="last-update">Dernière mise à jour : 15 novembre 2025</p>

        <section className="legal-section">
          <h2>1. Introduction</h2>
          <p>
            La Cellule de Gestion des Infrastructures Informatiques (CGIIBNN) de l'ESURSI s'engage à protéger 
            la vie privée et les données personnelles de tous les utilisateurs de la Bibliothèque Nationale Numérique (BNN). 
            Cette politique décrit comment nous collectons, utilisons, stockons et protégeons vos informations.
          </p>
        </section>

        <section className="legal-section">
          <h2>2. Données Collectées</h2>
          <h3>2.1 Informations d'inscription</h3>
          <ul>
            <li>Nom complet</li>
            <li>Adresse email institutionnelle ou personnelle</li>
            <li>Institution d'appartenance</li>
            <li>Domaine d'études ou de recherche</li>
            <li>Numéro de téléphone (optionnel)</li>
          </ul>

          <h3>2.2 Données d'utilisation</h3>
          <ul>
            <li>Historique de consultation des ressources</li>
            <li>Documents téléchargés</li>
            <li>Recherches effectuées</li>
            <li>Temps de connexion et fréquence d'utilisation</li>
            <li>Préférences de lecture</li>
          </ul>

          <h3>2.3 Données techniques</h3>
          <ul>
            <li>Adresse IP</li>
            <li>Type de navigateur et système d'exploitation</li>
            <li>Type d'appareil (desktop, tablette, mobile)</li>
            <li>Cookies et technologies similaires</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>3. Utilisation des Données</h2>
          <p>Vos données sont utilisées pour :</p>
          <ul>
            <li>Créer et gérer votre compte utilisateur</li>
            <li>Personnaliser votre expérience de navigation</li>
            <li>Recommander des ressources pertinentes</li>
            <li>Générer des statistiques d'utilisation anonymisées</li>
            <li>Améliorer la qualité de nos services</li>
            <li>Communiquer sur les nouvelles ressources et fonctionnalités</li>
            <li>Assurer la sécurité et prévenir les abus</li>
            <li>Répondre aux exigences légales et réglementaires</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>4. Partage des Données</h2>
          <p>
            La CGIIBNN ne vend jamais vos données personnelles à des tiers. Nous pouvons partager vos informations uniquement dans les cas suivants :
          </p>
          <ul>
            <li><strong>Institutions partenaires :</strong> Avec votre consentement explicite, pour des projets de recherche collaborative</li>
            <li><strong>Autorités compétentes :</strong> En réponse à des demandes légales valides</li>
            <li><strong>Prestataires de services :</strong> Fournisseurs techniques soumis à des accords stricts de confidentialité</li>
            <li><strong>Statistiques agrégées :</strong> Données anonymisées pour rapports institutionnels</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>5. Conservation des Données</h2>
          <p>Nous conservons vos données selon les durées suivantes :</p>
          <ul>
            <li><strong>Compte actif :</strong> Pendant toute la durée d'utilisation du service</li>
            <li><strong>Compte inactif :</strong> 3 ans après la dernière connexion</li>
            <li><strong>Historique de consultation :</strong> 5 ans pour des fins statistiques</li>
            <li><strong>Données de sécurité :</strong> 1 an</li>
          </ul>
          <p>
            Passé ces délais, vos données sont supprimées ou anonymisées de manière irréversible.
          </p>
        </section>

        <section className="legal-section">
          <h2>6. Sécurité des Données</h2>
          <p>Nous mettons en œuvre des mesures de sécurité rigoureuses :</p>
          <ul>
            <li>Chiffrement SSL/TLS pour toutes les communications</li>
            <li>Stockage sécurisé avec cryptage des données sensibles</li>
            <li>Contrôles d'accès stricts et authentification forte</li>
            <li>Audits de sécurité réguliers</li>
            <li>Sauvegardes quotidiennes et plan de reprise d'activité</li>
            <li>Formation continue du personnel sur la protection des données</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>7. Vos Droits</h2>
          <p>Conformément à la législation congolaise et aux standards internationaux, vous disposez des droits suivants :</p>
          <ul>
            <li><strong>Droit d'accès :</strong> Consulter vos données personnelles</li>
            <li><strong>Droit de rectification :</strong> Corriger vos informations inexactes</li>
            <li><strong>Droit à l'effacement :</strong> Demander la suppression de vos données</li>
            <li><strong>Droit à la portabilité :</strong> Recevoir vos données dans un format structuré</li>
            <li><strong>Droit d'opposition :</strong> Refuser certains traitements de données</li>
            <li><strong>Droit de limitation :</strong> Limiter l'utilisation de vos données</li>
          </ul>
          <p>
            Pour exercer ces droits, contactez-nous à : <a href="mailto:privacy@cgiibnn-esursi.cd">privacy@cgiibnn-esursi.cd</a>
          </p>
        </section>

        <section className="legal-section">
          <h2>8. Cookies</h2>
          <p>
            Nous utilisons des cookies pour améliorer votre expérience. Vous pouvez configurer votre navigateur pour 
            refuser les cookies, mais certaines fonctionnalités peuvent être limitées.
          </p>
          <h3>Types de cookies utilisés :</h3>
          <ul>
            <li><strong>Cookies essentiels :</strong> Nécessaires au fonctionnement du site</li>
            <li><strong>Cookies de performance :</strong> Analysent l'utilisation du site</li>
            <li><strong>Cookies de personnalisation :</strong> Mémorisent vos préférences</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>9. Modifications de la Politique</h2>
          <p>
            Cette politique peut être mise à jour pour refléter les changements dans nos pratiques ou pour des raisons 
            légales. Nous vous informerons de toute modification significative par email ou notification sur la plateforme.
          </p>
        </section>

        <section className="legal-section">
          <h2>10. Contact</h2>
          <p>Pour toute question concernant cette politique de confidentialité :</p>
          <div className="contact-info">
            <p><strong>Email :</strong> contact@cgiibnn-esursi.cd</p>
            <p><strong>Adresse :</strong> KINSHASA GOMBE, Av. de l'hopital</p>
            <p><strong>Téléphone :</strong> +243 99 980 886</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PolitiqueConfidentialite;
