import {
  BalanceTitle,
  InputContainer,
  ReportInput,
  WrapperInput,
  BalanceBox,
  Data,
  Placeholder,
  FlexBox,
} from './Balance.styled.jsx';

import CurrentPeriod from './CurrentPeriod';

export default function ReportBalance() {
  return (
    <>
      <WrapperInput>
        <Data>
          <BalanceTitle>Current period:</BalanceTitle>
          <CurrentPeriod />
        </Data>
        <BalanceBox>
          <BalanceTitle>Balance:</BalanceTitle>
          <InputContainer>
            <Placeholder>$</Placeholder>
            <ReportInput></ReportInput>
          </InputContainer>
        </BalanceBox>
      </WrapperInput>
    </>
  );
}
