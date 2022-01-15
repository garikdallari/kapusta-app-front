import { BackGroundWrapper } from './BackgroundPage.styled';
import cab from '../../images/cabbage/mob-cabbage-up.svg';

export default function BackgroundPage({ children }) {
  return (
    <>
      <BackGroundWrapper>
        <div>
          <img src={cab} alt="logo" width="83px" height="89px" />
        </div>
        {children}
      </BackGroundWrapper>
    </>
  );
}
