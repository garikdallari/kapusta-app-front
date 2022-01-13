import { setMilliseconds } from 'date-fns';
import { AiOutlineClose } from 'react-icons/ai';
import {
  ModalConteiner,
  ModalContent,
  ModalText,
  ButtonContainer,
  CloseButton,
} from './Modal.styled';

export const Modal = ({ text, textColor, children }) => {
  return (
    <ModalConteiner>
      <ModalContent>
        <ModalText textColor={textColor}>{text}</ModalText>
        <ButtonContainer>{children}</ButtonContainer>
      </ModalContent>
      <CloseButton>
        <AiOutlineClose size={12} />
      </CloseButton>
    </ModalConteiner>
  );
};
