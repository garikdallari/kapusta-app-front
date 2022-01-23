import styled from '@emotion/styled';

export const ModalContainer = styled.div`
  position: relative;
  height: 194px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 30px;
  box-shadow: 10px 10px 30px rgba(82, 85, 95, 0.4);

  @media (min-width: 320px) {
    width: 306px;
  }
  @media (min-width: 768px) {
    width: 380px;
  }
`;
export const ModalContent = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column;
`;
export const ModalText = styled.p`
  margin: 0;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.14;
  letter-spacing: 0.02em;
  padding-bottom: 20px;
  color: ${props => props.textColor};
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 265px;
`;
export const CloseButton = styled.button`
  position: absolute;
  right: 20px;
  top: 20px;
  padding: 0;
  margin: 0;
  border: none;
  background-color: inherit;
  stroke: #52555f;
  cursor: pointer;
`;
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(4 4 4 / 59%);
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
