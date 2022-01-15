import { BackGroundWrapper } from './BackgroundBody.styled';
// import Icons from '../Icons/Icons';

export default function BackgroundPage({ children, padding }) {
  return (
    <>
      <BackGroundWrapper padding={padding}>{children}</BackGroundWrapper>
    </>
  );
}
