import ButtonArrowBack from '../ButtonArrowBack/ButtonArrowBack';
import ProductForm from '../ProductForm/ProductForm';
import CurrentDate from '../CurrentDate/CurrentDate';
import Wallet from '../Wallet/Wallet';
import Button from '../Button/Button';
import { theme } from '../../constants/theme';
import {
  ButtonContainer,
  BackdropContainer,
  Section,
} from './SectionInputAndClear.styled';

export default function SectionInputAndClear() {
  return (
    <Section>
      <BackdropContainer>
        <ButtonArrowBack />
        <CurrentDate />
        <ProductForm />
        <Wallet />
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
    </Section>
  );
}
