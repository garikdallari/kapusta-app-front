import {
  Container,
  MenuBox,
  UserName,
  UserAvatarBox,
  LogOutIconButton,
  UserAvatarName,
  UserNameBox,
  LogOutTextButton,
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
            <UserAvatarName>U</UserAvatarName>
          </UserAvatarBox>

          <UserNameBox>
            <UserName>User Name</UserName>
          </UserNameBox>

          <LogOutIconButton type="button">
            <Icons name="logout" width="16px" height="16px" />
          </LogOutIconButton>

          <LogOutTextButton type="button">Exit</LogOutTextButton>
        </MenuBox>
      </Container>
    </>
  );
}
