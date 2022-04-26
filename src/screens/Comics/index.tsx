import React, { useState, useEffect } from "react";

import { useRoute } from "@react-navigation/native";

import { Container } from "./styles";

import { getComics } from "../../services/apiCalls";

export function Comics() {
  const [comics, setComics] = useState([]);

  const route = useRoute();

  const { characterId } = route.params;

  const handleComics = async () => {
    const list = await getComics(characterId);

    setComics(list);
  };

  useEffect(() => {
    handleComics();
  }, []);

  return <Container></Container>;
}
