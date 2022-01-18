import { Container, MenuBox } from './Header.styled.jsx';
import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors.js';
//components
import LogoIcon from '../LogoIcon/LogoIcon';
import UserMenu from '../UserMenu/UserMenu.jsx';

export default function Header() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <>
      <Container>
        <LogoIcon />
        {isLoggedIn && (
          <>
            <MenuBox>
              <UserMenu></UserMenu>
            </MenuBox>
          </>
        )}
      </Container>
    </>
  );
}
