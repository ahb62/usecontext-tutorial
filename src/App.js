import React from "react";
import BotonCambiarData from "./components/BotonCambiarData";
import Pagina1 from "./components/Pagina1";
import Pagina2 from "./components/Pagina2";
import DataContextComponent from "./context/DataContext";




function App() {

  return (
  <>
    <DataContextComponent>
  {/* Aquí nosotros estamos envolviendo los componentes que queremos que usen los estados globables, con el componente de React desde la carpeta context.  */}

      <Pagina1 />
      <Pagina2 />
      <BotonCambiarData  />

    </DataContextComponent>
  </>
  );
}

export default App;
