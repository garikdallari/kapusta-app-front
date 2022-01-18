import { GoChevronLeft, GoChevronRight } from 'react-icons/go';
import { ReportData, Data, DataBox } from './Balance.styled.jsx';

export default function CurrentPeriod() {
  return (
    <>
      <Data>
        <ReportData>
          <GoChevronLeft
            style={{
              color: '#FF751D',
            }}
          ></GoChevronLeft>
          <DataBox>June 2021</DataBox>
          <GoChevronRight
            style={{
              color: '#FF751D',
            }}
          ></GoChevronRight>
        </ReportData>
      </Data>
    </>
  );
}

<GoChevronLeft></GoChevronLeft>;
