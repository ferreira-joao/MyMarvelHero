import styled from "styled-components/native";

import theme from "../../global/theme";

export const Container = styled.View`
  flex: 1;
  margin-bottom: 10px;
`;

export const DataContainer = styled.View`
  padding: 5px;
  border-radius: 8px;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export const Poster = styled.Image`
  width: 250px;
  height: 250px;
  border-radius: 8px;
  margin-bottom: 3px;
`;

export const Title = styled.Text`
  font-size: 20px;
  margin-bottom: 5px;
  color: ${theme.colors.default_title};
  font-family: ${theme.fonts.bold};
  text-align: center;
`;

export const Description = styled.Text`
  font-size: 15px;
  margin-bottom: 5px;
  color: ${theme.colors.default_text};
  font-family: ${theme.fonts.bold};
  text-align: center;
`;
