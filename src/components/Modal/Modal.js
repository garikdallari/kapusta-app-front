import React, { useEffect } from 'react';
import { GrClose } from 'react-icons/gr';
import {
  ModalContainer,
  ModalContent,
  ModalText,
  ButtonContainer,
  CloseButton,
} from './Modal.styled';
import Button from '../Button/Button';

export const Modal = ({ text, textColor, showModal }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      showModal();
    }
  };

  return (
    <ModalContainer>
      <ModalContent>
        <ModalText textColor={textColor}>{text}</ModalText>
        <ButtonContainer>
          <Button text="Да" type="button" />
          <Button text="Нет" type="button" />
        </ButtonContainer>
      </ModalContent>
      <CloseButton type="button" onClick={showModal}>
        <GrClose size={12} />
      </CloseButton>
    </ModalContainer>
  );
};
