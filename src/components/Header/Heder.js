import { WrapperLogo, Container } from './Header';
import LogoIcon from '../LogoIcon/LogoIcon';

export default function Header() {
  return (
    <>
      <Container>
        <WrapperLogo>
          <LogoIcon />
        </WrapperLogo>
      </Container>
    </>
  );
}
