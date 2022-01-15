import { BackGroundWrapper } from './BackgroundBody.styled';
// import Icons from '../Icons/Icons';

export default function BackgroundPage({ children }) {
  return (
    <>
      <BackGroundWrapper>{children}</BackGroundWrapper>
    </>
  );
}
