import { WrapperBackgroundBody, WrapperLoginForm } from './LoginPage.styled';
import Icons from '../../components/Icons/Icons';
// components
import Header from '../../components/Header/Header';
import BackgroundBody from '../../components/BackgroundBody/BackgroundBody';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function LoginPage() {
  return (
    <>
      <Header></Header>
      <WrapperBackgroundBody>
        <BackgroundBody />
        <WrapperLoginForm>
          <LoginForm />
        </WrapperLoginForm>
      </WrapperBackgroundBody>
    </>
  );
}
