import { useState} from 'react';
import ButtonArrowBack from '../ButtonArrowBack/ButtonArrowBack';
import ProductForm from '../ProductForm/ProductForm';
import CurrentDate from '../CurrentDate/CurrentDate';
import { Section } from './SectionInputAndClear.styled';
import moment from 'moment';

export default function SectionInputAndClear() {
 const [date, setDate]= useState(new Date());
 const getDate=(date)=>{
  setDate(date);
}

  return (
    <Section>
      <ButtonArrowBack displayBtn={'none'} displayText={'none'} />
      <CurrentDate getDate={getDate}/>
      <ProductForm transactionDate={date} />
    </Section>
  );
}
