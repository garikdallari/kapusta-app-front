import { WrapperLogo, StyledLink } from './LogoIcon.styled.jsx';
import logo from '../../images/logo/logo.png';

export default function LogoIcon() {
  return (
    <>
      <StyledLink to="/home">
        <WrapperLogo>
          <img src={logo} alt="logo" width="90px" height="31px" />
        </WrapperLogo>
      </StyledLink>
    </>
  );
}
