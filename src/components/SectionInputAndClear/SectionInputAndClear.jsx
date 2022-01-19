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
        <ButtonArrowBack displayBtn={'none'} displayText={'none'} />
        <CurrentDate />
        <ProductForm />
        <Wallet />
      </BackdropContainer>

      <ButtonContainer>
        <Button
          text={'INPUT'}
          type={'button'}
          backgroundColor={theme.color.buttonOrangeBg}
          textColor={theme.color.inputBorderColor}
          marginRight={'15px'}
        />
        <Button text={'CLEAR'} type={'button'} />
      </ButtonContainer>
    </Section>
  );
}
