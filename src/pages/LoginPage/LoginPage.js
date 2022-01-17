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
import Header from '../../components/Header/Header';
import LoginForm from '../../components/LoginForm/LoginForm';
//helpers
import useWindowDimensions from '../../helpers/useWindowDimensions';
import { changeNameTopIcon } from '../../helpers/changeNameTopIcon';

export default function LoginPage() {
  const { width } = useWindowDimensions();

  const changeNameBottomIcon = () => {
    if (width >= 319 && width <= 767) return 'mob-cabbage-down';
    if (width >= 768) return 'tabl-cabbage-down ';
  };

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
