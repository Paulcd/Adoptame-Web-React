// data.js

// Obtener la ruta base del archivo actual
const baseURL = import.meta.url.slice(0, import.meta.url.lastIndexOf('/') + 1);

export const list = [
  {
    id: 1,
    name: 'Cachorro',
    // Construir la ruta absoluta a la imagen
    image: `${baseURL}../../assets/Cachorro.jpg`,
  },
  {
    id: 2,
    name: 'Gata',
    image: `${baseURL}../../assets/Gata.jpg`,
  },
  {
    id: 3,
    name: 'Perros',
    image: `${baseURL}../../assets/Perros.jpg`,
  },
];
