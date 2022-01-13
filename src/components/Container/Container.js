import { Wrapper } from './Container.styled';

export default function Container({ children }) {
  return (
    <>
      <Wrapper>{children}</Wrapper>
    </>
  );
}
