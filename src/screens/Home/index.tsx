import React from "react";

import { Container, Image, Text } from "./styles";

import logo from "../../assets/images/MarvelLogo.png";

export function Home() {
  return (
    <Container>
      <Image source={logo} />

      <Text>BEST CHARACTERS</Text>
    </Container>
  );
}
