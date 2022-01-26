import {
  Notification,
  WelcTextNotification,
  DescrTextNotification,
} from './BalanceNotification.styled';
import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';

export default function BalanceNotification() {
  const showNotification = useSelector(authSelectors.isBalanceSet);

  return (
    <>
      {/* <Notification showNotification={showNotification}>
        <WelcTextNotification>
          Hey! To get started, enter the current balance of your account!
        </WelcTextNotification>
        <DescrTextNotification>
          You can't spend money until you haven't it &#58;&#41;
        </DescrTextNotification>
      </Notification> */}
    </>
  );
}
