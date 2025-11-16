// Configuration SEO pour la BNN
export const seoConfig = {
  title: 'BNN - Bibliothèque Nationale Numérique | CGIIBNN–ESURSI',
  description: 'La Bibliothèque Nationale Numérique (BNN) est une initiative de la CGIIBNN–ESURSI visant à offrir un accès libre et numérique aux ressources académiques, scientifiques et culturelles de la République Démocratique du Congo.',
  keywords: 'BNN, Bibliothèque Nationale Numérique, CGIIBNN, ESURSI, ESU-RDC, RDC, Congo, Enseignement Supérieur, Ressources Académiques, E-learning',
  author: 'CGIIBNN–ESURSI',
  siteUrl: 'https://bnn-esursi.cd',
  image: 'https://bnn-esursi.cd/og-image.png',
  twitterHandle: '@BNN_ESURSI',
  locale: 'fr_CD'
};

// Configuration des métadonnées par page
export const pageMetadata = {
  home: {
    title: 'Accueil - BNN | Bibliothèque Nationale Numérique',
    description: 'Explorez les ressources de la BNN pour nourrir votre savoir. Accès libre aux ressources académiques et scientifiques de la RDC.'
  },
  domaines: {
    title: 'Domaines d\'Enseignement - BNN',
    description: 'Découvrez les 10 domaines de l\'enseignement supérieur couverts par la Bibliothèque Nationale Numérique de la RDC.'
  },
  statistiques: {
    title: 'Statistiques et Analyses - BNN',
    description: 'Consultez les statistiques d\'utilisation et les analyses de la plateforme BNN en temps réel.'
  }
};

// Configuration des réseaux sociaux
export const socialMedia = {
  facebook: 'https://facebook.com/bnn.esursi',
  twitter: 'https://twitter.com/bnn_esursi',
  linkedin: 'https://linkedin.com/company/bnn-esursi',
  youtube: 'https://youtube.com/@bnn-esursi',
  instagram: 'https://instagram.com/bnn.esursi'
};

// Configuration des liens de téléchargement des apps
export const appLinks = {
  playStore: 'https://play.google.com/store/apps/details?id=cd.esursi.bnn',
  appStore: 'https://apps.apple.com/app/bnn-bibliotheque-nationale/id123456789'
};

// Configuration des partenaires
export const partnersConfig = [
  {
    name: 'Ministère ESU-RDC',
    logo: '/assets/partners/esu-rdc.png',
    url: 'https://esu.gouv.cd',
    alt: 'Ministère de l\'Enseignement Supérieur et Universitaire'
  },
  {
    name: 'CGIIBNN-ESURSI',
    logo: '/assets/partners/cgiibnn.png',
    url: 'https://cgiibnn-esursi.cd',
    alt: 'CGIIBNN-ESURSI'
  },
  {
    name: 'Airtel RDC',
    logo: '/assets/partners/airtel.png',
    url: 'https://airtel.cd',
    alt: 'Airtel RDC'
  },
  {
    name: 'AUF',
    logo: '/assets/partners/auf.png',
    url: 'https://auf.org',
    alt: 'Agence Universitaire de la Francophonie'
  },
  {
    name: 'CEDESURK',
    logo: '/assets/partners/cedesurk.png',
    url: 'https://cedesurk.cd',
    alt: 'CEDESURK'
  }
];

// Configuration des domaines d'enseignement
export const domainesConfig = [
  {
    id: 'sciences',
    icon: 'BsFlask',
    title: 'Sciences',
    description: 'Physique, Chimie, Biologie et sciences fondamentales',
    slug: 'sciences'
  },
  {
    id: 'lettres',
    icon: 'BsBook',
    title: 'Lettres',
    description: 'Littérature, Langues, Philosophie et Sciences humaines',
    slug: 'lettres'
  },
  {
    id: 'medecine',
    icon: 'BsHeartPulse',
    title: 'Médecine',
    description: 'Sciences médicales, Pharmacie et Sciences de la santé',
    slug: 'medecine'
  },
  {
    id: 'droit',
    icon: 'BsGavel',
    title: 'Droit',
    description: 'Sciences juridiques, Droit public et privé',
    slug: 'droit'
  },
  {
    id: 'economie',
    icon: 'BsGraphUp',
    title: 'Économie',
    description: 'Gestion, Économie, Finance et Commerce',
    slug: 'economie'
  },
  {
    id: 'ingenierie',
    icon: 'BsGear',
    title: 'Ingénierie',
    description: 'Génie civil, Mécanique, Électrique et Industriel',
    slug: 'ingenierie'
  },
  {
    id: 'pedagogie',
    icon: 'BsPeople',
    title: 'Pédagogie',
    description: 'Sciences de l\'éducation et Formation des enseignants',
    slug: 'pedagogie'
  },
  {
    id: 'agriculture',
    icon: 'BsTree',
    title: 'Agriculture',
    description: 'Agronomie, Vétérinaire et Développement rural',
    slug: 'agriculture'
  },
  {
    id: 'arts',
    icon: 'BsPalette',
    title: 'Arts',
    description: 'Beaux-arts, Musique, Théâtre et Arts appliqués',
    slug: 'arts'
  },
  {
    id: 'technologies',
    icon: 'BsCpu',
    title: 'Technologies',
    description: 'Informatique, Télécommunications et Numérique',
    slug: 'technologies'
  }
];

// Configuration de contact
export const contactConfig = {
  email: 'contact@bnn-esursi.cd',
  phone: '+243 XX XXX XXXX',
  address: 'Kinshasa, République Démocratique du Congo',
  supportEmail: 'support@bnn-esursi.cd',
  infoEmail: 'info@bnn-esursi.cd'
};

export default {
  seoConfig,
  pageMetadata,
  socialMedia,
  appLinks,
  partnersConfig,
  domainesConfig,
  contactConfig
};
