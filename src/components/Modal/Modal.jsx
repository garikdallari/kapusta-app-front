import { useDispatch } from 'react-redux';
import { GrClose } from 'react-icons/gr';
import Button from '../Button/Button';
import { theme } from '../../constants/theme';
import {
  ModalContainer,
  ModalContent,
  ModalText,
  ButtonContainer,
  CloseButton,
  Overlay,
  WrapperOverlay,
} from './Modal.styled';

export default function Modal({
  onClick,
  text,
  textColor,
  confirmOperation,
  cancelOperation,
}) {
  const dispatch = useDispatch();
  return (
    <>
      <Overlay>
        <WrapperOverlay>
          <ModalContainer>
            <ModalContent>
              <ModalText textColor={textColor}>{text}</ModalText>
              <ButtonContainer>
                <Button
                  text="Yes"
                  type="button"
                  backgroundColor={theme.color.buttonOrangeBg}
                  textColor={theme.color.buttonWhiteText}
                  onClick={() => dispatch(confirmOperation())}
                />
                <Button
                  text="No"
                  type="button"
                  backgroundColor={theme.color.buttonWhiteBg}
                  textColor={theme.color.buttonDarkText}
                  onClick={cancelOperation}
                />
              </ButtonContainer>
            </ModalContent>
            <CloseButton type="button" onClick={onClick}>
              <GrClose size={12} />
            </CloseButton>
          </ModalContainer>
        </WrapperOverlay>
      </Overlay>
    </>
  );
}
