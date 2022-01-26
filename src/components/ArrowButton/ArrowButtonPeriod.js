import Icons from '../Icons/Icons';
import { Button } from './ArrowButton.styled';

const ArrowButton = ({ name, isNext, updateValue, msDate }) => {
  const MONTH_MS = 2628000000; //Month in msec

  const handleClick = isNext => {
    if (isNext) {
      updateValue(msDate + MONTH_MS);
    } else {
      updateValue(msDate - MONTH_MS);
    }
  };

  return (
    <Button onClick={() => handleClick(isNext)}>
      <Icons name={name} color="currentColor" width="4px" height="10px" />
    </Button>
  );
};

export default ArrowButton;
