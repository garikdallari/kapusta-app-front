import {
  BalanceTitle,
  Label,
  InputContainer,
  ReportData,
  ReportInput,
  WrapperInput,
  BalanceBox,
  Data,
} from './Balance.styled.jsx';

export default function ReportBalance() {
  return (
    <>
      <WrapperInput>
        <Data>
          <BalanceTitle>Current period:</BalanceTitle>
          <ReportData>June 21</ReportData>
        </Data>
        <BalanceBox>
          <BalanceTitle>Balance:</BalanceTitle>
          <InputContainer>
            <Label>$</Label>
            <ReportInput></ReportInput>
          </InputContainer>
        </BalanceBox>
      </WrapperInput>
    </>
  );
}
