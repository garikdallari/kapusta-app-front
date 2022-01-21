import Icons from '../Icons/Icons';
import authSelectors from '../../redux/auth/auth-selectors';
import authOperations from '../../redux/auth/auth-operations';
import { useSelector, useDispatch } from 'react-redux';
import { Modal } from '../Modal/Modal';
import { useState } from 'react';
import {
  UserName,
  UserAvatarBox,
  LogOutIconButton,
  UserAvatarName,
  UserNameBox,
  LogOutTextButton,
} from './UserMenu.styled';

export default function UserMenu() {
  const userName = useSelector(authSelectors.getUserName);
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);

  const handleClick = () => {
    setModal(prevState => !prevState);
  };

  return (
    <>
      <UserAvatarBox>
        <UserAvatarName>{userName[0]}</UserAvatarName>
      </UserAvatarBox>

      <UserNameBox>
        <UserName>{userName}</UserName>
      </UserNameBox>

      <LogOutIconButton
        type="button"
        onClick={() => dispatch(authOperations.logout())}
      >
        <Icons name="logout" width="16px" height="16px" />
      </LogOutIconButton>

      <LogOutTextButton
        type="button"
        // onClick={() => dispatch(authOperations.logout())}
        onClick={handleClick}
      >
        Exit
      </LogOutTextButton>

      {modal && <Modal></Modal>}
    </>
  );
}
