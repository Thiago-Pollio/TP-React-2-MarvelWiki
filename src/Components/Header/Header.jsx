import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Header() {
  const [personajes, setPersonajes] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(null);
  const menuRef = useRef();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const cambiarIdioma = (e) => {
    const nuevoIdioma = e.target.value;
    i18n.changeLanguage(nuevoIdioma);
    localStorage.setItem("idioma", nuevoIdioma);
  };

  useEffect(() => {
    fetch("https://6813c886225ff1af16272bf1.mockapi.io/api/v1/Detalles")
      .then((r) => r.json())
      .then(setPersonajes)
      .catch(console.error);
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
        setSubMenuOpen(null);
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  const heroes = personajes.filter(
    (p) => p.categoria?.toLowerCase() === "heroes"
  );
  const villanos = personajes.filter(
    (p) => p.categoria?.toLowerCase() === "villanos"
  );

  return (
    <header
      className="bg-gray-900 text-white shadow sticky top-0 z-50"
      ref={menuRef}
    >
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-3xl p-2 absolute top-4 right-4 z-50"
        aria-label="Abrir menú"
      >
        ☰
      </button>

      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/">
            <img
              src="\mini-logo-pagina.png"
              alt="Marvel Wiki Logo"
              className="w-40 h-auto hover:opacity-90 transition-opacity"
            />
          </Link>

          <div className="relative">
            <button
              onClick={() => {
                setMenuOpen(!menuOpen);
                setSubMenuOpen(null);
              }}
              className=" border px-4 py-2 rounded hover:bg-red-500"
            >
              {t("categoria")}
            </button>

            {menuOpen && (
              <ul className="absolute text-black border shadow-md w-40 z-50 bg-white transition-all duration-300 origin-top scale-100">
                {["Heroes", "Villanos"].map((cat) => (
                  <li key={cat}>
                    <button
                      onClick={() =>
                        setSubMenuOpen(subMenuOpen === cat ? null : cat)
                      }
                      className="w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      {cat === "heroe" ? "" : ""}
                      {t(cat)}
                    </button>
                    {subMenuOpen === cat && (
                      <ul className="bg-gray-100 text-black">
                        {(cat === "Heroes" ? heroes : villanos).map((p) => (
                          <li key={p.id}>
                            <button
                              onClick={() => navigate(`/personaje/${p.id}`)}
                              className="w-full text-left px-4 py-1 hover:bg-gray-200"
                            >
                              {p.nombre}
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <img
            src={
              i18n.language === "es"
                ? "/Flag_of_the_United_States.svg.png"
                : "/Flag_of_Argentina.svg.png"
            }
            alt={
              i18n.language === "es" ? "Cambiar a inglés" : "Cambiar a español"
            }
            title={
              i18n.language === "es" ? "Switch to English" : "Cambiar a Español"
            }
            className="w-14 h-auto cursor-pointer rounded border-2 border-black"
            onClick={() => {
              const nuevoIdioma = i18n.language === "es" ? "en" : "es";
              i18n.changeLanguage(nuevoIdioma);
              localStorage.setItem("idioma", nuevoIdioma);
            }}
          />

          <Link
            to="/favoritos"
            className="ml-4 mb-1 text-3xl hover:text-yellow-400"
          >
            ★
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
