import {
  Container,
  MenuBox,
  UserName,
  UserAvatarBox,
  LogOutButton,
  UserAvatarName,
  UserNameBox,
} from './Header.styled.jsx';
import LogoIcon from '../LogoIcon/LogoIcon';
import Icons from '../../components/Icons/Icons';

export default function Header() {
  return (
    <>
      <Container>
        <LogoIcon />
        <MenuBox>
          <UserAvatarBox>
            <UserAvatarName>A</UserAvatarName>
          </UserAvatarBox>

          <UserNameBox>
            <UserName>User Name</UserName>
          </UserNameBox>

          <LogOutButton type="button">
            <Icons name="logout" width="16px" height="16px" />
          </LogOutButton>
        </MenuBox>
      </Container>
    </>
  );
}
