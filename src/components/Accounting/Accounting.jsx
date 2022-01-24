import { useSelector } from 'react-redux';
import transSelectors from '../../redux/transactions/trans-selectors';

import {
  Section,
  List,
  Item,
  Vertical,
  Nomination,
  Amount,
  AmountIncome,
} from './Accounting.styled';

export default function Accounting() {
  const { incomeBalanceByMonth, expenseBalanceByMonth } = useSelector(
    transSelectors.getAllByMonth,
  );

  const mathExpense = Math.abs(expenseBalanceByMonth);
  const parsedIncome = parseFloat(incomeBalanceByMonth).toFixed(2);

  return (
    <Section>
      <List>
        <Item>
          <Nomination>Expenses:</Nomination>
          {expenseBalanceByMonth === 0 ? (
            <Amount>0.00 usd.</Amount>
          ) : (
            <Amount>{`- ${parseFloat(mathExpense).toFixed(2)} usd.`}</Amount>
          )}
        </Item>
        <Vertical />
        <Item>
          <Nomination>Income:</Nomination>
          {incomeBalanceByMonth === 0 ? (
            <AmountIncome>0.00 usd.</AmountIncome>
          ) : (
            <AmountIncome>{`+ ${parsedIncome} usd.`}</AmountIncome>
          )}
        </Item>
      </List>
    </Section>
  );
}
