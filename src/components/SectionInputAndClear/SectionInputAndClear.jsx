import ButtonArrowBack from '../ButtonArrowBack/ButtonArrowBack';
import ProductForm from '../ProductForm/ProductForm';
import CurrentDate from '../CurrentDate/CurrentDate';
import { Section } from './SectionInputAndClear.styled';

export default function SectionInputAndClear() {
  return (
    <Section>
      <ButtonArrowBack displayBtn={'none'} displayText={'none'} />
      <CurrentDate />
      <ProductForm />
    </Section>
  );
}
