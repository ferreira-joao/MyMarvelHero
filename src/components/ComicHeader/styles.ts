import styled from "styled-components/native";

import theme from "../../global/theme";

export const Container = styled.View`
  margin-bottom: 10px;
`;

export const BackArrrow = styled.TouchableOpacity`
  width: 40px;
`;

export const CharacterName = styled.Text`
  font-size: 20px;
  font-family: ${theme.fonts.bold};
  color: ${theme.colors.light_text};
  text-align: center;
`;

export const CharacterNameSpotlight = styled.Text`
  font-size: 20px;
  font-family: ${theme.fonts.bold};
  color: ${theme.colors.light_text};
  text-align: center;
  text-decoration: underline;
`;
