import {
  Notification,
  WelcTextNotification,
  DescrTextNotification,
} from './BalanceNotification.jsx';

export default function BalanceNotification() {
  return (
    <>
      <Notification>
        <WelcTextNotification>
          Hey! To get started, enter the current balance of your account!
        </WelcTextNotification>
        <DescrTextNotification>
          You can't spend money until you haven't it &#58;&#41;
        </DescrTextNotification>
      </Notification>
    </>
  );
}
