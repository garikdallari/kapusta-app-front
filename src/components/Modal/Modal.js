import {
  ModalConteiner,
  ModalContent,
  ModalText,
  ButtonContainer,
} from './Modal.styled';

export const Modal = ({ text, textColor, children }) => {
  return (
    <ModalConteiner>
      <ModalContent>
        <ModalText textColor={textColor}>{text}</ModalText>
        <ButtonContainer>{children}</ButtonContainer>
      </ModalContent>
    </ModalConteiner>
  );
};
