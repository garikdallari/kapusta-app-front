import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getUserBalance,
  updateUserBalance,
} from '../../redux/balance/balance-operations.js';
import { getBalance } from '../../redux/balance/balance-selectors.js';

import {
  WrapperInput,
  BalanceTitle,
  Label,
  BalanceInput,
  BalanceButton,
  InputContainer,
  BalanceBox,
} from './Balance.styled.jsx';
import transSelectors from '../../redux/transactions/trans-selectors';
import BalanceNotification from '../BalanceNotification/BalanceNotification';
import ReportsNavigation from '../ReportsNavigation/ReportsNavigation';

export default function HomeBalance({displayMobile}) {
  const currentBalance = useSelector(getBalance);
  const dispatch = useDispatch();
  const [balance, setBalance] = useState();
  const transByType = useSelector(transSelectors.getTransByType);
  const allTrans = useSelector(transSelectors.getAllTrans);
  let btnText = '';

  if (currentBalance === 0) {
    btnText = 'confirm';
  } else {
    btnText = 'renew';
  }

  useEffect(() => {
    dispatch(getUserBalance());
    setBalance(currentBalance);
  }, [dispatch,transByType,
    allTrans, currentBalance]);

  const handleInput = e => {
    const { value } = e.currentTarget;
    setBalance(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (currentBalance === 0) {
      dispatch(updateUserBalance({ balance }));
      dispatch(getUserBalance());
      setBalance(currentBalance);
    } else {
      dispatch(getUserBalance());
      setBalance(currentBalance);
    }
  };

  return (
    <>
      <WrapperInput displayMobile={displayMobile} gap={'0'}>
        <ReportsNavigation />
        <BalanceBox>
          <BalanceTitle>Balance:</BalanceTitle>

          <InputContainer onSubmit={handleSubmit} display={'flex'}>
            <Label>$</Label>
            <BalanceInput
              name="balance"
              value={balance}
              onChange={handleInput}
              required
            />
            <BalanceButton type="submit">{btnText}</BalanceButton>
          </InputContainer>
          {/* <BalanceNotification /> */}
        </BalanceBox>
      </WrapperInput>
    </>
  );
}
