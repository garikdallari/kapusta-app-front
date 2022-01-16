import {
  WrapperInput,
  BalanceTitle,
  Label,
  BalanceInput,
  BalanceButton,
  InputContainer,
  BalanceBox,
} from './Balance.styled.jsx';

import BalanceNotification from '../../components/BalanceNotification/BalanceNotification';
import ReportsNavigation from '../../components/ReportsNavigation/ReportsNavigation';

export default function Balance() {
  return (
    <>
      <WrapperInput>
        <ReportsNavigation />
        <BalanceBox>
          <BalanceTitle>Balance:</BalanceTitle>
          <InputContainer>
            <Label>$</Label>
            <BalanceInput />
            <BalanceButton type="submit">Confirm</BalanceButton>
          </InputContainer>
          <BalanceNotification />
        </BalanceBox>
      </WrapperInput>
    </>
  );
}
