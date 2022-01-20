import ButtonArrowBack from '../ButtonArrowBack/ButtonArrowBack';
import ProductForm from '../ProductForm/ProductForm';
import CurrentDate from '../CurrentDate/CurrentDate';
import Button from '../Button/Button';
import { theme } from '../../constants/theme';
import {
  ButtonContainer,
  Container,
  Section,
} from './SectionInputAndClear.styled';

export default function SectionInputAndClear() {
  return (
    <Section>
      <Container>
        <ButtonArrowBack displayBtn={'none'} displayText={'none'} />
        <CurrentDate />
        <ProductForm />
      </Container>

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
