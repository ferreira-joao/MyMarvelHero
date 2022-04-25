import React, { useState } from "react";

import {
  Container,
  Poster,
  SearchButton,
  Title,
  ComicsButton,
  ButtonText,
} from "./styles";

import Icon from "react-native-vector-icons/Ionicons";

import { MainModal } from "../MainModal";

interface IMainCard {
  id: number;
  image: string;
  name: string;
  description: string;
}

export function MainCard({ id, image, name, description }: IMainCard) {
  const [visible, setVisible] = useState(false);

  function handleModal() {
    setVisible(!visible);
  }

  return (
    <Container>
      <Poster
        imageStyle={{ borderRadius: 8 }}
        source={{ uri: image }}
        resizeMode="cover"
      >
        <SearchButton onPress={handleModal}>
          <Icon name="reader-outline" size={20} color={"#FFF"} />
        </SearchButton>
      </Poster>

      <Title numberOfLines={1}>{name}</Title>

      <ComicsButton>
        <ButtonText>COMICS</ButtonText>
      </ComicsButton>

      <MainModal
        visible={visible}
        description={description}
        onClose={handleModal}
      />
    </Container>
  );
}
