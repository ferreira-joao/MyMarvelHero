import React, { useState, useEffect } from "react";

import { Container } from "./styles";

import { MainHeader } from "../../components/MainHeader";

import { getCharacters } from "../../services/apiCalls";

export function Home() {
  const [characters, setCharacters] = useState([]);

  const handleCharacters = async () => {
    const list = await getCharacters();

    setCharacters(list);
  };

  useEffect(() => {
    console.log(characters);
  }, []);

  return (
    <Container>
      <MainHeader />
    </Container>
  );
}
