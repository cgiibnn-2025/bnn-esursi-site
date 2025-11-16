// Utilitaires pour la BNN

/**
 * Formater un nombre avec séparateurs de milliers
 * @param {number} num - Le nombre à formater
 * @returns {string} - Le nombre formaté
 */
export const formatNumber = (num) => {
  return new Intl.NumberFormat('fr-FR').format(num);
};

/**
 * Formater une date
 * @param {Date|string} date - La date à formater
 * @param {string} format - Le format souhaité ('short', 'long', 'full')
 * @returns {string} - La date formatée
 */
export const formatDate = (date, format = 'short') => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  const options = {
    short: { year: 'numeric', month: 'numeric', day: 'numeric' },
    long: { year: 'numeric', month: 'long', day: 'numeric' },
    full: { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
  };

  return new Intl.DateTimeFormat('fr-FR', options[format]).format(dateObj);
};

/**
 * Tronquer un texte
 * @param {string} text - Le texte à tronquer
 * @param {number} maxLength - La longueur maximale
 * @returns {string} - Le texte tronqué
 */
export const truncateText = (text, maxLength = 100) => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

/**
 * Extraire les initiales d'un nom
 * @param {string} name - Le nom complet
 * @returns {string} - Les initiales
 */
export const getInitials = (name) => {
  return name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .substring(0, 2);
};

/**
 * Générer une couleur aléatoire
 * @returns {string} - Code couleur hexadécimal
 */
export const randomColor = () => {
  const colors = [
    '#3b82f6', '#1e3a8a', '#10b981', '#f59e0b', 
    '#ef4444', '#8b5cf6', '#ec4899', '#06b6d4'
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

/**
 * Valider un email
 * @param {string} email - L'email à valider
 * @returns {boolean} - true si valide
 */
export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

/**
 * Valider un mot de passe
 * @param {string} password - Le mot de passe à valider
 * @returns {object} - Objet avec isValid et message
 */
export const validatePassword = (password) => {
  const minLength = 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  if (password.length < minLength) {
    return {
      isValid: false,
      message: `Le mot de passe doit contenir au moins ${minLength} caractères`
    };
  }

  if (!hasUpperCase) {
    return {
      isValid: false,
      message: 'Le mot de passe doit contenir au moins une majuscule'
    };
  }

  if (!hasLowerCase) {
    return {
      isValid: false,
      message: 'Le mot de passe doit contenir au moins une minuscule'
    };
  }

  if (!hasNumber) {
    return {
      isValid: false,
      message: 'Le mot de passe doit contenir au moins un chiffre'
    };
  }

  if (!hasSpecialChar) {
    return {
      isValid: false,
      message: 'Le mot de passe doit contenir au moins un caractère spécial'
    };
  }

  return { isValid: true, message: 'Mot de passe valide' };
};

/**
 * Formater la taille d'un fichier
 * @param {number} bytes - La taille en bytes
 * @returns {string} - La taille formatée
 */
export const formatFileSize = (bytes) => {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
};

/**
 * Debounce une fonction
 * @param {Function} func - La fonction à debouncer
 * @param {number} delay - Le délai en ms
 * @returns {Function} - La fonction debouncée
 */
export const debounce = (func, delay = 300) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

/**
 * Throttle une fonction
 * @param {Function} func - La fonction à throttler
 * @param {number} limit - La limite en ms
 * @returns {Function} - La fonction throttled
 */
export const throttle = (func, limit = 300) => {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

/**
 * Copier du texte dans le presse-papier
 * @param {string} text - Le texte à copier
 * @returns {Promise} - Promesse résolue si succès
 */
export const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    return { success: true, message: 'Copié dans le presse-papier' };
  } catch (err) {
    return { success: false, message: 'Erreur lors de la copie' };
  }
};

/**
 * Détecter le type d'appareil
 * @returns {string} - 'mobile', 'tablet' ou 'desktop'
 */
export const getDeviceType = () => {
  const width = window.innerWidth;
  if (width < 768) return 'mobile';
  if (width < 1024) return 'tablet';
  return 'desktop';
};

/**
 * Vérifier si l'utilisateur est en ligne
 * @returns {boolean} - true si en ligne
 */
export const isOnline = () => {
  return navigator.onLine;
};

/**
 * Générer un ID unique
 * @returns {string} - ID unique
 */
export const generateId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
};

/**
 * Calculer le temps de lecture
 * @param {string} text - Le texte
 * @param {number} wordsPerMinute - Vitesse de lecture (défaut: 200)
 * @returns {number} - Temps en minutes
 */
export const calculateReadingTime = (text, wordsPerMinute = 200) => {
  const words = text.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
};

/**
 * Créer un slug à partir d'un texte
 * @param {string} text - Le texte
 * @returns {string} - Le slug
 */
export const createSlug = (text) => {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

/**
 * Gérer les erreurs API
 * @param {Error} error - L'erreur
 * @returns {string} - Message d'erreur lisible
 */
export const handleApiError = (error) => {
  if (error.response) {
    // Erreur de réponse du serveur
    const status = error.response.status;
    const messages = {
      400: 'Requête invalide',
      401: 'Non authentifié',
      403: 'Accès refusé',
      404: 'Ressource non trouvée',
      500: 'Erreur serveur',
      503: 'Service temporairement indisponible'
    };
    return messages[status] || 'Erreur inconnue';
  } else if (error.request) {
    // Pas de réponse du serveur
    return 'Aucune réponse du serveur';
  } else {
    // Erreur lors de la configuration de la requête
    return error.message || 'Erreur inconnue';
  }
};

/**
 * Formater un pourcentage de progression
 * @param {number} current - Valeur actuelle
 * @param {number} total - Valeur totale
 * @returns {number} - Pourcentage (0-100)
 */
export const calculateProgress = (current, total) => {
  if (total === 0) return 0;
  return Math.min(Math.round((current / total) * 100), 100);
};

/**
 * Grouper des éléments par propriété
 * @param {Array} array - Le tableau
 * @param {string} key - La clé de regroupement
 * @returns {Object} - Objet groupé
 */
export const groupBy = (array, key) => {
  return array.reduce((result, item) => {
    const group = item[key];
    if (!result[group]) {
      result[group] = [];
    }
    result[group].push(item);
    return result;
  }, {});
};

/**
 * Mélanger un tableau (shuffle)
 * @param {Array} array - Le tableau
 * @returns {Array} - Tableau mélangé
 */
export const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export default {
  formatNumber,
  formatDate,
  truncateText,
  getInitials,
  randomColor,
  validateEmail,
  validatePassword,
  formatFileSize,
  debounce,
  throttle,
  copyToClipboard,
  getDeviceType,
  isOnline,
  generateId,
  calculateReadingTime,
  createSlug,
  handleApiError,
  calculateProgress,
  groupBy,
  shuffleArray
};
