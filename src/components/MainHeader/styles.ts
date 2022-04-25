import { Animated } from "react-native";
import styled, { css } from "styled-components/native";

import theme from "../../global/theme";

interface IMainInput {
  show: boolean;
}

export const Container = styled.View``;

export const Image = styled.Image`
  width: 100%;
  height: 150px;
  border-radius: 8px;
  margin-bottom: 10px;
`;

export const SearchContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const Text = styled.Text`
  font-size: 18px;
  color: ${theme.colors.default_title};
  font-family: ${theme.fonts.bold};
`;

export const SearchButton = styled.TouchableOpacity`
  border-radius: 20px;
  padding: 5px;
  background-color: #f2f2f2;
`;

export const InputContainer = styled(Animated.View)<IMainInput>`
  width: 100%;
  ${(props) =>
    props.show
      ? css`
          margin-bottom: 10px;
        `
      : css`
          margin-bottom: 0;
        `}
`;

export const MainInput = styled.TextInput.attrs({ elevation: 5 })<IMainInput>`
  width: 100%;
  border-radius: 8px;
  color: ${theme.colors.default_title};
  background-color: #fff;
  ${(props) =>
    props.show
      ? css`
          padding-left: 15px;
        `
      : css`
          display: none;
        `}
`;
