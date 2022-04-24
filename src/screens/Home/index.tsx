import React, { useState, useEffect } from "react";
import { FlatList } from "react-native";

import { Container } from "./styles";

import { MainHeader } from "../../components/MainHeader";

import { getCharacters } from "../../services/apiCalls";
import { renderMainCard } from "../../utils/renderMainCard";

export function Home() {
  const [characters, setCharacters] = useState();

  const handleCharactersCall = async () => {
    const list = await getCharacters();

    setCharacters(list);
  };

  useEffect(() => {
    handleCharactersCall();
  }, []);

  return (
    <Container>
      <FlatList
        data={characters}
        numColumns={2}
        renderItem={renderMainCard}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 20 }}
        ListHeaderComponent={<MainHeader />}
      />
    </Container>
  );
}
