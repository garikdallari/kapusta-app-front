import { useDispatch } from 'react-redux';
import { GrClose } from 'react-icons/gr';
import Button from '../Button/Button';
import { theme } from '../../constants/theme';
import authOperations from '../../redux/auth/auth-operations';
import {
  ModalContainer,
  ModalContent,
  ModalText,
  ButtonContainer,
  CloseButton,
  Overlay,
  WrapperOverlay,
} from './LogOutConfirmModal.styled';

export default function LogOutConfirmModal({
  onClick,
  text,
  textColor,
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
                  onClick={() => dispatch(authOperations.logout())}
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
