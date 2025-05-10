import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Error404() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-6xl font-extrabold text-red-600 mb-4">404</h1>
        <p className="text-xl text-gray-700 mb-6">
          {t("noPersonaje") || "El personaje no existe."}
        </p>
        <Link
          className="px-6 py-2 bg-red-600 text-white font-semibold rounded hover:bg-red-700 transition"
          to="/"
        >
          {t("inicio") || "Volver al inicio"}
        </Link>
      </div>
    </div>
  );
}

export default Error404;
