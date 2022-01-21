import { useState, useEffect } from 'react';
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

export default function ReportPage() {
  const [sectionState, setSectionState] = useState(null);
  const [context, setContext] = useState('expense');

  const { incomeRes, expenseRes } = useSelector(transSelectors.getAllByMonth);

  useEffect(() => {
    setSectionState(context === 'expense' ? expenseRes : incomeRes);
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
                <IconsReportSection
                  amount={sectionState ? sectionState : expenseRes}
                />
              </ReportContainer>
            </Container>
          </BackgroundBodyReport>
        </WrapperBackgroundBody>
      </Context.Provider>
    </>
  );
}
