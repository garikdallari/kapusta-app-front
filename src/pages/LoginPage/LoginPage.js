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
import LoginForm from '../../components/LoginForm/LoginForm';
import Container from '../../components/Container/Container';
import useWindowDimensions from '../../helpers/useWindowDimensions';

export default function LoginPage() {
  const { width } = useWindowDimensions();

  const changeUpIcon = width => {
    if (width > 319 && width < 767) return 'mob-cabbage-up';
    if (width > 768 && width < 1279) return 'tabl-cabbage-up';
  };

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
              name={changeUpIcon(width)}
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
