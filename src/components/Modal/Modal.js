import React, { useEffect, useState } from 'react';
import { GrClose } from 'react-icons/gr';
import {
  ModalContainer,
  ModalContent,
  ModalText,
  ButtonContainer,
  CloseButton,
} from './Modal.styled';
import Button from '../Button/Button';
import { theme } from '../../constants/theme';

export const Modal = ({ text, textColor }) => {
  const [isModal, setModal] = useState(true);
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      closeModal();
    }
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    isModal && (
      <ModalContainer>
        <ModalContent>
          <ModalText textColor={textColor}>{text}</ModalText>
          <ButtonContainer>
            <Button
              text="Yes"
              type="button"
              backgroundColor={theme.color.buttonOrangeBg}
              textColor={theme.color.buttonWhiteText}
            />
            <Button
              text="No"
              type="button"
              backgroundColor={theme.color.buttonWhiteBg}
              textColor={theme.color.buttonDarkText}
            />
          </ButtonContainer>
        </ModalContent>
        <CloseButton type="button" onClick={closeModal}>
          <GrClose size={12} />
        </CloseButton>
      </ModalContainer>
    )
  );
};
