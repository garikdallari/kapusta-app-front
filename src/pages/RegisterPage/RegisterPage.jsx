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
import SignupForm from '../../components/SignupForm/SignupForm';
import Container from '../../components/Container/Container';

export default function RegisterPage() {
  return (
    <>
      <Header></Header>
      <WrapperBackgroundBody>
        <BackgroundBody>
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
          <SignupForm />
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
