import {
  UserName,
  UserAvatarBox,
  LogOutIconButton,
  UserAvatarName,
  UserNameBox,
  LogOutTextButton,
} from './UserMenu.styled';

import Icons from '../Icons/Icons';
import authSelectors from '../../redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

export default function UserMenu() {
  const userName = useSelector(authSelectors.getUserName);

  return (
    <>
      <UserAvatarBox>
        <UserAvatarName>{userName[0]}</UserAvatarName>
      </UserAvatarBox>

      <UserNameBox>
        <UserName>{userName}</UserName>
      </UserNameBox>

      <LogOutIconButton type="button">
        <Icons name="logout" width="16px" height="16px" />
      </LogOutIconButton>

      <LogOutTextButton type="button">Exit</LogOutTextButton>
    </>
  );
}
