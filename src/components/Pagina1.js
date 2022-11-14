// Aquí, debemos importar useContext porque desde este componente queremos llamar y consumir los datos
import React, {useContext} from 'react';
// Aquí, necesitamos importar el contexto solo y puro, la cual será manejado a través de useContext
import { DataContext } from '../context/DataContext';



const Pagina1 = () => {
    // En cada componente hijo del Provider, que se quiera usar estados globales, se debe importar useContext la cual será el hook que nos permita llamar y consumir los datos desde el mismo contexto que hemos creado. 
    const {data} = useContext( DataContext );
    // Necesitamos hacer de-structuring con el useContext para llamar los datos especificos del Provider y su contexto
    return (
    <>
    <h1>Pagina 1</h1>
    <h3>
    { JSON.stringify(data, null, 2)}
    </h3>
    </>
  )
}

export default Pagina1;