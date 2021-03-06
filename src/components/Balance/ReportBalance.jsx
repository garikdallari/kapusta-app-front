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
  ReportTitle,
  LabelReport,
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
      <WrapperInput>
        <Data marginBottom={'0'}>
          <ReportTitle gap={'80px'} marginBottom={'45px'}>
            Current period:
          </ReportTitle>
          <CurrentPeriod />
        </Data>
        <BalanceBox>
          <ReportTitle>Balance:</ReportTitle>
          <InputContainer display={'block'}>
            <LabelReport>$</LabelReport>
            {/* <Placeholder left={'48px'}>{`${balance}`}</Placeholder> */}
            <ReportInput
              placeholder={`${balance}`}
              disabled={true}
            ></ReportInput>
            <ReportButton type="submit" display={'none'}>
              Confirm
            </ReportButton>
          </InputContainer>
        </BalanceBox>
      </WrapperInput>
    </>
  );
}
