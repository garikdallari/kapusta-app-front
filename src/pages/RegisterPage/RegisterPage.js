import {
  WrapperBackgroundBody,
  WrapperTopIcon,
  WrapperLoginForm,
  SubTitle,
  WrapperBottomIcon,
  BackgroundBody,
  LogoIcon,
  StyledTopIcon,
  StyledBottomIcon,
  WrapperContent,
  Container,
} from './RegisterPage.styled';
// components
import Header from '../../components/Header/Header';
import SignupForm from '../../components/SignupForm/SignupForm';
//helpers
import useWindowDimensions from '../../helpers/useWindowDimensions';
import { changeNameTopIcon } from '../../helpers/changeNameTopIcon';
import { changeNameBottomIcon } from '../../helpers/changeNameBottomIcon';

export default function LoginPage() {
  const { width } = useWindowDimensions();

  return (
    <>
      <Container>
        <Header></Header>
        <WrapperBackgroundBody>
          <BackgroundBody>
            <WrapperContent>
              <LogoIcon name="kapusta" />
              <SubTitle>Smart Finance</SubTitle>
            </WrapperContent>
            <WrapperTopIcon>
              <StyledTopIcon name={changeNameTopIcon(width)} />
            </WrapperTopIcon>
          </BackgroundBody>

          <WrapperLoginForm>
            <SignupForm />
          </WrapperLoginForm>
        </WrapperBackgroundBody>

        <WrapperBottomIcon>
          <StyledBottomIcon name={changeNameBottomIcon(width)} />
        </WrapperBottomIcon>
      </Container>
    </>
  );
}
