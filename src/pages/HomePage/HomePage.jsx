import React, { useState } from 'react';
import SectionInputAndClear from '../../components/SectionInputAndClear/SectionInputAndClear';
import TabletDesktopTable from '../../components/TabletDesktopTable/TabletDesktopTable';
import MobileTable from '../../components/MobileTable/MobileTable';
import Summary from '../../components/Summary/Summary';
import IncomeExpenseBtns from '../../components/IncomeExpenseBtns/IncomeExpenseBtns';
import HomeBalance from '../../components/Balance/HomeBalance';
import FinanceTable from '../../components/FinanceTable/FinanceTable';
import Container from '../../components/Container/Container';
import { changeNameIconForPages } from '../../helpers/changeNameIconForPages';
import useWindowDimensions from '../../helpers/useWindowDimensions';

import {
  TableSummaryWrapper,
  PaperHomePage,
  BackgroundBody,
  WrapperBottomIcon,
  StyledBottomIcon,
  PositionWrapper,
  StyledBottomTableIcon,
  WrapperBottomTableIcon,
} from './HomePage.styled';

function HomePage() {
  const { width } = useWindowDimensions();
  const [display, setDisplay] = useState(true);

  const displayItem = id => {
    switch (id) {
      case 'arrowBack':
        setDisplay(true);
        break;
      case 'addButton':
        setDisplay(true);
        break;
      case 'expense':
        setDisplay(false);
        break;
      case 'income':
        setDisplay(false);
        break;
      default:
        break;
    }
  };
  return (
    <>
      <BackgroundBody>
        <Container minTabletHeight={'1180px'} minDesktopHeight={'790px'}>
          <HomeBalance displayMobile={display ? 'block' : 'none'} />
          <FinanceTable>
            <IncomeExpenseBtns
              displayMobile={display ? 'flex' : 'none'}
              displayItem={displayItem}
            />
            <PaperHomePage>
              <SectionInputAndClear
                displayMobile={display}
                displayItem={displayItem}
              />
              <TableSummaryWrapper displayMobile={display}>
                <TabletDesktopTable />
                <MobileTable />
                <Summary />
                <WrapperBottomTableIcon>
                  <StyledBottomTableIcon
                    name={changeNameIconForPages(width)}
                    width={width}
                  />
                </WrapperBottomTableIcon>
              </TableSummaryWrapper>
            </PaperHomePage>
          </FinanceTable>
        </Container>
        <PositionWrapper>
          <WrapperBottomIcon>
            <StyledBottomIcon
              name={changeNameIconForPages(width)}
              width={width}
            />
          </WrapperBottomIcon>
        </PositionWrapper>
      </BackgroundBody>
    </>
  );
}

export default HomePage;
