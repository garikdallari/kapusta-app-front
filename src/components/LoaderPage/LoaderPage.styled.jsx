import styled from '@emotion/styled';

// export const BackGroundBody = styled.div`
//   justify-content: center;
//   display: flex;
//   align-items: center;
//   background-color: ${props => props.theme.backgroundBodyColor};
//   max-width: 767px;
//   height: 286px;
//   border-radius: 0px 0px 0px 80px;
//   padding: ${props => props.padding};

//   @media (min-width: 320px) {
//     max-width: 767px;
//     height: 286px;
//   }

//   @media (min-width: 768px) {
//     max-width: 2280px;
//     height: 526px;
//   }
// `;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  z-index: 10;
  opacity: 1;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1),
    visibility 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const WrapperOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: transparent;
  transform: translate(-50%, -50%) scale(1);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;
