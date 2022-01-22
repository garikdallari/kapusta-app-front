import React from 'react';
import SectionInputAndClear from '../../components/SectionInputAndClear/SectionInputAndClear';
import TabletDesktopTable from '../../components/TabletDesktopTable/TabletDesktopTable';
import MobileTable from '../../components/MobileTable/MobileTable';
import Summary from '../../components/Summary/Summary';
import IncomeExpenseBtns from '../../components/IncomeExpenseBtns/IncomeExpenseBtns';
import HomeBalance from '../../components/Balance/HomeBalance';
import FinanceTable from '../../components/FinanceTable/FinanceTable';
import Container from '../../components/Container/Container';
// import Calc from '../../components/Calc/Calc';
import {
  TableSummaryWrapper,
  PaperHomePage,
  BackgroundBody,
} from './HomePage.styled';

function HomePage() {
  return (
    <BackgroundBody>
      <Container>
        <HomeBalance />
        <FinanceTable>
          <IncomeExpenseBtns />
          <PaperHomePage>
            <SectionInputAndClear />
            <TableSummaryWrapper>
              {/* <Calc /> */}
              <TabletDesktopTable />
              <MobileTable />
              <Summary />
            </TableSummaryWrapper>
          </PaperHomePage>
        </FinanceTable>
      </Container>
    </BackgroundBody>
  );
}

export default HomePage;
