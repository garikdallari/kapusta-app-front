import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { format } from 'date-fns';
import { ReportData, Data, DataBox } from './Balance.styled.jsx';
import ArrowButtonPeriod from '../ArrowButton/ArrowButtonPeriod.js';
import transOperations from '../../redux/transactions/trans-operations';

export default function CurrentPeriod() {
  const [date, getDate] = useState(format(new Date(), 'MMM Y'));
  const [dateInMs, setDateInMs] = useState(Date.now());

  const dispatch = useDispatch();

  useEffect(() => {
    getDate(format(new Date(dateInMs), 'MMM yyyy'));
    const fetchDate = format(new Date(dateInMs), 'M-yyyy');
    dispatch(transOperations.getAllByMonth(fetchDate));
  }, [dateInMs, dispatch]);

  return (
    <>
      <Data marginBottom={'0'} textTransform={'none'}>
        <ReportData>
          <ArrowButtonPeriod
            name={'arrow-left'}
            isNext={false}
            msDate={dateInMs}
            updateValue={value => setDateInMs(value)}
          />
          <DataBox>{date}</DataBox>
          <ArrowButtonPeriod
            name={'arrow-right'}
            msDate={dateInMs}
            isNext={true}
            updateValue={value => setDateInMs(value)}
          />
        </ReportData>
      </Data>
    </>
  );
}
