import { GrClose } from 'react-icons/gr';
import {
  ModalConteiner,
  ModalContent,
  ModalText,
  ButtonContainer,
  CloseButton,
} from './Modal.styled';

export const Modal = ({ text, textColor, children, onClick }) => {
  return (
    <ModalConteiner>
      <ModalContent>
        <ModalText textColor={textColor}>{text}</ModalText>
        <ButtonContainer>{children}</ButtonContainer>
      </ModalContent>
      <CloseButton onClick={onClick}>
        <GrClose size={12} />
      </CloseButton>
    </ModalConteiner>
  );
};
