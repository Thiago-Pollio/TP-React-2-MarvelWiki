import { useEffect, useState } from "react";
import { getFavoritos } from "../src/utils/favoritos";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Favoritos = () => {
  const [favoritos, setFavoritos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const fetchFavoritos = async () => {
      const favIds = getFavoritos();

      const baseUrl =
        i18n.language === "en"
          ? "https://681ed772c1c291fa66354777.mockapi.io/api/v2/PersonajesIngles"
          : "https://6813c886225ff1af16272bf1.mockapi.io/api/v1/Personajes";

      try {
        const personajesFav = await Promise.all(
          favIds.map(async (id) => {
            const res = await fetch(`${baseUrl}/${id}`);
            if (!res.ok) throw new Error("Error al buscar personaje");
            return await res.json();
          })
        );
        setFavoritos(personajesFav);
      } catch (error) {
        console.error("Error al cargar personajes favoritos:", error);
      } finally {
        setCargando(false);
      }
    };

    fetchFavoritos();
  }, [i18n.language]);

  if (cargando) {
    return <p className="text-center mt-6">{t("cargando")}</p>;
  }

  if (favoritos.length === 0) {
    return <p className="text-center mt-6 text-gray-500">{t("noFavoritos")}</p>;
  }

  return (
    <div>
      <h2 className="text-3xl font-semibold text-gray-800 mb-2 mt-8 px-4">
        ⭐ {t("favoritos")}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {favoritos.map((personaje) => (
          <div key={personaje.id} className="bg-white p-4 rounded shadow-md">
            <img
              src={personaje.imagen}
              alt={personaje.nombre}
              className="w-full h-64 object-cover rounded mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {personaje.nombre}
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              {personaje.descripcion}
            </p>
            <Link
              to={`/personaje/${personaje.id}`}
              className="px-4 py-2 bg-blue-600 text-white rounded text-sm hover:bg-blue-700 transition"
            >
              {t("verMas")}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favoritos;
