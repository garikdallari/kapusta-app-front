import { Container, MenuBox } from './Header.styled.jsx';
import LogoIcon from '../LogoIcon/LogoIcon';

export default function Header({ children }) {
  return (
    <>
      <Container>
        <LogoIcon />
        <MenuBox>{children}</MenuBox>
      </Container>
    </>
  );
}
