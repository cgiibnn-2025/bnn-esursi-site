// Constantes globales pour la BNN

// Couleurs du thème
export const COLORS = {
  primary: {
    blue: '#3b82f6',
    darkBlue: '#1e3a8a',
    lightBlue: '#93c5fd'
  },
  accent: {
    yellow: '#fbbf24',
    orange: '#f59e0b'
  },
  semantic: {
    success: '#10b981',
    error: '#ef4444',
    warning: '#f59e0b',
    info: '#3b82f6'
  },
  text: {
    primary: '#1e293b',
    secondary: '#64748b',
    tertiary: '#94a3b8'
  },
  background: {
    light: '#f8fafc',
    white: '#ffffff',
    dark: '#0f172a'
  }
};

// Breakpoints pour le responsive
export const BREAKPOINTS = {
  mobile: '480px',
  tablet: '768px',
  desktop: '1024px',
  wide: '1280px',
  ultrawide: '1536px'
};

// Durées d'animation
export const ANIMATION_DURATION = {
  fast: '0.2s',
  normal: '0.3s',
  slow: '0.5s',
  verySlow: '0.8s'
};

// Tailles de police
export const FONT_SIZES = {
  xs: '0.75rem',    // 12px
  sm: '0.875rem',   // 14px
  base: '1rem',     // 16px
  lg: '1.125rem',   // 18px
  xl: '1.25rem',    // 20px
  '2xl': '1.5rem',  // 24px
  '3xl': '1.875rem', // 30px
  '4xl': '2.25rem', // 36px
  '5xl': '3rem',    // 48px
  '6xl': '3.75rem'  // 60px
};

// Poids de police
export const FONT_WEIGHTS = {
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800
};

// Espacements
export const SPACING = {
  xs: '0.25rem',   // 4px
  sm: '0.5rem',    // 8px
  md: '1rem',      // 16px
  lg: '1.5rem',    // 24px
  xl: '2rem',      // 32px
  '2xl': '3rem',   // 48px
  '3xl': '4rem',   // 64px
  '4xl': '6rem'    // 96px
};

// Rayons de bordure
export const BORDER_RADIUS = {
  none: '0',
  sm: '0.25rem',   // 4px
  md: '0.5rem',    // 8px
  lg: '0.75rem',   // 12px
  xl: '1rem',      // 16px
  '2xl': '1.5rem', // 24px
  full: '9999px'
};

// Ombres
export const SHADOWS = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
};

// Z-index
export const Z_INDEX = {
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modalBackdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070
};

// Transitions
export const TRANSITIONS = {
  all: 'all 0.3s ease',
  transform: 'transform 0.3s ease',
  opacity: 'opacity 0.3s ease',
  color: 'color 0.3s ease',
  background: 'background 0.3s ease'
};

// Routes
export const ROUTES = {
  home: '/',
  about: '/about',
  domains: '/domains',
  resources: '/resources',
  statistics: '/statistics',
  contact: '/contact',
  login: '/login',
  register: '/register',
  profile: '/profile',
  search: '/search'
};

// API Endpoints (à utiliser avec REACT_APP_API_URL)
export const API_ENDPOINTS = {
  auth: {
    login: '/auth/login',
    register: '/auth/register',
    logout: '/auth/logout',
    refresh: '/auth/refresh'
  },
  resources: {
    list: '/resources',
    detail: '/resources/:id',
    download: '/resources/:id/download',
    search: '/resources/search'
  },
  users: {
    profile: '/users/profile',
    topReaders: '/users/top-readers',
    statistics: '/users/statistics'
  },
  domains: {
    list: '/domains',
    detail: '/domains/:id',
    resources: '/domains/:id/resources'
  },
  statistics: {
    downloads: '/statistics/downloads',
    views: '/statistics/views',
    users: '/statistics/users'
  }
};

// Messages d'erreur
export const ERROR_MESSAGES = {
  network: 'Erreur de connexion au réseau',
  authentication: 'Erreur d\'authentification',
  notFound: 'Ressource non trouvée',
  serverError: 'Erreur serveur',
  unauthorized: 'Accès non autorisé',
  validation: 'Erreur de validation des données',
  generic: 'Une erreur est survenue'
};

// Messages de succès
export const SUCCESS_MESSAGES = {
  login: 'Connexion réussie',
  register: 'Inscription réussie',
  download: 'Téléchargement réussi',
  update: 'Mise à jour réussie',
  delete: 'Suppression réussie',
  upload: 'Envoi réussi'
};

// Limites et pagination
export const PAGINATION = {
  defaultPageSize: 20,
  pageSizeOptions: [10, 20, 50, 100],
  maxPageSize: 100
};

// Formats de fichiers acceptés
export const FILE_FORMATS = {
  documents: ['.pdf', '.doc', '.docx', '.txt'],
  images: ['.jpg', '.jpeg', '.png', '.gif', '.svg'],
  videos: ['.mp4', '.avi', '.mov', '.wmv'],
  audio: ['.mp3', '.wav', '.ogg']
};

// Tailles maximales de fichiers (en bytes)
export const MAX_FILE_SIZES = {
  document: 10 * 1024 * 1024, // 10MB
  image: 5 * 1024 * 1024,     // 5MB
  video: 100 * 1024 * 1024,   // 100MB
  audio: 10 * 1024 * 1024     // 10MB
};

// Langues disponibles
export const LANGUAGES = {
  fr: { code: 'fr', name: 'Français', flag: '🇫🇷' },
  en: { code: 'en', name: 'English', flag: '🇬🇧' },
  ln: { code: 'ln', name: 'Lingala', flag: '🇨🇩' },
  sw: { code: 'sw', name: 'Swahili', flag: '🇨🇩' }
};

// Durée de cache (en secondes)
export const CACHE_DURATION = {
  short: 60,        // 1 minute
  medium: 300,      // 5 minutes
  long: 3600,       // 1 heure
  veryLong: 86400   // 24 heures
};

// Rôles utilisateur
export const USER_ROLES = {
  admin: 'admin',
  moderator: 'moderator',
  teacher: 'teacher',
  student: 'student',
  guest: 'guest'
};

// Statuts de ressources
export const RESOURCE_STATUS = {
  draft: 'draft',
  pending: 'pending',
  published: 'published',
  archived: 'archived'
};

export default {
  COLORS,
  BREAKPOINTS,
  ANIMATION_DURATION,
  FONT_SIZES,
  FONT_WEIGHTS,
  SPACING,
  BORDER_RADIUS,
  SHADOWS,
  Z_INDEX,
  TRANSITIONS,
  ROUTES,
  API_ENDPOINTS,
  ERROR_MESSAGES,
  SUCCESS_MESSAGES,
  PAGINATION,
  FILE_FORMATS,
  MAX_FILE_SIZES,
  LANGUAGES,
  CACHE_DURATION,
  USER_ROLES,
  RESOURCE_STATUS
};
