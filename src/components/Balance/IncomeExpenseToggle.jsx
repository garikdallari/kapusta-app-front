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
      <Data textTransform={'uppercase'}>
        <ReportData>
          <ArrowButton
            name={'arrow-left'}
            updateValue={value => setSelector(value)}
            currentValue={selector}
            onClick={() => updateValue(selector)}
          />
          <DataBox marginTop={'0'}>{isDate ? date : selector}</DataBox>
          <ArrowButton
            name={'arrow-right'}
            updateValue={value => setSelector(value)}
            currentValue={selector}
          />
        </ReportData>
      </Data>
    </>
  );
}
