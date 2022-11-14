// Aquí necesitamos llamar al hook que nos permite crear un contexto, y adicional usamos un useState la cual nos permitirá manejar los cambios de nuestros estados.
import React, { createContext, useState } from "react";

// Aquí comenzamos a declarar una variable la cual contiene createContext(); necesario para inicializar nuestro contexto en la aplicación, esta variable debe exportarse
export const DataContext = createContext();



// Estos datos son los datos iniciales que contendrá el state
const dataFixed = {
	fullName: "Héctor Briceño",
	email: "ahb62@mail.com",
	password: "Pa$$w0rd",
	isFree: false,
	isPremium: true,
};


// Aquí comenzamos a crear nuestro componente Provider, debemos pasarle un children mediante de-structuring y props, y ese objeto children estará dentro de nuestro componente Provider. 
const DataContextComponent = ({ children }) => {

    // Aquí declaramos un useState, el state y el setState son enviados como valores en el Provider para que puedan ser consumidos por medio de useContext();
	const [data, setData] = useState(dataFixed);
	return(
        <>
            {/* Aquí, estamos metiendo dentro del provider, el children de props, y estamos pasando un value con todos los datos que queremos compartir de manera global. Debemos compartirlo como un objeto. Se debe usar como componente el nombre de la variable que almacena la creación del contexto, seguido de un punto "." y la palabra clave Provider */}
        <DataContext.Provider value={{
            data,
            setData
        }}>{children}</DataContext.Provider>;
        
        </>
    ) 
};


// Exportamos el componente de React porque necesitamos que este componente envuelva según su grado de jerarquía, a los demás componentes de la aplicación con la cual se compartirán los estados globales. Este componente se importa en el directorio raiz de nuestra aplicación, en este caso, en App.js 
export default DataContextComponent;
