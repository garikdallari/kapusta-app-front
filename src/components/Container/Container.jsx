import { Wrapper } from './Container.styled';

export default function Container({
  minTabletHeight,
  minDesktopHeight,
  minMobileHeight,
  children,
}) {
  return (
    <>
      <Wrapper
        minTabletHeight={minTabletHeight}
        minDesktopHeight={minDesktopHeight}
        minMobileHeight={minMobileHeight}
      >
        {children}
      </Wrapper>
    </>
  );
}
