# 📚 Bibliothèque Nationale Numérique (BNN)

![BNN Logo](https://img.shields.io/badge/BNN-CGIIBNN--ESURSI-blue?style=for-the-badge)
![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react)
![Status](https://img.shields.io/badge/Status-Active-success?style=for-the-badge)

## 🏛️ À propos

La **Bibliothèque Nationale Numérique (BNN)** est une initiative de la **CGIIBNN–ESURSI**, cellule numérique du **Ministère de l'Enseignement Supérieur et Universitaire (ESU-RDC)**, visant à offrir un accès libre et numérique aux ressources académiques, scientifiques et culturelles de la République Démocratique du Congo.

> *"Explorez les ressources de la BNN pour nourrir votre savoir."*

## ✨ Fonctionnalités

### 🎯 Sections principales

1. **Hero Section**
   - Présentation institutionnelle de la BNN
   - Boutons d'inscription et de connexion
   - Visualisation multi-plateforme (Desktop, Tablette, Mobile)
   - Liens vers les applications mobiles (Play Store & App Store)

2. **Domaines d'Enseignement**
   - 10 domaines de l'enseignement supérieur en RDC
   - Icônes interactives avec descriptions
   - Design moderne et responsive

3. **Statistiques & Analyses**
   - Graphiques interactifs (Bar & Line charts)
   - Métriques en temps réel
   - Statistiques du mois en cours (Novembre 2025)
   - Visualisation des téléchargements et consultations

4. **Top 5 Lecteurs**
   - Classement mensuel des meilleurs lecteurs
   - Badges et récompenses
   - Barres de progression
   - Mise en valeur du champion

5. **Partenaires Officiels**
   - Grille de 6 logos partenaires
   - Animation au survol
   - Appel à l'action pour nouveaux partenaires

6. **Footer Complet**
   - Liens rapides et informations légales
   - Coordonnées de contact
   - Réseaux sociaux
   - Copyright CGIIBNN–ESURSI 2025

## 🎨 Charte Graphique

- **Couleur principale** : Bleu (#3b82f6, #1e3a8a) - Symbolise la connaissance et la confiance
- **Couleur d'accent** : Jaune/Orange (#fbbf24, #f59e0b) - Énergie et dynamisme
- **Typographie** : Inter (Google Fonts) - Moderne, claire et lisible
- **Icônes** : React Icons (Pack bs) - Cohérence visuelle
- **Style** : Institutionnel, épuré, responsive (Mobile First)

## 🚀 Technologies Utilisées

- **React** 19.2.0 - Framework JavaScript
- **Recharts** - Bibliothèque de graphiques interactifs
- **React Icons** - Pack d'icônes (Bootstrap Icons)
- **CSS3** - Animations et styles modernes
- **Create React App** - Configuration de projet

## 📦 Installation

### Prérequis

- Node.js (version 14 ou supérieure)
- npm ou yarn

### Installation des dépendances

```bash
npm install
```

### Démarrage du serveur de développement

```bash
npm start
```

L'application sera accessible à l'adresse : `http://localhost:3006`

### Build pour la production

```bash
npm run build
```

## 📁 Structure du Projet

```
bnn-portail-esursi/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Hero.js
│   │   ├── Hero.css
│   │   ├── Domaines.js
│   │   ├── Domaines.css
│   │   ├── Statistiques.js
│   │   ├── Statistiques.css
│   │   ├── TopLecteurs.js
│   │   ├── TopLecteurs.css
│   │   ├── Partenaires.js
│   │   ├── Partenaires.css
│   │   ├── Footer.js
│   │   └── Footer.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## 🎯 Domaines Couverts

1. **Sciences** - Physique, Chimie, Biologie
2. **Lettres** - Littérature, Langues, Philosophie
3. **Médecine** - Sciences médicales et de la santé
4. **Droit** - Sciences juridiques
5. **Économie** - Gestion, Finance, Commerce
6. **Ingénierie** - Génie civil, Mécanique, Électrique
7. **Pédagogie** - Sciences de l'éducation
8. **Agriculture** - Agronomie, Vétérinaire
9. **Arts** - Beaux-arts, Musique, Théâtre
10. **Technologies** - Informatique, Télécommunications

## 📊 Statistiques (Novembre 2025)

- **Téléchargements du mois** : 7,740 (+24%)
- **Consultations totales** : 26,300 (+18%)
- **Utilisateurs actifs** : 3,450 (+32%)
- **Ressources disponibles** : 12,890 (+8%)

## 🤝 Partenaires

- Ministère de l'ESU-RDC
- CGIIBNN–ESURSI
- Airtel RDC
- AUF (Agence Universitaire de la Francophonie)
- CEDESURK
- Autres institutions partenaires

## 📱 Responsive Design

Le site est entièrement responsive et optimisé pour :
- 📱 Mobile (320px - 768px)
- 📱 Tablette (768px - 1024px)
- 💻 Desktop (1024px et plus)

## 🎨 Animations

- Animations d'entrée (fadeIn, slideIn)
- Effets de survol sur les cartes
- Transitions fluides
- Graphiques interactifs

## 📝 Scripts Disponibles

```bash
# Démarrage du serveur de développement
npm start

# Build de production
npm run build

# Tests
npm test

# Éjection de la configuration (irreversible)
npm run eject
```

## 🌐 Contact

- **Email** : contact@bnn-esursi.cd
- **Téléphone** : +243 XX XXX XXXX
- **Adresse** : Kinshasa, RDC

## 📄 Licence

© **CGIIBNN–ESURSI 2025** — Tous droits réservés.

Une initiative du **Ministère de l'Enseignement Supérieur et Universitaire (ESU-RDC)**

---

## 👨‍💻 Développement

Ce projet a été développé avec ❤️ pour promouvoir l'accès au savoir numérique en République Démocratique du Congo.

### Améliorations Futures

- [ ] Système d'authentification complet
- [ ] Intégration de la base de données
- [ ] Moteur de recherche avancé
- [ ] Téléchargement des ressources
- [ ] Système de notation et commentaires
- [ ] Application mobile native
- [ ] Mode sombre
- [ ] Multilingue (FR, EN, Lingala, Swahili)

---

**Fait avec 💙 pour l'éducation en RDC**
