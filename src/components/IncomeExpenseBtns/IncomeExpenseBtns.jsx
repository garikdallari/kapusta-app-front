import { ButtonsWrapper, ButtonIncome,ButtonExpense} from './IncomeExpenseBtns.styled';
import authSelectors from '../../redux/auth/auth-selectors';
import { useSelector, useDispatch } from 'react-redux';
import transOperations from '../../redux/transactions/trans-operations';

export default function IncomeExpenseBtns() {
  const token = useSelector(authSelectors.getToken);

  const dispatch = useDispatch();


  const onClick=(e)=>{

    switch (e.target.id) {

      case 'income':
        dispatch(transOperations.getAllByType('income', token));
        dispatch(transOperations.getBalanceBy6Month('income',token));

        break;

        case 'expense':
        dispatch(transOperations.getAllByType('expense', token));
        dispatch(transOperations.getBalanceBy6Month('expense',token));
;
        break;

        default:
        return;
    }
  };

  return (
    <ButtonsWrapper >
      <ButtonExpense id="expense" active={true} onClick={onClick}>expense</ButtonExpense>
      <ButtonIncome id="income" active={false} onClick={onClick}>income</ButtonIncome>
    </ButtonsWrapper>
  );
}
