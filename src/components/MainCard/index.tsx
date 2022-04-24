import React from "react";

import { Container, Poster, Title } from "./styles";

interface IMainCard {
  id: number;
  image: string;
  name: string;
}

export function MainCard({ id, image, name }: IMainCard) {
  return (
    <Container>
      <Poster source={{ uri: image }} resizeMode="cover" />
      <Title>{name}</Title>
    </Container>
  );
}
