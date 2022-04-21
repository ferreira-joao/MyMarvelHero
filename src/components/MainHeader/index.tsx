import React from "react";

import {
  Container,
  Image,
  SearchContainer,
  Text,
  SearchButton,
} from "./styles";
import Icon from "react-native-vector-icons/Ionicons";

import logo from "../../assets/images/MarvelLogo.png";

export function MainHeader() {
  return (
    <Container>
      <Image source={logo} />

      <SearchContainer>
        <Text>SEARCH YOU FAVORITE HERO</Text>

        <SearchButton>
          <Icon name="search-outline" size={30} color={"#000"} />
        </SearchButton>
      </SearchContainer>
    </Container>
  );
}
