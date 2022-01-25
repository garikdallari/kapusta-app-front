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
import {
  NavBox,
  ReportContainer,
  PositionWrapper,
  WrapperBottomIcon,
  StyledBottomIcon,
} from './ReportPage.styled';
import CartReport from '../../components/ChartsReport/ChartsReport';
import useWindowDimensions from '../../helpers/useWindowDimensions';
import { changeNameIconForPages } from '../../helpers/changeNameIconForPages';

export default function ReportPage() {
  const { width } = useWindowDimensions();
  const [context, setContext] = useState('expense');
  const [subcategoryType, setSubcategoryType] = useState('food');
  const { incomeRes, expenseRes, subIncomeRes, subExpenseRes } = useSelector(
    transSelectors.getAllByMonth,
  );

  const getSubcategories = categoryState =>
    categoryState === 'expense'
      ? subExpenseRes[subcategoryType]
      : subIncomeRes[subcategoryType];
  return (
    <>
      <Context.Provider value={[context, setContext]}>
        <WrapperBackgroundBody>
          <BackgroundBodyReport>
            <Container>
              <ReportContainer>
                <NavBox>
                  <ButtonArrowBack
                    displayText={'block'}
                    displayMobile={'block'}
                  />
                  <ReportBalance />
                </NavBox>
                <Accounting />
                <IconsReportSection
                  amount={context === 'expense' ? expenseRes : incomeRes}
                  categoryType={value => setSubcategoryType(value)}
                />
              </ReportContainer>
            </Container>
            <CartReport data={getSubcategories(context)} />
          </BackgroundBodyReport>
        </WrapperBackgroundBody>
        <PositionWrapper>
          <WrapperBottomIcon>
            <StyledBottomIcon
              name={changeNameIconForPages(width)}
              width={width}
            />
          </WrapperBottomIcon>
        </PositionWrapper>
      </Context.Provider>
    </>
  );
}
