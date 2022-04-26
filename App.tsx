import React from "react";

import Routes from "./src/routes";

import { CharactersContextProvider } from "./src/contexts/CharactersContext";

function App() {
  return (
    <CharactersContextProvider>
      <Routes />
    </CharactersContextProvider>
  );
}

export default App;
