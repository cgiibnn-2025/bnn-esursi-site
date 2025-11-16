# 🚀 Guide de Développement - BNN Portail

## 📋 Table des Matières

1. [Démarrage Rapide](#démarrage-rapide)
2. [Structure des Composants](#structure-des-composants)
3. [Personnalisation](#personnalisation)
4. [Ajout de Nouvelles Fonctionnalités](#ajout-de-nouvelles-fonctionnalités)
5. [Optimisation](#optimisation)
6. [Déploiement](#déploiement)

## 🎯 Démarrage Rapide

### Installation

```bash
# Cloner le projet
cd bnn-portail-esursi

# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm start
```

L'application sera accessible sur `http://localhost:3006`

## 🏗️ Structure des Composants

### 1. Header (Navigation)

**Fichier** : `src/components/Header.js`

**Fonctionnalités** :
- Navigation sticky
- Menu responsive avec toggle
- Boutons d'authentification
- Logo cliquable

**Personnalisation** :
```javascript
// Modifier les liens de navigation
const navLinks = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#domaines', label: 'Domaines' },
  // Ajouter vos liens ici
];
```

### 2. Hero Section

**Fichier** : `src/components/Hero.js`

**Contenu** :
- Présentation institutionnelle
- CTA (Call-to-Action) buttons
- Visuels multi-plateformes
- Liens vers les app stores

**Personnalisation** :
```javascript
// Modifier le texte principal
const heroData = {
  title: "Votre titre",
  description: "Votre description",
  slogan: "Votre slogan"
};
```

### 3. Domaines

**Fichier** : `src/components/Domaines.js`

**Structure** :
```javascript
{
  icon: <BsIcon />,
  title: "Titre du domaine",
  description: "Description courte"
}
```

**Ajouter un nouveau domaine** :
```javascript
const nouveauDomaine = {
  icon: <BsNewIcon />,
  title: "Nouveau Domaine",
  description: "Description du nouveau domaine"
};

// Ajouter au tableau domaines[]
```

### 4. Statistiques

**Fichier** : `src/components/Statistiques.js`

**Données** :
- Graphiques en barres (téléchargements)
- Graphiques en lignes (consultations)
- Cartes de statistiques

**Mise à jour des données** :
```javascript
// Modifier les données du graphique
const dataTelechargements = [
  { jour: '1-7 Nov', telechargements: 1250 },
  // Ajouter vos données
];

// Modifier les statistiques
const stats = [
  {
    title: "Votre métrique",
    value: "Valeur",
    change: "+X%",
    color: "#couleur"
  }
];
```

### 5. Top Lecteurs

**Fichier** : `src/components/TopLecteurs.js`

**Structure** :
```javascript
{
  nom: "Nom du lecteur",
  lectures: 287,
  avatar: "Initiales",
  progression: 95,
  rank: 1
}
```

**Intégration avec API** :
```javascript
useEffect(() => {
  fetch('/api/top-lecteurs')
    .then(res => res.json())
    .then(data => setLecteurs(data));
}, []);
```

### 6. Partenaires

**Fichier** : `src/components/Partenaires.js`

**Ajouter un partenaire** :
```javascript
{
  nom: "Nom du partenaire",
  logo: "URL ou chemin de l'image",
  alt: "Description alternative"
}
```

### 7. Footer

**Fichier** : `src/components/Footer.js`

**Sections** :
- Logo et description
- Liens rapides
- Informations légales
- Contact
- Réseaux sociaux

## 🎨 Personnalisation

### Couleurs

Modifier les variables dans `src/index.css` :

```css
:root {
  --primary-blue: #3b82f6;
  --dark-blue: #1e3a8a;
  --accent-yellow: #fbbf24;
  /* Vos couleurs personnalisées */
}
```

### Polices

Modifier dans `public/index.html` :

```html
<link href="https://fonts.googleapis.com/css2?family=VotrePolice:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
```

Puis dans `src/index.css` :

```css
body {
  font-family: 'VotrePolice', sans-serif;
}
```

### Animations

Créer des animations personnalisées dans les fichiers CSS :

```css
@keyframes votreAnimation {
  from {
    /* état initial */
  }
  to {
    /* état final */
  }
}

.votre-element {
  animation: votreAnimation 0.5s ease-out;
}
```

## ⚡ Ajout de Nouvelles Fonctionnalités

### 1. Système d'Authentification

```javascript
// src/components/Auth/Login.js
import { useState } from 'react';

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    // Logique d'authentification
  };

  return (
    // Formulaire de connexion
  );
};
```

### 2. Recherche de Ressources

```javascript
// src/components/Search/SearchBar.js
import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';

const SearchBar = () => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    // Logique de recherche
  };

  return (
    <div className="search-bar">
      <input 
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Rechercher..."
      />
      <button onClick={handleSearch}>
        <BsSearch />
      </button>
    </div>
  );
};
```

### 3. Téléchargement de Ressources

```javascript
// src/utils/download.js
export const downloadResource = async (resourceId) => {
  try {
    const response = await fetch(`/api/resources/${resourceId}/download`);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'resource.pdf';
    a.click();
  } catch (error) {
    console.error('Erreur de téléchargement:', error);
  }
};
```

## 🚀 Optimisation

### 1. Lazy Loading

```javascript
import { lazy, Suspense } from 'react';

const Statistiques = lazy(() => import('./components/Statistiques'));

function App() {
  return (
    <Suspense fallback={<div>Chargement...</div>}>
      <Statistiques />
    </Suspense>
  );
}
```

### 2. Optimisation des Images

```bash
# Installer sharp pour l'optimisation
npm install sharp

# Compresser les images avant le build
```

### 3. Code Splitting

```javascript
// React.lazy pour diviser le code
const Component = lazy(() => import('./Component'));
```

### 4. Performance

```javascript
// Utiliser React.memo pour éviter les re-renders inutiles
import { memo } from 'react';

const DomaineCard = memo(({ domaine }) => {
  return (
    // Contenu du composant
  );
});
```

## 📦 Déploiement

### Build de Production

```bash
npm run build
```

### Déploiement sur Vercel

```bash
# Installer Vercel CLI
npm install -g vercel

# Déployer
vercel
```

### Déploiement sur Netlify

```bash
# Installer Netlify CLI
npm install -g netlify-cli

# Déployer
netlify deploy --prod
```

### Variables d'Environnement

Créer un fichier `.env` :

```env
REACT_APP_API_URL=https://api.bnn-esursi.cd
REACT_APP_API_KEY=votre_clé_api
```

Utiliser dans le code :

```javascript
const apiUrl = process.env.REACT_APP_API_URL;
```

## 🔧 Scripts Disponibles

```bash
# Démarrage du serveur de développement
npm start

# Build de production
npm run build

# Tests
npm test

# Analyse du bundle
npm run build && npx source-map-explorer 'build/static/js/*.js'
```

## 📊 Monitoring et Analytics

### Google Analytics

```javascript
// src/utils/analytics.js
export const initGA = () => {
  // Initialiser GA
};

export const logPageView = () => {
  // Logger les vues de page
};
```

## 🐛 Debugging

### React DevTools

Installer l'extension React DevTools pour Chrome/Firefox

### Console Logs

```javascript
// Mode développement uniquement
if (process.env.NODE_ENV === 'development') {
  console.log('Debug info:', data);
}
```

## 📝 Bonnes Pratiques

1. **Nommage des fichiers** : PascalCase pour les composants, camelCase pour les utils
2. **Structure des dossiers** : Grouper par fonctionnalité
3. **Commentaires** : Documenter les fonctions complexes
4. **Tests** : Écrire des tests pour les composants critiques
5. **Git** : Commits atomiques avec messages clairs
6. **Code Review** : Toujours faire relire le code avant merge

## 🆘 Support

Pour toute question ou problème :

- 📧 Email : dev@bnn-esursi.cd
- 📖 Documentation : https://docs.bnn-esursi.cd
- 💬 Chat : https://chat.bnn-esursi.cd

---

**Fait avec ❤️ par l'équipe CGIIBNN–ESURSI**
