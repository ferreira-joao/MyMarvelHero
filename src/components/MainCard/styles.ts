import styled from "styled-components/native";

import theme from "../../global/theme";

export const Container = styled.View`
  flex: 1;
`;

export const Poster = styled.Image`
  width: 100px;
  height: 100px;
`;

export const Title = styled.Text`
  color: ${theme.colors.default_title};
  font-size: 15px;
  font-family: ${theme.fonts.bold};
`;
