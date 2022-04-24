import React, { createContext, useState } from "react";

export const CharactersContext = createContext([]) as any;

interface ICharactersContext {
  children: any;
}

export const CharactersContextProvider = ({ children }: ICharactersContext) => {
  const [characters, setCharacters] = useState([]);

  return (
    <CharactersContext.Provider value={[characters, setCharacters]}>
      {children}
    </CharactersContext.Provider>
  );
};
