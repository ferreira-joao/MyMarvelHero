import React from "react";
import { Modal } from "react-native";

import {
  Container,
  CenteredContainer,
  CloseButton,
  Description,
} from "./styles";

import Icon from "react-native-vector-icons/Ionicons";

interface IMainModal {
  visible: boolean;
  description: string;
  onClose: () => void;
}

export function MainModal({ visible, description, onClose }: IMainModal) {
  return (
    <Container>
      <Modal visible={visible} animationType="fade" transparent={true}>
        <Container>
          <CenteredContainer>
            <CloseButton onPress={onClose}>
              <Icon name="close-outline" size={30} color={"#000"} />
            </CloseButton>

            <Description>{description}</Description>
          </CenteredContainer>
        </Container>
      </Modal>
    </Container>
  );
}
