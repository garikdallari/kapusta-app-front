import styled from '@emotion/styled';

export const BackGroundWrapper = styled.div`
  position: relative;
  background-color: ${props => props.theme.backgroundBodyColor};
  max-width: 767px;
  height: 286px;
  border-radius: 0px 0px 0px 80px;

  @media (min-width: 320px) {
    max-width: 767px;
    height: 286px;
  }

  @media (min-width: 768px) {
    max-width: 1280px;
    height: 526px;
  }
`;

// export const WrapperUpIcon = styled.div`
//   position: absolute;
//   top: 50%;
//   right: -16px;
// `;

/* <WrapperUpIcon>
  <Icons name="mob-cabbage-up" color="#DFE2EB" width="83px" height="89px" />
</WrapperUpIcon>; */
