import styled from '@emotion/styled';
import { theme } from '../../constants/theme';

export const ContainerWallet = styled.div`
  border: 2px solid ${theme.color.inputBorderColor};
  width: 60px;
  height: 44px;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (min-width: 768px) {
    border: 2px solid ${theme.color.inputBorderColorDeskTab};
    padding: 10px 10px 10px 0px;
    border-radius: 0px 22px 22px 0px;
    border-left: none;
    width: 40px;
  }

  @media (max-width: 767px) {
    margin-top: 30px;
    margin-right: auto;
    margin-left: auto;
    padding: 12px 20px 12px 0px;
    border-radius: 0px 22px 22px 0px;
    border-left: none;
  }

  @media (min-width: 1280px) {
    border-color: ${theme.color.inputBorderColorDeskTab};
  }
`;

export const ModalContainer = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
background-color: transparent;
z-index: 1000;
  }
`;

export const ModalContent = styled.div`
  position: absolute;
  display: flex;
  top: 40%;
  left: 60%;
  transform: translate(-50%, -50%);
  min-height: 194px;
  max-width: 380px;
  width: 100%;
  padding: 12px;
  background-color: var(--white-color);
  border-radius: 30px;
  box-shadow: 10px 10px 30px rgba(82, 85, 95, 0.4);
`;

export const ButtonOpen = styled.button``;
