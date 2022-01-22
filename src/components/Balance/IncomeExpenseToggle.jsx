import { ReportData, Data, DataBox } from './Balance.styled.jsx';
import ArrowButton from '../ArrowButton/ArrowButton.js';
import { useState, useEffect } from 'react';

import { format } from 'date-fns';

export default function CurrentPeriod({ updateValue, isDate }) {
  const [selector, setSelector] = useState('expense');
  const [date, getDate] = useState(Date.now());

  const dateNow = format(new Date(2022, 0, 6), 'MMM Y');

  useEffect(() => {
    getDate(dateNow);
  }, [date]);

  return (
    <>
      <Data>
        <ReportData>
          <ArrowButton
            name={'arrow-left'}
            date={'10-2021'}
            updateValue={value => setSelector(value)}
            currentValue={selector}
            onClick={() => updateValue(selector)}
          />
          <DataBox>{isDate ? date : selector}</DataBox>
          <ArrowButton
            name={'arrow-right'}
            date={'12-2021'}
            updateValue={value => setSelector(value)}
            currentValue={selector}
          />
        </ReportData>
      </Data>
    </>
  );
}
