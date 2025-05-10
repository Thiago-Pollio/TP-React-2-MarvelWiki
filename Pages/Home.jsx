import { useEffect, useState } from "react";
import Buscador from "../src/Components/Buscador/Buscador/Buscador";
import Personajes from "../src/Components/Personajes/Personajes";
import { useTranslation } from "react-i18next";

function Home({ terminoBusqueda, setTerminoBusqueda }) {
  const [personajes, setPersonajes] = useState([]);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const getPersonajes = async () => {
      const url =
        i18n.language === "es"
          ? "https://6813c886225ff1af16272bf1.mockapi.io/api/v1/Personajes"
          : "https://681ed772c1c291fa66354777.mockapi.io/api/v2/PersonajesIngles";

      const personajesRes = await fetch(url);
      const personajesParsed = await personajesRes.json();
      setPersonajes(personajesParsed);
    };

    getPersonajes();
  }, [i18n.language]);

  const personajesFiltrados = personajes.filter((p) =>
    p.nombre?.toLowerCase().includes(terminoBusqueda.toLowerCase())
  );

  return (
    <div>
      <header className="flex flex-col items-center gap-4 py-6 bg-gray-100 shadow-md mb-8">
        <img src="/logo-pagina.png" alt="Logo" className="w-50 h-auto" />

        <Buscador
          terminoBusqueda={terminoBusqueda}
          setTerminoBusqueda={setTerminoBusqueda}
        />
      </header>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4 px-4">
          {t("personajes")}
        </h2>

        {personajesFiltrados.length === 0 ? (
          <p>{t("noPersonaje")}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-x-0 ">
            {personajesFiltrados.map((personaje) => (
              <Personajes key={personaje.id} personaje={personaje} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default Home;
