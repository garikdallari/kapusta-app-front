import { ButtonsWrapper, Button } from './IncomeExpenseBtns.styled';
import authSelectors from '../../redux/auth/auth-selectors';
import { useSelector, useDispatch } from 'react-redux';
import transOperations from '../../redux/transactions/trans-operations';

export default function IncomeExpenseBtns() {
  const token = useSelector(authSelectors.getToken);

  const dispatch = useDispatch();

  // let  bgColorExpense="red";
  // let  bgColorIncome ="white";

  const onClick=(e)=>{

    switch (e.target.id) {

      case 'income':
        dispatch(transOperations.getAllByType('income', token));
        dispatch(transOperations.getBalanceBy6Month('income',token));
        // bgColorExpense="white";
        // bgColorIncome="red";
        break;

        case 'expense':
        dispatch(transOperations.getAllByType('expense', token));
        dispatch(transOperations.getBalanceBy6Month('expense',token));
        // bgColorExpense="red";
        // bgColorIncome="white";
        break;

        default:
        return;
    }
  };

  return (
    <ButtonsWrapper >
      <Button id="expense"  onClick={onClick} >expense</Button>
      <Button id="income" onClick={onClick} >income</Button>
    </ButtonsWrapper>
  );
}
