import { useState } from "react";
import useClima from "../hooks/useClima";

const Formulario = () => {
  const [alerta, setAlerta] = useState("");

  const { busqueda, datosBusqueda } = useClima();

  const { ciudad, pais } = busqueda;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(busqueda).includes("")) {
      setAlerta("Todos los campos son obligatorios");
      return;
    }
  };
  return (
    <div className="contenedor">
      {alerta && <p>{alerta}</p>}
      <form onSubmit={handleSubmit}>
        <div className="campo">
          <label htmlFor="ciudad">Ciudad</label>
          <input
            type="text"
            id="ciudad"
            name="ciudad"
            onChange={datosBusqueda}
            value={ciudad}
          />
        </div>
        <div className="campo">
          <label htmlFor="pais">País</label>
          <select name="pais" id="pais" onChange={datosBusqueda} value={pais}>
            <option value=""> Seleccione un país </option>
            <option value="US">Estados unidos</option>
            <option value="UY">Uruguay</option>
            <option value="MX">Mexico</option>
            <option value="AR">Argentina</option>
          </select>
        </div>
        <input type="submit" value="Consultar clima" />
      </form>
    </div>
  );
};

export default Formulario;
