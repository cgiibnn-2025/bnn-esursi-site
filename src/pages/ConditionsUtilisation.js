import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import './LegalPages.css';

const ConditionsUtilisation = () => {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <Link to="/" className="back-button">
          <BsArrowLeft /> Retour à l'accueil
        </Link>
        <h1>Conditions d'Utilisation</h1>
        <p className="last-update">Dernière mise à jour : 15 novembre 2025</p>

        <section className="legal-section">
          <h2>1. Acceptation des Conditions</h2>
          <p>
            En accédant et en utilisant la Bibliothèque Nationale Numérique (BNN), plateforme développée et maintenue 
            par la CGIIBNN-ESURSI, vous acceptez d'être lié par les présentes conditions d'utilisation. 
            Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser nos services.
          </p>
        </section>

        <section className="legal-section">
          <h2>2. Présentation du Service</h2>
          <p>
            La BNN est une plateforme numérique offrant un accès gratuit aux ressources académiques, scientifiques 
            et culturelles de la République Démocratique du Congo. Le service comprend :
          </p>
          <ul>
            <li>Consultation en ligne de documents numériques</li>
            <li>Téléchargement de ressources autorisées</li>
            <li>Recherche avancée dans notre catalogue</li>
            <li>Système de recommandations personnalisées</li>
            <li>Espace personnel pour gérer vos lectures</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>3. Inscription et Compte Utilisateur</h2>
          <h3>3.1 Éligibilité</h3>
          <p>
            La BNN est accessible aux étudiants, enseignants, chercheurs et professionnels de l'éducation 
            de la RDC et à l'international. Vous devez avoir au moins 16 ans pour créer un compte.
          </p>

          <h3>3.2 Création de compte</h3>
          <p>Pour créer un compte, vous devez :</p>
          <ul>
            <li>Fournir des informations exactes et complètes</li>
            <li>Maintenir la confidentialité de vos identifiants</li>
            <li>Nous informer immédiatement de tout accès non autorisé</li>
            <li>Être responsable de toutes les activités sur votre compte</li>
          </ul>

          <h3>3.3 Suspension ou suppression de compte</h3>
          <p>Nous nous réservons le droit de suspendre ou supprimer votre compte en cas de :</p>
          <ul>
            <li>Violation des présentes conditions</li>
            <li>Utilisation frauduleuse ou abusive</li>
            <li>Inactivité prolongée (plus de 3 ans)</li>
            <li>Activités illégales ou nuisibles</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>4. Utilisation Acceptable</h2>
          <h3>4.1 Vous êtes autorisé à :</h3>
          <ul>
            <li>Consulter et télécharger des ressources pour usage personnel académique</li>
            <li>Citer les ressources avec attribution appropriée</li>
            <li>Partager des liens vers des ressources (pas les fichiers)</li>
            <li>Utiliser les ressources dans le cadre de recherches et publications</li>
          </ul>

          <h3>4.2 Vous n'êtes PAS autorisé à :</h3>
          <ul>
            <li>Reproduire ou distribuer massivement les ressources</li>
            <li>Utiliser les ressources à des fins commerciales sans autorisation</li>
            <li>Modifier, altérer ou créer des œuvres dérivées</li>
            <li>Contourner les mesures de sécurité ou de protection</li>
            <li>Utiliser des robots, scrapers ou outils automatisés</li>
            <li>Partager vos identifiants de connexion</li>
            <li>Télécharger massivement des contenus (download bulk)</li>
            <li>Publier du contenu illégal, offensant ou inapproprié</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>5. Propriété Intellectuelle</h2>
          <h3>5.1 Contenu de la BNN</h3>
          <p>
            Tous les contenus (textes, images, vidéos, bases de données) sont protégés par les lois sur 
            la propriété intellectuelle. Les droits appartiennent à leurs auteurs respectifs ou à la CGIIBNN-ESURSI.
          </p>

          <h3>5.2 Licences</h3>
          <p>
            Les ressources sont disponibles sous différentes licences (Domaine Public, Creative Commons, Usage Académique). 
            Consultez les conditions spécifiques à chaque document avant utilisation.
          </p>

          <h3>5.3 Citations</h3>
          <p>
            Pour toute citation, veuillez mentionner : Titre, Auteur(s), Source : Bibliothèque Nationale Numérique (BNN) - CGIIBNN-ESURSI, 
            Date d'accès, URL.
          </p>
        </section>

        <section className="legal-section">
          <h2>6. Disponibilité du Service</h2>
          <p>
            Nous nous efforçons de maintenir la BNN accessible 24/7. Cependant, nous ne garantissons pas une disponibilité 
            ininterrompue et nous réservons le droit de :
          </p>
          <ul>
            <li>Effectuer des maintenances programmées</li>
            <li>Suspendre temporairement le service pour des raisons techniques</li>
            <li>Modifier ou interrompre des fonctionnalités</li>
            <li>Mettre à jour le contenu et les ressources</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>7. Limitation de Responsabilité</h2>
          <p>
            La CGIIBNN-ESURSI ne peut être tenue responsable de :
          </p>
          <ul>
            <li>L'exactitude, l'exhaustivité ou la fiabilité du contenu</li>
            <li>Les interruptions de service ou pertes de données</li>
            <li>Les dommages résultant de l'utilisation ou de l'impossibilité d'utiliser le service</li>
            <li>Les contenus de sites tiers accessibles via des liens</li>
            <li>Les virus ou logiciels malveillants malgré nos mesures de sécurité</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>8. Modifications des Conditions</h2>
          <p>
            Nous nous réservons le droit de modifier ces conditions à tout moment. Les modifications entrent en vigueur 
            dès leur publication sur la plateforme. Votre utilisation continue du service après publication constitue 
            votre acceptation des nouvelles conditions.
          </p>
        </section>

        <section className="legal-section">
          <h2>9. Résiliation</h2>
          <p>
            Vous pouvez résilier votre compte à tout moment via votre profil. En cas de violation des conditions, 
            nous pouvons résilier votre accès immédiatement sans préavis.
          </p>
        </section>

        <section className="legal-section">
          <h2>10. Droit Applicable</h2>
          <p>
            Ces conditions sont régies par les lois de la République Démocratique du Congo. Tout litige sera soumis 
            à la juridiction exclusive des tribunaux de Kinshasa.
          </p>
        </section>

        <section className="legal-section">
          <h2>11. Contact</h2>
          <p>Pour toute question concernant ces conditions d'utilisation :</p>
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

export default ConditionsUtilisation;
