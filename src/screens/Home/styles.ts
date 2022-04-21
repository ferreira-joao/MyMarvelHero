import styled from "styled-components/native";

import theme from "../../global/theme";

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: ${theme.colors.light_background};
`;

export const Image = styled.Image`
  width: 100%;
  height: 150px;
  border-radius: 8px;
  margin-bottom: 10px;
`;

export const Text = styled.Text`
  font-size: 20px;
  color: ${theme.colors.default_title};
  font-family: ${theme.fonts.bold};
`;
