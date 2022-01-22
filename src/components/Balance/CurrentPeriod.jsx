import { createContext } from 'react';
import { ReportData, Data, DataBox } from './Balance.styled.jsx';
import ArrowButton from '../ArrowButton/ArrowButton.js';
import { useState, useEffect } from 'react';

import { format } from 'date-fns';

export default function CurrentPeriod({}) {
  // const [selector, setSelector] = useState('expense');
  const dateNow = format(new Date(), 'MMM Y');
  const currentMonth = format(new Date(), 'M');

  const [date, getDate] = useState(dateNow);

  // console.log(nextMonth);

  useEffect(() => {
    getDate(dateNow);
  }, [date]);

  const handleClick = isNext => {
    let res;
    if (isNext) {
      res = format(new Date()., 'MMM');
    }
    return res;
  };
  console.log(handleClick(true));
  console.log(new Date().getMonth() + 2);

  return (
    <>
      <Data>
        <ReportData>
          <ArrowButton
            name={'arrow-left'}
            date={'10-2021'}
            isDate={false}
            // updateValue={value => setSelector(value)}
            // currentValue={selector}
            onClick={() => handleClick(false)}
          />
          <DataBox>{date}</DataBox>
          <ArrowButton
            name={'arrow-right'}
            date={'12-2021'}
            isDate={false}
            // updateValue={value => setSelector(value)}
            // currentValue={selector}
            onClick={() => handleClick(true)}
          />
        </ReportData>
      </Data>
    </>
  );
}
