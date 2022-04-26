import React from "react";

import { Container, Poster, Title, Description } from "./styles";

interface IComicCard {
  id: number;
  image: string;
  title: string;
  description: string;
}

export function ComicCard({ id, image, title, description }: IComicCard) {
  return (
    <Container>
      <Poster source={{ uri: image }} resizeMode="cover" />

      <Title>{title}</Title>

      <Description>{description}</Description>
    </Container>
  );
}
