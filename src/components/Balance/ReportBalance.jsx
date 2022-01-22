import {
  BalanceTitle,
  InputContainer,
  ReportInput,
  WrapperInput,
  BalanceBox,
  Data,
  Placeholder,
  ReportButton,
} from './Balance.styled.jsx';

import CurrentPeriod from './CurrentPeriod';

export default function ReportBalance({ balance }) {
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
            <Placeholder>{`${balance}`}$</Placeholder>
            <ReportInput></ReportInput>
            <ReportButton type="submit">Confirm</ReportButton>
          </InputContainer>
        </BalanceBox>
      </WrapperInput>
    </>
  );
}
