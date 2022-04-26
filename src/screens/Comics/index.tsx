import React, { useState, useEffect } from "react";

import { FlatList } from "react-native";

import { RouteProp, useRoute } from "@react-navigation/native";

import { Container } from "./styles";

import { getComics } from "../../services/apiCalls";

import { IRoute } from "../../routes";

import { renderComicCard } from "../../utils/renderComicCard";

export function Comics() {
  const [comics, setComics] = useState([]);

  //its needed to pass the props from the lib with the type created in routes
  const route = useRoute<RouteProp<IRoute, "Comics">>();

  const { characterId } = route.params;

  const handleComics = async () => {
    const list = await getComics(characterId);

    setComics(list);
  };

  useEffect(() => {
    handleComics();
  }, []);

  return (
    <Container>
      <FlatList
        data={comics}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderComicCard}
      />
    </Container>
  );
}
