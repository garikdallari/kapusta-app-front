import { useDispatch, useSelector } from 'react-redux';
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
} from './TransConfirmModal.styled';
import transOperations from '../../redux/transactions/trans-operations';
import transSelectors from '../../redux/transactions/trans-selectors';
import authSelectors from '../../redux/auth/auth-selectors';
import { getUserBalance } from '../../redux/balance/balance-operations';

export default function TransConfirmModal({
  cancelOperation,
  onClick,
  text,
  textColor,
  id,
}) {
  const dispatch = useDispatch();
  const token = useSelector(authSelectors.getToken);
  const type = useSelector(transSelectors.getType);

  const OnClickDelete = () => {
    dispatch(transOperations.deleteTransactions(id, token));
    dispatch(transOperations.getBalanceBy6Month(type, token));
    dispatch(getUserBalance());
    onClick();
  };
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
                  onClick={OnClickDelete}
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
