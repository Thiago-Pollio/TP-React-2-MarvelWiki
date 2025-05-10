import React from "react";
import { t } from "i18next";

function Buscador({ terminoBusqueda, setTerminoBusqueda }) {
  return (
    <input
      type="text"
      placeholder={t("buscar")}
      className="border border-gray-900 rounded px-4 py-2 w-80 focus:outline-none focus:ring-2 focus:ring-red-400"
      value={terminoBusqueda}
      onChange={(e) => setTerminoBusqueda(e.target.value)}
    />
  );
}

export default Buscador;
