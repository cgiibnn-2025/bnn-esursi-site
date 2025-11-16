# 🚀 Démarrage Rapide - BNN Portail

## ⚡ Installation en 3 étapes

### 1️⃣ Cloner et installer

```bash
cd /Users/cgiibnn/Desktop/PROJECTS/bnn-portail-esursi
npm install
```

### 2️⃣ Démarrer le serveur

```bash
npm start
```

Le site sera accessible sur : **http://localhost:3006**

### 3️⃣ C'est tout ! 🎉

## 📂 Structure du Projet

```
bnn-portail-esursi/
├── src/
│   ├── components/         # Composants React
│   │   ├── Header.js       # Navigation principale
│   │   ├── Hero.js         # Section d'accueil
│   │   ├── Domaines.js     # 10 domaines ESU
│   │   ├── Statistiques.js # Graphiques et métriques
│   │   ├── TopLecteurs.js  # Classement lecteurs
│   │   ├── Partenaires.js  # Logos partenaires
│   │   └── Footer.js       # Pied de page
│   ├── config/             # Configuration
│   ├── constants/          # Constantes globales
│   ├── utils/              # Fonctions utilitaires
│   └── App.js              # Composant principal
├── public/                 # Fichiers statiques
├── README_BNN.md           # Documentation complète
└── GUIDE_DEV.md           # Guide développeur
```

## 🎨 Personnalisation Rapide

### Changer les couleurs

Fichier : `src/index.css`

```css
:root {
  --primary-blue: #3b82f6;    /* Votre couleur */
  --accent-yellow: #fbbf24;   /* Votre accent */
}
```

### Modifier le contenu Hero

Fichier : `src/components/Hero.js`

```javascript
// Ligne 8-13 : Modifier le texte de présentation
<h1 className="hero-title">Votre Titre</h1>
<p className="hero-description">Votre description...</p>
<p className="hero-slogan">"Votre slogan"</p>
```

### Ajouter un domaine

Fichier : `src/components/Domaines.js`

```javascript
// Ajouter dans le tableau domaines[] (ligne 14+)
{
  icon: <VotreIcone />,
  title: "Nouveau Domaine",
  description: "Description"
}
```

### Mettre à jour les statistiques

Fichier : `src/components/Statistiques.js`

```javascript
// Ligne 7-12 : Modifier les données
const dataTelechargements = [
  { jour: '1-7 Nov', telechargements: 1250 },
  // Vos données ici
];
```

## 🛠️ Commandes Utiles

```bash
# Démarrer en développement
npm start

# Build pour production
npm run build

# Lancer les tests
npm test

# Vérifier le code
npm run lint (si configuré)
```

## 📱 Responsive

Le site est automatiquement responsive pour :

- 📱 **Mobile** : 320px - 768px
- 📱 **Tablette** : 768px - 1024px
- 💻 **Desktop** : 1024px+

## 🎯 Sections de la Page

### ✅ Ce qui est inclus :

1. ✅ **Header** - Navigation sticky avec menu mobile
2. ✅ **Hero** - Présentation + CTA + Visuels multi-plateformes
3. ✅ **Domaines** - 10 cartes des domaines ESU avec icônes
4. ✅ **Statistiques** - 4 métriques + 2 graphiques interactifs
5. ✅ **Top Lecteurs** - Classement des 5 meilleurs lecteurs
6. ✅ **Partenaires** - 6 logos avec hover effects
7. ✅ **Footer** - Liens, contact, réseaux sociaux

### 📊 Données affichées :

- **Téléchargements** : 7,740 (+24%)
- **Consultations** : 26,300 (+18%)
- **Utilisateurs actifs** : 3,450 (+32%)
- **Ressources** : 12,890 (+8%)

## 🎨 Technologies

- ⚛️ React 19.2.0
- 📊 Recharts (graphiques)
- 🎨 React Icons
- 💅 CSS3 moderne

## 📚 Documentation

- **README complet** : `README_BNN.md`
- **Guide développeur** : `GUIDE_DEV.md`
- **Configuration** : `src/config/siteConfig.js`
- **Constantes** : `src/constants/index.js`
- **Utilitaires** : `src/utils/helpers.js`

## 🐛 Problèmes Courants

### Port déjà utilisé ?

```bash
# Changer le port dans package.json
"start": "PORT=3007 react-scripts start"
```

### Erreur d'installation ?

```bash
# Supprimer node_modules et réinstaller
rm -rf node_modules package-lock.json
npm install
```

### Page blanche ?

```bash
# Vérifier la console du navigateur (F12)
# Redémarrer le serveur
npm start
```

## 🌐 Déploiement Rapide

### Vercel (Recommandé)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Build manuel

```bash
npm run build
# Dossier build/ à déployer
```

## 📧 Support

- Email : **contact@bnn-esursi.cd**
- Support : **support@bnn-esursi.cd**

## ✨ Prochaines Étapes

1. 🔐 Ajouter l'authentification
2. 🗄️ Connecter à une base de données
3. 🔍 Implémenter la recherche
4. 📥 Système de téléchargement
5. 📱 Développer l'app mobile

---

## 🎉 Félicitations !

Votre portail BNN est prêt ! 

**Fait avec ❤️ pour l'éducation en RDC**

© CGIIBNN–ESURSI 2025
