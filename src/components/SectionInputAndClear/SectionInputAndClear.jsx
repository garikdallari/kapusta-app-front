import { useState } from 'react';
import ButtonArrowBack from '../ButtonArrowBack/ButtonArrowBack';
import ProductForm from '../ProductForm/ProductForm';
import CurrentDate from '../CurrentDate/CurrentDate';
import { Section } from './SectionInputAndClear.styled';
import { useHistory } from 'react-router-dom';
export default function SectionInputAndClear({displayMobile, displayItem}) {
  const [date, setDate] = useState(new Date());
  const history = useHistory();
  const getDate = date => {
    setDate(date);
  };

  const onClick=(e)=>{
    displayItem(e.target.id);
    history.push('/home');
   }
   

  return (
    <Section>
      <ButtonArrowBack onClick={onClick} displayItem={displayItem} displayBtn={'none'} displayText={'none'} displayMobile={displayMobile?"none":"block"}/>
      <CurrentDate getDate={getDate} displayMobile={displayMobile?"block":"none"} displayTablet={"block"}/>
      <ProductForm transactionDate={date} displayItem={displayItem} displayMobile={displayMobile?"none":"block"}/>
    </Section>
  );
}
