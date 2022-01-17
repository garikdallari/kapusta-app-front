import { GoChevronLeft, GoChevronRight } from 'react-icons/go';
import { ReportData, Data } from './Balance.styled.jsx';

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
          June 2021
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
