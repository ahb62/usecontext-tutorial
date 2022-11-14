import React from "react";
import UserContext from "./context/UserContext";
import MoreInfo from "./components/MoreInfo";

function App() {
  const userData = 
  {
    name: "Hector",
    years: 27,
  }
  return (
    <UserContext.Provider value={userData}>
    <div>
      <h1>the UseContext tutorial</h1>
      <MoreInfo />
    </div>
    </UserContext.Provider>
  );
}

export default App;
