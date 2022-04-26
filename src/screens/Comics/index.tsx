import React, { useState, useEffect } from "react";

import { RouteProp, useRoute } from "@react-navigation/native";

import { Container } from "./styles";

import { getComics } from "../../services/apiCalls";

import { IRoute } from "../../routes";

export function Comics() {
  const [comics, setComics] = useState([]);

  const route = useRoute<RouteProp<IRoute, "Comics">>();

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
