import Icons from '../Icons/Icons';
import authSelectors from '../../redux/auth/auth-selectors';
import authOperations from '../../redux/auth/auth-operations';
import Modal from '../Modal/Modal';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

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
  const [modal, setModal] = useState(false);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      closeModal();
    }
  };

  const closeModal = () => {
    setModal(false);
  };

  const handleClick = () => {
    setModal(true);
  };

  return (
    <>
      <UserAvatarBox>
        <UserAvatarName>{userName[0]}</UserAvatarName>
      </UserAvatarBox>

      <UserNameBox>
        <UserName>{userName}</UserName>
      </UserNameBox>

      <LogOutIconButton type="button" onClick={handleClick}>
        <Icons name="logout" width="16px" height="16px" />
      </LogOutIconButton>

      <LogOutTextButton type="button" onClick={handleClick}>
        Exit
      </LogOutTextButton>

      {modal && (
        <Modal
          onClick={closeModal}
          text="Do you really want to leave?"
          confirmOperation={authOperations.logout}
          cancelOperation={() => setModal(prevState => !prevState)}
        />
      )}
    </>
  );
}
