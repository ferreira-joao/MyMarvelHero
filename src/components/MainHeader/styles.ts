import styled from "styled-components/native";

import theme from "../../global/theme";

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
