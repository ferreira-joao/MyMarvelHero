import React from "react";

import { Container, DataContainer, Poster, Title, Description } from "./styles";

interface IComicCard {
  id: number;
  image: string;
  title: string;
  description: string;
}

export function ComicCard({ id, image, title, description }: IComicCard) {
  return (
    <Container>
      <DataContainer>
        <Poster source={{ uri: image }} resizeMode="cover" />

        <Title>{title}</Title>

        <Description>{description}</Description>
      </DataContainer>
    </Container>
  );
}
