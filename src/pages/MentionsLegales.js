import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import './LegalPages.css';

const MentionsLegales = () => {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <Link to="/" className="back-button">
          <BsArrowLeft /> Retour à l'accueil
        </Link>
        <h1>Mentions Légales</h1>
        <p className="last-update">Dernière mise à jour : 15 novembre 2025</p>

        <section className="legal-section">
          <h2>1. Éditeur de la Plateforme</h2>
          <div className="info-block">
            <p><strong>Nom :</strong> Cellule de Gestion des Infrastructures Informatiques de la Bibliothèque Nationale Numérique</p>
            <p><strong>Acronyme :</strong> CGIIBNN-ESURSI</p>
            <p><strong>Statut juridique :</strong> Service public sous tutelle du Ministère de l'ESURSI</p>
            <p><strong>Adresse :</strong> KINSHASA GOMBE, Av. de l'hopital</p>
            <p><strong>Email :</strong> contact@cgiibnn-esursi.cd</p>
            <p><strong>Téléphone :</strong> +243 99 980 886</p>
          </div>
        </section>

        <section className="legal-section">
          <h2>2. Autorité de Tutelle</h2>
          <div className="info-block">
            <p><strong>Ministère :</strong> Ministre de l'Enseignement Supérieur, Universitaire, Recherche Scientifique et Innovations</p>
            <p><strong>Acronyme :</strong> ESURSI</p>
            <p><strong>Pays :</strong> République Démocratique du Congo</p>
          </div>
        </section>

        <section className="legal-section">
          <h2>3. Directeur de Publication</h2>
          <div className="info-block">
            <p><strong>Responsable :</strong> Coordonnateur de la CGIIBNN-ESURSI</p>
            <p><strong>Email :</strong> direction@cgiibnn-esursi.cd</p>
          </div>
        </section>

        <section className="legal-section">
          <h2>4. Hébergement</h2>
          <div className="info-block">
            <p><strong>Hébergeur :</strong> [Nom de l'hébergeur]</p>
            <p><strong>Adresse :</strong> [Adresse de l'hébergeur]</p>
            <p><strong>Contact :</strong> [Contact de l'hébergeur]</p>
            <p className="note">* Les données sont hébergées sur des serveurs sécurisés respectant les normes internationales</p>
          </div>
        </section>

        <section className="legal-section">
          <h2>5. Développement et Maintenance Technique</h2>
          <div className="info-block">
            <p><strong>Développeur :</strong> Équipe technique CGIIBNN-ESURSI</p>
            <p><strong>Technologies utilisées :</strong> React.js, Node.js, bases de données sécurisées</p>
            <p><strong>Support technique :</strong> support@cgiibnn-esursi.cd</p>
          </div>
        </section>

        <section className="legal-section">
          <h2>6. Propriété Intellectuelle</h2>
          <h3>6.1 Plateforme BNN</h3>
          <p>
            La structure générale, le design, le code source et tous les éléments constitutifs de la plateforme BNN 
            sont la propriété exclusive de la CGIIBNN-ESURSI. Toute reproduction, représentation ou utilisation, 
            totale ou partielle, sans autorisation préalable est interdite.
          </p>

          <h3>6.2 Logo et Marques</h3>
          <p>
            Le logo CGIIBNN, le nom "Bibliothèque Nationale Numérique" et tous les signes distinctifs sont des marques 
            protégées. Leur utilisation sans autorisation expresse constitue une contrefaçon.
          </p>

          <h3>6.3 Contenus Documentaires</h3>
          <p>
            Les documents, ouvrages et ressources mis à disposition sur la BNN restent la propriété de leurs auteurs 
            ou ayants droit respectifs. Chaque ressource est accompagnée de ses conditions d'utilisation spécifiques.
          </p>
        </section>

        <section className="legal-section">
          <h2>7. Protection des Données Personnelles</h2>
          <p>
            Conformément à la législation congolaise et aux standards internationaux de protection des données, 
            la CGIIBNN-ESURSI s'engage à :
          </p>
          <ul>
            <li>Collecter uniquement les données nécessaires au fonctionnement du service</li>
            <li>Assurer la sécurité et la confidentialité des données personnelles</li>
            <li>Ne pas vendre ou louer les données à des tiers</li>
            <li>Respecter les droits des utilisateurs (accès, rectification, suppression)</li>
          </ul>
          <p>
            Pour plus de détails, consultez notre <a href="#confidentialite">Politique de Confidentialité</a>.
          </p>
        </section>

        <section className="legal-section">
          <h2>8. Cookies et Technologies Similaires</h2>
          <p>
            La plateforme BNN utilise des cookies pour améliorer l'expérience utilisateur, analyser le trafic et 
            personnaliser le contenu. Vous pouvez gérer vos préférences de cookies via les paramètres de votre navigateur.
          </p>
          <p>Types de cookies utilisés :</p>
          <ul>
            <li><strong>Cookies essentiels :</strong> Nécessaires au fonctionnement de la plateforme</li>
            <li><strong>Cookies analytiques :</strong> Pour comprendre l'utilisation du site</li>
            <li><strong>Cookies de préférence :</strong> Pour mémoriser vos choix</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>9. Limitation de Responsabilité</h2>
          <p>
            La CGIIBNN-ESURSI met tout en œuvre pour assurer la qualité et la fiabilité des services offerts. 
            Toutefois, elle ne peut être tenue responsable de :
          </p>
          <ul>
            <li>L'exactitude, l'exhaustivité ou la mise à jour des contenus</li>
            <li>Les interruptions techniques ou pannes du service</li>
            <li>Les dommages directs ou indirects résultant de l'utilisation de la plateforme</li>
            <li>Les virus informatiques malgré les mesures de sécurité en place</li>
            <li>Les contenus des sites tiers accessibles via des liens hypertextes</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>10. Liens Hypertextes</h2>
          <p>
            La BNN peut contenir des liens vers des sites externes. La CGIIBNN-ESURSI n'exerce aucun contrôle sur 
            ces sites et décline toute responsabilité quant à leur contenu.
          </p>
          <p>
            Tout site souhaitant établir un lien vers la BNN doit obtenir une autorisation préalable en contactant : 
            webmaster@cgiibnn-esursi.cd
          </p>
        </section>

        <section className="legal-section">
          <h2>11. Droit Applicable et Juridiction</h2>
          <p>
            Les présentes mentions légales sont régies par le droit congolais. En cas de litige, et après tentative 
            de règlement amiable, les tribunaux de Kinshasa seront seuls compétents.
          </p>
        </section>

        <section className="legal-section">
          <h2>12. Crédits</h2>
          <h3>Conception et Développement</h3>
          <p>Équipe CGIIBNN-ESURSI</p>

          <h3>Technologies</h3>
          <ul>
            <li>React.js - Framework JavaScript</li>
            <li>React Icons - Bibliothèque d'icônes</li>
            <li>Recharts - Visualisation de données</li>
          </ul>

          <h3>Partenaires</h3>
          <p>
            Nous remercions tous nos partenaires institutionnels et académiques qui contribuent à l'enrichissement 
            de la Bibliothèque Nationale Numérique.
          </p>
        </section>

        <section className="legal-section">
          <h2>13. Signalement d'Abus</h2>
          <p>
            Pour signaler tout contenu illicite, violation de droits d'auteur ou comportement inapproprié :
          </p>
          <div className="contact-info">
            <p><strong>Email :</strong> contact@cgiibnn-esursi.cd</p>
            <p><strong>Objet :</strong> [SIGNALEMENT] Description brève</p>
            <p>Merci de fournir un maximum de détails pour traiter rapidement votre demande.</p>
          </div>
        </section>

        <section className="legal-section">
          <h2>14. Contact</h2>
          <p>Pour toute question concernant ces mentions légales ou pour exercer vos droits :</p>
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

export default MentionsLegales;
