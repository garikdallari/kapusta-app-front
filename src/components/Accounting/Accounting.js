import {
  Section,
  List,
  Item,
  Vertical,
  Nomination,
  Amount,
  AmountIncome
} from './Accounting.styled';

export default function Accounting() {
  return (
    <Section>
      <List>
        <Item>
          <Nomination>Expenses:</Nomination>
          <Amount>- 18 000.00 usd.</Amount>
        </Item>
        <Vertical />
        <Item>
          <Nomination>Income:</Nomination>
          <AmountIncome>+ 45 000.00 usd.</AmountIncome>
        </Item>
      </List>
    </Section>
  );
}