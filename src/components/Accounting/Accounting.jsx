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
  return (
    <Section>
      <List>
        <Item>
          <Nomination>Expenses:</Nomination>
          <Amount>{`- ${Math.abs(expenseBalanceByMonth)} usd.`}</Amount>
        </Item>
        <Vertical />
        <Item>
          <Nomination>Income:</Nomination>
          <AmountIncome>{`+ ${incomeBalanceByMonth} usd.`}</AmountIncome>
        </Item>
      </List>
    </Section>
  );
}
