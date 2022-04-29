import React from "react";

import {
  Container,
  BackArrrow,
  CharacterName,
  CharacterNameSpotlight,
} from "./styles";

import Icon from "react-native-vector-icons/Ionicons";

interface IComicHeader {
  name: string;
  back: () => void;
}

export function ComicHeader({ name, back }: IComicHeader) {
  return (
    <Container>
      <BackArrrow onPress={back}>
        <Icon name="arrow-back-outline" size={40} color="#FFF" />
      </BackArrrow>

      <CharacterName>
        Comics related to{" "}
        <CharacterNameSpotlight>{name}</CharacterNameSpotlight>
      </CharacterName>
    </Container>
  );
}
