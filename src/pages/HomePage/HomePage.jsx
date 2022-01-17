import React from 'react';
import SectionInputAndClear from '../../components/SectionInputAndClear/SectionInputAndClear';
import TabletDesktopTable from '../../components/TabletDesktopTable/TabletDesktopTable'
import MobileTable from '../../components/MobileTable/MobileTable'
import Summary from '../../components/Summary/Summary'
import IncomeExpenseBtns from '../../components/IncomeExpenseBtns/IncomeExpenseBtns'
import HomeBalance from '../../components/Balance/HomeBalance';
import Paper from '../../components/Paper/Paper'
import FinanceTable from '../../components/FinanceTable/FinanceTable';
import { theme } from '../../constants/theme';

function HomePage() {
  return (
    <>
      <HomeBalance />
      <FinanceTable>
        <IncomeExpenseBtns />
        <Paper padding="28px 30px 48px 30px" borderRadius="0px 30px 30px 30px" boxShadow={theme.color.boxShadow} >
          {/* <SectionInputAndClear /> */}
          <TabletDesktopTable />
          <MobileTable />
          <Summary />
        </Paper>
      </FinanceTable>
    </>
  );
}

export default HomePage;
