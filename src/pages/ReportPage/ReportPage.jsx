import {
  WrapperBackgroundBody,
  BackgroundBody,
} from '../LoginPage/LoginPage.styled';
// components
import Header from '../../components/Header/Header';
import Container from '../../components/Container/Container';
import ButtonArrowBack from '../../components/ButtonArrowBack/ButtonArrowBack';
import Accounting from '../../components/Accounting/Accounting';
import CurrentPeriod from '../../components/Balance/CurrentPeriod';
import ReportBalance from '../../components/Balance/ReportBalance';
import IconsReportSection from '../../components/IconsReportSection/IconsReportSection';

export default function ReportPage() {
  return (
    <>
      {/* <Header></Header> */}
      <WrapperBackgroundBody>
        <BackgroundBody>
          <Container>
            <ButtonArrowBack />
            <ReportBalance />
            <Accounting />
            <CurrentPeriod />
            <IconsReportSection />
          </Container>
        </BackgroundBody>
      </WrapperBackgroundBody>
    </>
  );
}
