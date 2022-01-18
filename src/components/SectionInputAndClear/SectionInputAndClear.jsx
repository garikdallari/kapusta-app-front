import ButtonArrowBack from '../ButtonArrowBack/ButtonArrowBack';
import ProductForm from '../ProductForm/ProductForm';
import Wallet from '../Wallet/Wallet';
import Button from '../Button/Button';
import { theme } from '../../constants/theme';
import {
  ButtonContainer,
  BackdropContainer,
  Section,
  ContainerDateNow,
} from './SectionInputAndClear.styled';

export default function SectionInputAndClear() {
  return (
    <Section>
      <BackdropContainer>
        <ButtonArrowBack />
        <ContainerDateNow>date now</ContainerDateNow>
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
