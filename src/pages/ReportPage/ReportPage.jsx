import { useState, useEffect } from 'react';
import { Context } from '../../components/Context/Context';
import { useSelector } from 'react-redux';
import {
  WrapperBackgroundBody,
  BackgroundBodyReport,
} from '../LoginPage/LoginPage.styled';
// components
import Container from '../../components/Container/Container';
import ButtonArrowBack from '../../components/ButtonArrowBack/ButtonArrowBack';
import Accounting from '../../components/Accounting/Accounting';
import ReportBalance from '../../components/Balance/ReportBalance';
import IconsReportSection from '../../components/IconsReportSection/IconsReportSection';
import { NavBox, ReportContainer } from './ReportPage.styled';

// удалить массив categories, перед подключением store
const expenseArray = [
  { key: 1, name: 'products', price: '1000' },
  { key: 2, name: 'cocktail', price: '1000' },
  { key: 3, name: 'fun', price: '10' },
  { key: 4, name: 'health', price: '1000' },
  { key: 5, name: 'car', price: '1000' },
  { key: 6, name: 'household', price: '1000' },
  { key: 7, name: 'tools', price: '1000' },
  { key: 8, name: 'invoice', price: '10' },
  { key: 11, name: 'hobby', price: '1000' },
  { key: 9, name: 'book', price: '1000' },
  { key: 10, name: 'other', price: '10' },
];

const incomeArray = [
  { key: 1, name: 'salary', price: '1000' },
  { key: 2, name: 'extra', price: '1000' },
];

export default function ReportPage() {
  const [sectionState, setSectionState] = useState(null);
  const [context, setContext] = useState('expense');
  // const getAllByMonth = useSelector(state => state.transactions.getAllByMonth);

  useEffect(() => {
    setSectionState(context === 'expense' ? expenseArray : incomeArray);
  }, [context]);
  return (
    <>
      <Context.Provider value={[context, setContext]}>
        <WrapperBackgroundBody>
          <BackgroundBodyReport>
            <Container>
              <ReportContainer>
                <NavBox>
                  <ButtonArrowBack
                    // displayBtn={'inline-block'}
                    displayText={'block'}
                  />
                  <ReportBalance />
                </NavBox>
                <Accounting />
                <IconsReportSection amount={sectionState} />
              </ReportContainer>
            </Container>
          </BackgroundBodyReport>
        </WrapperBackgroundBody>
      </Context.Provider>
    </>
  );
}
