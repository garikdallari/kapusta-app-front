import { useState, forwardRef } from 'react';
import DataPicker from 'react-datepicker';
import moment from 'moment';

import Icons from '../Icons/Icons';
import { Container, Current } from './CurrentDate.styled';
import styles from './CurrentDate.module.css';
import './CurrentDate.css';

export default function CurrentDate() {
  const [startDate, setStartDate] = useState(new Date());

const onChange=(date)=>{
  setStartDate(date);
  const newdate= moment(date).format("YYYY-MM-DD");
  console.log(newdate.split("-"));
}

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
        onChange={(date)=>onChange(date)}
        customInput={<ChooseDate />}
        dateFormat="dd.MM.yyyy"
      ></DataPicker>
    </Container>
  );
}
