import styled from "styled-components/native";

import theme from "../../global/theme";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.light_background};
`;

export const Text = styled.Text`
  color: ${theme.colors.default_text};
  font-family: ${theme.fonts.bold};
`;
