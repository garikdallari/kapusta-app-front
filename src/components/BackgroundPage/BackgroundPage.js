import { BackGroundWrapper } from './BackgroundPage.styled';
import Icons from '../Icons/Icons';

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
