import { ReportBox, ReportHeader } from './ReportsNavigation.styled';
import Icons from '../Icons/Icons';

export default function ReportsNavigation() {
  return (
    <>
      <ReportBox>
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
