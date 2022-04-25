import styled from "styled-components/native";

import theme from "../../global/theme";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: "rgba(0,0,0,0.5)";
`;

export const CenteredContainer = styled.View`
  width: 80%;
  padding: 20px;
  border-radius: 8px;
  background-color: #fff;
`;

export const CloseButton = styled.TouchableOpacity`
  position: absolute;
  top: 5px;
  right: 5px;
`;

export const Description = styled.Text`
  margin-top: 15px;
  font-size: 15px;
  color: #000;
  font-family: ${theme.fonts.bold};
  text-align: center;
`;
