import React, { useContext } from "react";
import { FlatList, ActivityIndicator } from "react-native";

import { Container } from "./styles";

import { MainHeader } from "../../components/MainHeader";

import { renderMainCard } from "../../utils/renderMainCard";

import { CharactersContext } from "../../contexts/CharactersContext";

import theme from "../../global/theme";

export function Home() {
  const [characters] = useContext(CharactersContext);

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
        ListEmptyComponent={
          <ActivityIndicator
            style={{ marginTop: 20 }}
            size={"large"}
            color={theme.colors.primary}
          />
        }
      />
    </Container>
  );
}
