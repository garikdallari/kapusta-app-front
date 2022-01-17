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
} from './LoginPage.styled';

// components
import LoginForm from '../../components/LoginForm/LoginForm';
//helpers
import useWindowDimensions from '../../helpers/useWindowDimensions';
import { changeNameTopIcon } from '../../helpers/changeNameTopIcon';
import { changeNameBottomIcon } from '../../helpers/changeNameBottomIcon';

export default function LoginPage() {
  const { width } = useWindowDimensions();

  return (
    <>
      <Container>
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
            <LoginForm />
          </WrapperLoginForm>
        </WrapperBackgroundBody>

        <WrapperBottomIcon>
          <StyledBottomIcon name={changeNameBottomIcon(width)} />
        </WrapperBottomIcon>
      </Container>
    </>
  );
}
