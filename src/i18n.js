import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      titulo: 'Marvel Wiki',
      favoritos: 'Favorites',
      categoria: 'Category',
      idioma: 'Language',
      buscar: 'Search character...',
      noFavoritos: 'You don’t have favorite characters yet.',
      cargando: 'Loading favorite characters...',
      noPersonaje: 'The character was not found',
      verMas: 'View more',
      Heroes: 'Hero',
      Villanos: 'Villain',
      nombreReal: "Real name:",
      descripcion: "Description:",
      primeraAparicion: "First appearance:",
      colorPelo: "Hair color:",
      colorOjos: "Eye color:",
      altura: "Height:",
      peso: "Weight:",
      poderes: "Powers:",
      personajes: "Characters",
      inicio: "Home"
    }
  },
  es: {
    translation: {
      titulo: 'Marvel Wiki',
      favoritos: 'Favoritos',
      categoria: 'Categorías',
      idioma: 'Idioma',
      buscar: 'Buscar personaje...',
      noFavoritos: 'No tenés personajes favoritos aún.',
      cargando: 'Cargando personajes favoritos...',
      noPersonaje: 'No se encontró el personaje',
      verMas: 'Ver más',
      heroe: 'Héroe',
      villano: 'Villano',
      nombreReal: "Nombre real:",
      descripcion: "Descripción:",
      primeraAparicion: "Primera aparición:",
      colorPelo: "Color de cabello:",
      colorOjos: "Color de ojos:",
      altura: "Altura:",
      peso: "Peso:",
      poderes: "Poderes:",
      personajes: "Personajes",
      inicio: "Inicio"
    }
  }
};

const savedLanguage = localStorage.getItem('idioma') || 'es';

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLanguage,
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
