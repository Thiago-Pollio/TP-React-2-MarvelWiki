import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Personajes({ personaje }) {
  console.log("Personaje en tarjeta:", personaje);
  const { t, i18n } = useTranslation();

  return (
    <div className="bg-white shadow-xl rounded-xl overflow-hidden transition-transform hover:scale-105 w-110 ">
      <img
        src={personaje.imagen}
        alt={`Imagen de ${personaje.nombre}`}
        className="w-full h-80 object-cover object-[50%_51%] "
      />

      <div className="p-4 flex flex-col justify-between h-52">
        <h3 className="text-xl font-bold text-gray-800 mb-1">
          {personaje.nombre}
        </h3>
        <p className="text-gray-600 text-sm mb-2 line-clamp-6">
          {personaje.descripcion}
        </p>

        <Link
          to={`/personaje/${personaje.id}`}
          className=" self-start px-4 py-2 bg-red-600 text-white text-sm font-medium rounded hover:bg-red-700 transition-colors"
        >
          {t("verMas")}
        </Link>
      </div>
    </div>
  );
}

export default Personajes;
