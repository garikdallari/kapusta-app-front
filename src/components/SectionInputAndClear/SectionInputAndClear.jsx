import ButtonArrowBack from '../ButtonArrowBack/ButtonArrowBack';
import ProductForm from '../ProductForm/ProductForm';
import CurrentDate from '../CurrentDate/CurrentDate';
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
        <ButtonArrowBack displayBtn={'none'} displayText={'none'} />
        <CurrentDate />
        <ProductForm />
      </BackdropContainer>

      <ButtonContainer>
        <Button
          text={'ADD'}
          type={'button'}
          backgroundColor={theme.color.buttonOrangeBg}
          textColor={theme.color.inputBorderColor}
          marginRight={'15px'}
          onClick={() => console.log('Click ADD')}
        />
        <Button
          text={'CLEAR'}
          type={'button'}
          onClick={() => console.log('Click CLEAR')}
        />
      </ButtonContainer>
    </Section>
  );
}
