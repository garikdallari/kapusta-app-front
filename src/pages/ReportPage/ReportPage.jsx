import {
  WrapperBackgroundBody,
  BackgroundBody,
} from '../LoginPage/LoginPage.styled';
// components
import Header from '../../components/Header/Header';
import Container from '../../components/Container/Container';
import Accounting from '../../components/Accounting/Accounting';

export default function LoginPage() {
  return (
    <>
      <Header></Header>
      <WrapperBackgroundBody>
        <BackgroundBody>
          <Container>
            <Accounting />
          </Container>
        </BackgroundBody>
      </WrapperBackgroundBody>
    </>
  );
}
