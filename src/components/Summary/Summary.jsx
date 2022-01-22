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

import { getMonthName}  from '../../helpers/monthHelpers';

export default function Summury() {
  const token = useSelector(authSelectors.getToken);
  const summary= useSelector(transSelectors.getSummary);
  const dispatch = useDispatch();

  const type= useSelector(transSelectors.getType);
  useEffect(() => dispatch(transOperations.getBalanceBy6Month(type,token)),[token,type,dispatch]);
   
  return (
    <SummaryWrapper>
      <HeadTd>Summary</HeadTd>
      <SummaryTable>
        <tbody>
          {summary.length > 0 &&
         summary.map(monthItem => {
                 return (
                <StyledTr key={monthItem.month}>
                 <MontTd>{getMonthName(monthItem.month)}</MontTd>
                  <td>{monthItem.amount}</td>
                </StyledTr>
              );
            })}
        </tbody>
      </SummaryTable>
    </SummaryWrapper>
  );
}
