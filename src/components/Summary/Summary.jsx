import {
  SummaryTable,
  StyledTr,
  SummaryWrapper,
  HeadTd,
  MontTd,
} from './Summary.styled';
import { useEffect } from 'react';
import transOperations from '../../redux/transactions/trans-operations';
import { useSelector, useDispatch } from 'react-redux';
import authSelectors from
'../../redux/auth/auth-selectors';
import transSelectors from
'../../redux/transactions/trans-selectors';

export default function Summury() {
  // const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWU3MTIwZGM1NDQxZTA0MjY5N2VmZDEiLCJpYXQiOjE2NDI1ODcwOTZ9.VMxVv0X63jqQXYlPfbmcshA68bgersRwQWcjClRewYM"
  const token = useSelector(authSelectors.getToken);
  const summary= useSelector(transSelectors.getSummary);
  const dispatch = useDispatch();
  let type="expense";

  useEffect(() => dispatch(transOperations.getBalanceBy6Month(type,token)),[token,type]);


  return (
    <SummaryWrapper>
      <HeadTd>Summary</HeadTd>
      <SummaryTable>
        <tbody>
          {summary.length > 0 &&
            summary.map(month => {
              return (
                <StyledTr key={month.name}>
                  <MontTd>{month.name}</MontTd>
                  <td>{month.amount}</td>
                </StyledTr>
              );
            })}
        </tbody>
      </SummaryTable>
    </SummaryWrapper>
  );
}
