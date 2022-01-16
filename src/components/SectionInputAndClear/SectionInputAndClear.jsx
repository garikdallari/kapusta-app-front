import ButtonArrowBack from '../ButtonArrowBack/ButtonArrowBack';
import ProductForm from '../ProductForm/ProductForm';
import Wallet from '../Wallet/Wallet';
import Button from '../Button/Button';
import { theme } from '../../constants/theme';
import {
  ButtonContainer,
  BackdropContainer,
} from './SectionInputAndClear.styled';

export default function SectionInputAndClear() {
  return (
    <>
      <BackdropContainer>
        <ButtonArrowBack />
        <div>
          <ProductForm />
          <Wallet />
        </div>
      </BackdropContainer>
      <ButtonContainer>
        <Button
          text={'ВВОД'}
          type={'button'}
          backgroundColor={theme.color.buttonOrangeBg}
          textColor={theme.color.inputBorderColor}
          marginRight={'15px'}
        />
        <Button text={'ОЧИСТИТЬ'} type={'button'} />
      </ButtonContainer>
    </>
  );
}
