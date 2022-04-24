import styled from "styled-components/native";

import theme from "../../global/theme";

export const Container = styled.View`
  flex: 0.5;
  margin-bottom: 5px;
  align-items: center;
`;

export const Poster = styled.Image`
  width: 130px;
  height: 150px;
  border-radius: 8px;
`;

export const Title = styled.Text`
  color: ${theme.colors.default_title};
  font-size: 15px;
  font-family: ${theme.fonts.bold};
`;
