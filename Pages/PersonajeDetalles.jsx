import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { esFavorito, toggleFavorito } from "../src/utils/favoritos";
import { useTranslation } from "react-i18next";

function PersonajeDetalles() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [personaje, setPersonaje] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [favorito, setFavorito] = useState(false);
  const { t, i18n } = useTranslation();

  const [imagenPrincipal, setImagenPrincipal] = useState("");

  useEffect(() => {
    const obtenerDetalle = async () => {
      try {
        const baseUrl =
          i18n.language === "en"
            ? "https://681ed772c1c291fa66354777.mockapi.io/api/v2/DetallesIngles"
            : "https://6813c886225ff1af16272bf1.mockapi.io/api/v1/Detalles";

        const res = await fetch(`${baseUrl}/${id}`);

        if (!res.ok) {
          navigate("/404", { replace: true });
          return;
        }

        const data = await res.json();

        if (!data || !data.id) {
          navigate("/404", { replace: true });
          return;
        }

        setPersonaje(data);
        setFavorito(esFavorito(data.id));
        setImagenPrincipal(data.foto1);
      } catch (error) {
        console.error("Error al obtener el personaje:", error);
        navigate("/404", { replace: true });
      } finally {
        setCargando(false);
      }
    };

    obtenerDetalle();
  }, [id, i18n.language]);

  const manejarFavorito = () => {
    toggleFavorito(personaje.id);
    setFavorito(!favorito);
  };

  if (cargando) return <p>{t("cargando")}</p>;

  if (!personaje) return <p>{t("noPersonaje")}</p>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 bg-white rounded-lg shadow-md">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <img
            src={imagenPrincipal}
            alt="Imagen principal"
            className="w-full h-[400px] object-contain rounded shadow mb-4"
          />

          <div className="flex gap-2">
            {[personaje.foto1, personaje.foto2, personaje.foto3].map(
              (foto, index) => (
                <img
                  key={index}
                  src={foto}
                  alt={`Miniatura ${index + 1}`}
                  onClick={() => setImagenPrincipal(foto)}
                  className="w-20 h-20 object-cover rounded cursor-pointer border-2 hover:border-red-500 transition"
                />
              )
            )}
          </div>
        </div>

        <div className="w-full md:w-1/2 space-y-3 text-gray-700 leading-relaxed">
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-4xl font-extrabold text-gray-800">
              {personaje.nombre}
            </h1>
            <button
              onClick={manejarFavorito}
              title="Agregar a favoritos"
              className="text-yellow-500 text-3xl hover:scale-110 transition-transform"
            >
              {favorito ? "⭐" : "☆"}
            </button>
          </div>

          <p className="mt-5">
            <span className="font-semibold">{t("nombreReal")}</span>{" "}
            {personaje.nombreReal}
          </p>
          <p>
            <span className="font-semibold">{t("descripcion")}</span>{" "}
            {personaje.descripcion}
          </p>
          <div className="bg-gray-800 text-gray-100 rounded-lg p-4 shadow-sm grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <p>
              <span className="font-semibold">{t("primeraAparicion")}</span>{" "}
              {personaje.primeraAparicion}
            </p>
            <p>
              <span className="font-semibold">{t("colorPelo")}</span>{" "}
              {personaje.colorPelo}
            </p>
            <p>
              <span className="font-semibold">{t("colorOjos")}</span>{" "}
              {personaje.colorOjos}
            </p>
            <p>
              <span className="font-semibold">{t("altura")}</span>{" "}
              {personaje.altura}
            </p>
            <p>
              <span className="font-semibold">{t("peso")}</span>{" "}
              {personaje.peso}
            </p>
            <p className="sm:col-span-2">
              <span className="font-semibold">{t("poderes")}</span>{" "}
              {personaje.poderes}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonajeDetalles;
