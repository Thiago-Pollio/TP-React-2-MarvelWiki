export const getFavoritos = () => {
  const favs = localStorage.getItem("favoritos");
  return favs ? JSON.parse(favs) : [];
};

export const toggleFavorito = (id) => {
  if (!id) return false;

  const favs = getFavoritos().filter(Boolean);
  const existe = favs.includes(id);
  const nuevosFavs = existe
    ? favs.filter((favId) => favId !== id)
    : [...favs, id];

  localStorage.setItem("favoritos", JSON.stringify(nuevosFavs));
  return !existe;
};

export const esFavorito = (id) => {
  return getFavoritos().includes(id);
};
