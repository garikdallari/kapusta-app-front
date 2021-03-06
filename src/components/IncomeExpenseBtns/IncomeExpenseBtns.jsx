import { ButtonsWrapper, Button} from './IncomeExpenseBtns.styled';
import authSelectors from '../../redux/auth/auth-selectors';
import { useSelector, useDispatch } from 'react-redux';
import transOperations from '../../redux/transactions/trans-operations';
import transSelectors from '../../redux/transactions/trans-selectors';

export default function IncomeExpenseBtns({displayItem, displayMobile}) {
  const token = useSelector(authSelectors.getToken);
  const type= useSelector(transSelectors.getType);
  const dispatch = useDispatch();
  
  const onClick=(e)=>{
   displayItem(e.target.id);
  
    switch (e.target.id) {
      case 'income':
        dispatch(transOperations.getAllByType('income', token));
        dispatch(transOperations.getBalanceBy6Month('income',token));
        break;

        case 'expense':
        dispatch(transOperations.getAllByType('expense', token));
        dispatch(transOperations.getBalanceBy6Month('expense',token));
        break;

        default:
        return;
    }
  };

  return (
    <ButtonsWrapper displayMobile={displayMobile}>
      <Button id="expense" active={(type==="expense")?true:false} onClick={onClick}>expense</Button>
      <Button id="income" active={(type==="income")?true:false} onClick={onClick}>income</Button>
    </ButtonsWrapper>
  );
}
