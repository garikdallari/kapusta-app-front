import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBalance } from '../../redux/balance/balance-selectors.js';
import { getUserBalance } from '../../redux/balance/balance-operations';

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

export default function ReportBalance() {
  const balance = useSelector(getBalance);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserBalance());
  }, [dispatch]);

  return (
    <>
      <WrapperInput gap={'80px'}>
        <Data marginBottom={'0'}>
          <BalanceTitle>Current period:</BalanceTitle>
          <CurrentPeriod />
        </Data>
        <BalanceBox>
          <BalanceTitle>Balance:</BalanceTitle>
          <InputContainer display={'block'}>
            <Placeholder left={'48px'}>{`${balance}`}$</Placeholder>
            <ReportInput></ReportInput>
            <ReportButton type="submit" display={'none'}>
              Confirm
            </ReportButton>
          </InputContainer>
        </BalanceBox>
      </WrapperInput>
    </>
  );
}
