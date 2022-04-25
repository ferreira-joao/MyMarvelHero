import React from "react";

import {
  Container,
  Poster,
  SearchButton,
  Title,
  ButtonContainer,
  AboutButton,
  MoreButton,
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

      <Title numberOfLines={2}>{name}</Title>

      <ButtonContainer>
        <AboutButton>
          <ButtonText>About</ButtonText>
        </AboutButton>

        <MoreButton>
          <ButtonText>More</ButtonText>
        </MoreButton>
      </ButtonContainer>
    </Container>
  );
}
