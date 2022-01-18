import { Container, MenuBox } from './Header.styled.jsx';
import LogoIcon from '../LogoIcon/LogoIcon';
import UserMenu from '../UserMenu/UserMenu.jsx';

export default function Header() {
  return (
    <>
      <Container>
        <LogoIcon />
        <MenuBox>
          <UserMenu />
        </MenuBox>
      </Container>
    </>
  );
}
