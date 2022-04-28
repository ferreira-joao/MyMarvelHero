import React, { useState, useEffect } from "react";

import { FlatList, ActivityIndicator } from "react-native";

import { RouteProp, useRoute } from "@react-navigation/native";

import { Container, EmptyText } from "./styles";

import { getComics } from "../../services/apiCalls";

import { IRoute } from "../../routes";

import { renderComicCard } from "../../utils/renderComicCard";

export function Comics() {
  const [comics, setComics] = useState([]);
  const [loading, setLoading] = useState(true);

  //its needed to pass the props from the lib with the type created in routes
  const route = useRoute<RouteProp<IRoute, "Comics">>();

  const { characterId, characterName } = route.params;

  const handleComics = async () => {
    const list = await getComics(characterId);

    setComics(list);

    setLoading(false);
  };

  useEffect(() => {
    handleComics();
  }, []);

  return (
    <Container>
      {loading ? (
        <ActivityIndicator
          style={{ marginTop: 20 }}
          size={"large"}
          color={"#FFF"}
        />
      ) : (
        <FlatList
          data={comics}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderComicCard}
          contentContainerStyle={{ padding: 20 }}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={}
          ListEmptyComponent={<EmptyText>No data found :(</EmptyText>}
        />
      )}
    </Container>
  );
}
