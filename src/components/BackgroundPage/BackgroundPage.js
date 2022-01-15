import { BackGroundWrapper } from './BackgroundPage.styled';
// import cab from '../../images/cabbage/mob-cabbage-up.svg';
import Icons from '../Icons/Icons';
import cion from '../../images/cabbage/mob-cabbage-up.svg';

export default function BackgroundPage({ children }) {
  return (
    <>
      <BackGroundWrapper>
        <Icons
          name="mob-cabbage-up"
          color="#DFE2EB"
          width="83px"
          height="89px"
          //   className="button-left-panel"
        />
        {children}
      </BackGroundWrapper>
    </>
  );
}
