import {
  WrapperBackgroundBody,
  WrapperIcon,
  WrapperLoginForm,
  SubTitle,
  ContainerIcon,
  BackgroundBody,
} from './LoginPage.styled';
import Icons from '../../components/Icons/Icons';
// components
import Header from '../../components/Header/Header';
// import BackgroundBody from '../../components/BackgroundBody/BackgroundBody';
import LoginForm from '../../components/LoginForm/LoginForm';
import Container from '../../components/Container/Container';

export default function LoginPage() {
  return (
    <>
      <Header></Header>
      <WrapperBackgroundBody>
        <BackgroundBody padding="86px 88px 137px 49px">
          <Icons
            name="kapusta"
            color="#000000"
            width="183px"
            height="46.34px"
          />
          <SubTitle>Smart Finance</SubTitle>
          <WrapperIcon>
            <Icons
              name="mob-cabbage-up"
              color="#000000"
              width="83px"
              height="89px"
            />
          </WrapperIcon>
        </BackgroundBody>

        <WrapperLoginForm>
          <LoginForm />
        </WrapperLoginForm>
      </WrapperBackgroundBody>
      <Container>
        <ContainerIcon>
          <Icons
            name="mob-cabbage-down"
            color="#000000"
            width="83px"
            height="89px"
          />
        </ContainerIcon>
      </Container>
    </>
  );
}
