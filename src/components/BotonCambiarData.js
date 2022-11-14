// Aquí, debemos importar useContext porque desde este componente queremos llamar y consumir los datos
import React, {useContext} from "react";
// Aquí, necesitamos importar el contexto solo y puro, la cual será manejado a través de useContext
import { DataContext } from "../context/DataContext";

// Estos son los datos que se actualizan al momento de usar el setState (setData) en este componente:
const data = 
{
    fullName: "Antonio Clemente",
	email: "ahb62@mail.com",
	password: "Pa$$w0rd",
	isFree: true,
	isPremium: false,
};

const BotonCambiarData = () => {
    
    // En cada componente hijo del Provider, que se quiera usar estados globales, se debe importar useContext la cual será el hook que nos permita llamar y consumir los datos desde el mismo contexto que hemos creado. 
    const {setData} = useContext(DataContext);
    // Necesitamos hacer de-structuring con el useContext para llamar los datos especificos del Provider y su contexto
	return (
		<div>
            {/*el onClick event debe usar una arrow function junto con el setState, no se puede declarar el setState sin la arrow function en este caso */}
			<button type="button" id="botonCambiarData" onClick={() => setData(data)} >
				Cambia la Data
			</button>
		</div>
	);
};

export default BotonCambiarData;
