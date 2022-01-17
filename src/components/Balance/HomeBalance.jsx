import {
  WrapperInput,
  BalanceTitle,
  Label,
  BalanceInput,
  BalanceButton,
  InputContainer,
  BalanceBox,
} from './Balance.styled.jsx';

import BalanceNotification from '../BalanceNotification/BalanceNotification';
import ReportsNavigation from '../ReportsNavigation/ReportsNavigation';

export default function HomeBalance() {
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
          {/* <BalanceNotification /> */}
        </BalanceBox>
      </WrapperInput>
    </>
  );
}
