import {
  UserName,
  UserAvatarBox,
  LogOutIconButton,
  UserAvatarName,
  UserNameBox,
  LogOutTextButton,
} from './UserMenu.styled';

import Icons from '../Icons/Icons';

export default function UserMenu() {
  return (
    <>
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
    </>
  );
}
