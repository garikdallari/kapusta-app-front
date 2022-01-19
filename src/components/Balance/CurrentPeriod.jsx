import { createContext } from 'react';
import { ReportData, Data, DataBox } from './Balance.styled.jsx';
import ArrowButton from '../ArrowButton/ArrowButton.js';
import { useState } from 'react';

export default function CurrentPeriod({ updateValue }) {
  const [selector, setSelector] = useState('expense');

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
          <DataBox>{selector}</DataBox>
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
