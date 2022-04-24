import React from "react";

import { Home } from "./src/screens/Home";

import { CharactersContextProvider } from "./src/contexts/CharactersContext";

function App() {
  return (
    <CharactersContextProvider>
      <Home />
    </CharactersContextProvider>
  );
}

export default App;
