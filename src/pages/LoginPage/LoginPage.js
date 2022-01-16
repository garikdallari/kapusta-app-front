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
} from './LoginPage.styled';
// components
import Header from '../../components/Header/Header';
import LoginForm from '../../components/LoginForm/LoginForm';
import Container from '../../components/Container/Container';
import useWindowDimensions from '../../helpers/useWindowDimensions';

export default function LoginPage() {
  const { width } = useWindowDimensions();

  const changeTopIcon = width => {
    console.log(width);
    if (width > 319 && width < 767) return 'mob-cabbage-up';
    if (width > 768 && width < 1279) return 'tabl-cabbage-up';
    if (width > 1280) return 'desc-cabbage-up';
  };

  return (
    <>
      <Header></Header>
      <WrapperBackgroundBody>
        <BackgroundBody>
          <LogoIcon name="kapusta" />
          <SubTitle>Smart Finance</SubTitle>
          <WrapperTopIcon>
            <StyledTopIcon name={changeTopIcon(width)} />
          </WrapperTopIcon>
        </BackgroundBody>

        <WrapperLoginForm>
          <LoginForm />
        </WrapperLoginForm>
      </WrapperBackgroundBody>

      <Container>
        <WrapperBottomIcon>
          <StyledBottomIcon name="mob-cabbage-down" />
        </WrapperBottomIcon>
      </Container>
    </>
  );
}
