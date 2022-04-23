import React, { useState, useEffect } from "react";

import {
  Container,
  Image,
  SearchContainer,
  Text,
  SearchButton,
  InputContainer,
  MainInput,
} from "./styles";
import Icon from "react-native-vector-icons/Ionicons";

import logo from "../../assets/images/MarvelLogo.png";

import { Animated, Easing, Keyboard } from "react-native";

export function MainHeader() {
  const [visible, setVisible] = useState(false);
  const [show, setShow] = useState(false);

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
      duration: 200,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();

    setShow(true);
  }

  function handleHide() {
    Animated.timing(animValue, {
      toValue: 0,
      duration: 200,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();

    Keyboard.dismiss();
    setShow(false);
  }

  const heightAnimation = animValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 50],
  });

  return (
    <Container>
      <Image source={logo} />

      <SearchContainer>
        <Text>SEARCH YOUR FAVORITE HERO</Text>

        <SearchButton onPress={() => setVisible((p) => !p)}>
          <Icon name="search-outline" size={30} color={"#000"} />
        </SearchButton>
      </SearchContainer>

      <InputContainer style={{ height: heightAnimation }} show={show}>
        <MainInput
          show={show}
          placeholder={"Type here..."}
          placeholderTextColor={"#999999"}
        />
      </InputContainer>
    </Container>
  );
}
