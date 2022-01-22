import { ButtonsWrapper, Button } from './IncomeExpenseBtns.styled';
import authSelectors from '../../redux/auth/auth-selectors';
import { useSelector, useDispatch } from 'react-redux';
import transOperations from '../../redux/transactions/trans-operations';

export default function IncomeExpenseBtns() {
  const token = useSelector(authSelectors.getToken);

  const dispatch = useDispatch();
  const onClick = e => {
    switch (e.target.id) {
      case 'income':
        dispatch(transOperations.getAllByType('income', token));
        break;
      case 'expense':
        dispatch(transOperations.getAllByType('expense', token));
        break;
      default:
        return;
    }
  };

  return (
    <ButtonsWrapper onClick={onClick}>
      <Button id="expese">expense</Button>
      <Button id="income">income</Button>
    </ButtonsWrapper>
  );
}
