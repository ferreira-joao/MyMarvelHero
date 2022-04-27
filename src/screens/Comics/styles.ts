import styled from "styled-components/native";

import theme from "../../global/theme";

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.primary};
`;

export const EmptyText = styled.Text`
  font-size: 30px;
  text-align: center;
  color: ${theme.colors.light_text};
  font-family: ${theme.fonts.bold};
`;
