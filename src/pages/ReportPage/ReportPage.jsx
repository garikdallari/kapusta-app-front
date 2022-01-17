import {
  WrapperBackgroundBody,
  BackgroundBody,
} from '../LoginPage/LoginPage.styled';
// components
import Header from '../../components/Header/Header';
import Container from '../../components/Container/Container';
import ButtonLeft from '../../components/ButtonLeft/ButtonLeft';
import Accounting from '../../components/Accounting/Accounting';
import CurrentPeriod from '../../components/Balance/CurrentPeriod';
import ReportBalance from '../../components/Balance/ReportBalance';
import IconsReportSection from '../../components/IconsReportSection/IconsReportSection';

export default function LoginPage() {
  return (
    <>
      <Header></Header>
      <WrapperBackgroundBody>
        <BackgroundBody>
          <Container>
            <ButtonLeft />
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
