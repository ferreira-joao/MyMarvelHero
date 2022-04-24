import React, { useContext } from "react";
import { FlatList } from "react-native";

import { Container } from "./styles";

import { MainHeader } from "../../components/MainHeader";

import { renderMainCard } from "../../utils/renderMainCard";

import { CharactersContext } from "../../contexts/CharactersContext";

export function Home() {
  const [characters, setCharacters] = useContext(CharactersContext);

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
