import { createContext, useState } from "react";

const ClimaContext = createContext();

//prettier-ignore
const ClimaProvider = ({children}) => {
    
    const [busqueda, setBusqueda] = useState({
        ciudad: '',
        pais: ''
    })

    const datosBusqueda = e => {
        setBusqueda({
            ...busqueda,[e.target.name]:e.target.value
        })
    }
    const consultarClima = datos => {
        console.log(datos);
    }
    
    return (
        <ClimaContext.Provider
        value={{busqueda, datosBusqueda}}
        >
            {children}
        </ClimaContext.Provider>
    )
}

export { ClimaProvider };

export default ClimaContext;
