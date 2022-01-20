import { useState, forwardRef } from 'react';
import DataPicker from 'react-datepicker';
import styles from './CurrentDate.module.css';

import Icons from '../Icons/Icons';
import { Container, Current } from './CurrentDate.styled';
import './CurrentDate.css';

export default function CurrentDate() {
  const [startDate, setStartDate] = useState(new Date());
  const ChooseDate = forwardRef(({ value, onClick }, ref) => (
    <Current id="datePicker" onClick={onClick} ref={ref}>
      <Icons
        name="calendar"
        color="currentColor"
        width="20px"
        height="20px"
        className={styles.icon}
      />
      {value}
    </Current>
  ));

  return (
    <Container>
      <DataPicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        customInput={<ChooseDate />}
        dateFormat="dd.MM.yyyy"
        className={styles.picker}
      ></DataPicker>
    </Container>
  );
}
