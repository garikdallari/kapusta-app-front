import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Context } from '../../components/Context/Context';
import {
  WrapperBackgroundBody,
  BackgroundBodyReport,
} from '../LoginPage/LoginPage.styled';
import transSelectors from '../../redux/transactions/trans-selectors.js';
// components
import Container from '../../components/Container/Container';
import ButtonArrowBack from '../../components/ButtonArrowBack/ButtonArrowBack';
import Accounting from '../../components/Accounting/Accounting';
import ReportBalance from '../../components/Balance/ReportBalance';
import IconsReportSection from '../../components/IconsReportSection/IconsReportSection';
import { NavBox, ReportContainer } from './ReportPage.styled';
import CartReport from '../../components/ChartsReport/ChartsReport';

export default function ReportPage() {
  const [context, setContext] = useState('expense');
  const { incomeRes, expenseRes, subIncomeRes, subExpenseRes } = useSelector(
    transSelectors.getAllByMonth,
  );

  return (
    <>
      <Context.Provider value={[context, setContext]}>
        <WrapperBackgroundBody>
          <BackgroundBodyReport>
            <Container>
              <ReportContainer>
                <NavBox>
                  <ButtonArrowBack displayText={'block'} displayMobile={"block"} />
                  <ReportBalance />
                </NavBox>
                <Accounting />
                <IconsReportSection
                  amount={context === 'expense' ? expenseRes : incomeRes}
                  amount={expenseRes}
                />
              </ReportContainer>
            </Container>
            <CartReport
              data={context === 'expense' ? subExpenseRes : subIncomeRes}
            />
          </BackgroundBodyReport>
        </WrapperBackgroundBody>
      </Context.Provider>
    </>
  );
}
