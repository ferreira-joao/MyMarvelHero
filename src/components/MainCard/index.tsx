import React from "react";

import {
  Container,
  Poster,
  SearchButton,
  Title,
  ComicsButton,
  ButtonText,
} from "./styles";

import Icon from "react-native-vector-icons/Ionicons";

interface IMainCard {
  id: number;
  image: string;
  name: string;
}

export function MainCard({ id, image, name }: IMainCard) {
  return (
    <Container>
      <Poster
        imageStyle={{ borderRadius: 8 }}
        source={{ uri: image }}
        resizeMode="cover"
      >
        <SearchButton>
          <Icon name="reader-outline" size={20} color={"#FFF"} />
        </SearchButton>
      </Poster>

      <Title numberOfLines={1}>{name}</Title>

      <ComicsButton>
        <ButtonText>COMICS</ButtonText>
      </ComicsButton>
    </Container>
  );
}
