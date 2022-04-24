import React from "react";

import {
  Container,
  Poster,
  Title,
  ButtonContainer,
  AboutButton,
  MoreButton,
  ButtonText,
} from "./styles";

interface IMainCard {
  id: number;
  image: string;
  name: string;
}

export function MainCard({ id, image, name }: IMainCard) {
  return (
    <Container>
      <Poster source={{ uri: image }} resizeMode="cover" />

      <Title numberOfLines={1}>{name}</Title>

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
