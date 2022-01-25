import {
  Notification,
  WelcTextNotification,
  DescrTextNotification,
} from './BalanceNotification.styled';
import { useSelector, useDispatch } from 'react-redux';
import { isBalanceSet } from '../../redux/balance/balance-selectors.js';
import { firstSetBalance } from '../../redux/balance/balance-operations';
import authSelectors from '../../redux/auth/auth-selectors';
import { useEffect } from 'react';

export default function BalanceNotification() {
 const dispatch= useDispatch();
const showNotification=useSelector(isBalanceSet);
const token = useSelector(authSelectors.getToken);


useEffect(()=>{dispatch(firstSetBalance(token))},[dispatch,token,showNotification]);

  return (
    <>
      <Notification showNotification={showNotification}>
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
