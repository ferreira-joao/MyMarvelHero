import styled from "styled-components/native";

import theme from "../../global/theme";

export const Container = styled.View`
  flex: 0.5;
  margin-bottom: 5px;
  align-items: center;
`;

export const Poster = styled.ImageBackground`
  width: 130px;
  height: 150px;
  border-radius: 8px;
  margin-bottom: 3px;
`;

export const SearchButton = styled.TouchableOpacity`
  border-radius: 20px;
  padding: 5px;
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: ${theme.colors.primary};
`;

export const Title = styled.Text`
  font-size: 15px;
  margin-bottom: 5px;
  flex-wrap: wrap;
  color: ${theme.colors.default_title};
  font-family: ${theme.fonts.bold};
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const AboutButton = styled.TouchableOpacity`
  padding: 10px;
  border-radius: 8px;
  margin-right: 10px;
  background-color: ${theme.colors.primary};
`;

export const MoreButton = styled.TouchableOpacity`
  padding: 10px;
  border-radius: 8px;
  background-color: ${theme.colors.primary};
`;

export const ButtonText = styled.Text`
  font-size: 12px;
  color: ${theme.colors.light_text};
  font-family: ${theme.fonts.bold};
  text-transform: uppercase;
`;
