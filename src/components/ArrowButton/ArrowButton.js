import { useDispatch } from 'react-redux';
import transOperations from '../../redux/transactions/trans-operations';
import Icons from '../Icons/Icons';
import { Button } from './ArrowButton.styled';
import { useContext } from 'react';
import { Context } from '../Context/Context';

const ArrowButton = ({ name, date, updateValue, currentValue }) => {
  const dispatch = useDispatch();
  const [context, setContext] = useContext(Context);

  const handleClick = date => {
    const res = currentValue === 'income' ? 'expense' : 'income';
    setContext(res);
    updateValue(res);
    // dispatch(transOperations.getAllByMonth(date));
  };
  return (
    <Button onClick={() => handleClick(date)}>
      <Icons name={name} color="currentColor" width="4px" height="10px" />
    </Button>
  );
};

export default ArrowButton;
