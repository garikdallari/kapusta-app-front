import Icons from '../Icons/Icons';
import { Button } from './ArrowButton.styled';
import { useContext } from 'react';
import { Context } from '../Context/Context';

const ArrowButton = ({ name, updateValue, currentValue }) => {
  const [context, setContext] = useContext(Context);

  const handleClick = () => {
    const res = currentValue === 'income' ? 'expense' : 'income';
    setContext(res);
    updateValue(res);
  };
  return (
    <Button onClick={() => handleClick()}>
      <Icons name={name} color="currentColor" width="4px" height="10px" />
    </Button>
  );
};

export default ArrowButton;
