import React, { useState, useEffect } from "react";

import {
  Container,
  Image,
  SearchContainer,
  Text,
  SearchButton,
  Box,
} from "./styles";
import Icon from "react-native-vector-icons/Ionicons";

import logo from "../../assets/images/MarvelLogo.png";
import { Animated, Easing } from "react-native";

export function MainHeader() {
  const [visible, setVisible] = useState(false);

  const [animValue] = useState(new Animated.Value(0));

  useEffect(() => {
    if (visible) {
      handleShow();
    } else {
      handleHide();
    }
  }, [visible]);

  function handleShow() {
    Animated.timing(animValue, {
      toValue: 1,
      duration: 1000,
      easing: Easing.bounce,
      useNativeDriver: false,
    }).start();
  }

  function handleHide() {
    Animated.timing(animValue, {
      toValue: 0,
      duration: 200,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
  }

  const heightAnimation = animValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 50],
  });

  return (
    <Container>
      <Image source={logo} />

      <SearchContainer>
        <Text>SEARCH YOU FAVORITE HERO</Text>

        <SearchButton onPress={() => setVisible((p) => !p)}>
          <Icon name="search-outline" size={30} color={"#000"} />
        </SearchButton>
      </SearchContainer>

      <Box style={{ height: heightAnimation }} />
    </Container>
  );
}
