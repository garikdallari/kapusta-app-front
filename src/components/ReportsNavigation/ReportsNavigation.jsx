import { format } from 'date-fns';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import transOperations from '../../redux/transactions/trans-operations';
import { ReportBox, ReportHeader } from './ReportsNavigation.styled';
import Icons from '../Icons/Icons';

export default function ReportsNavigation() {
  const dispatch = useDispatch();
  const history = useHistory();
  const dateNow = format(new Date(), 'M yyyy').split(' ').join('-');

  const handleClick = date => {
    dispatch(transOperations.getAllByMonth(date));
    history.push('/report');
  };
  return (
    <>
      <ReportBox onClick={() => handleClick(dateNow)}>
        <ReportHeader>Go to reports</ReportHeader>
        <Icons
          name="bar_chart"
          color="currentColor"
          width="24px"
          height="24px"
        />
      </ReportBox>
    </>
  );
}
