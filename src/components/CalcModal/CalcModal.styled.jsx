import styled from '@emotion/styled';
import { theme } from '../../constants/theme';

export const ModalContent = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  background-color: ${theme.color.overlay};
  width: 100vh;
  height: 100vh;

  @media screen and (max-width: 1280px) {
    display: none;
  }
`;
export const Calculator = styled.div`
  position: absolute;
  background: ${theme.color.inputBorderColorDeskTab};
  width: 150px;
  height: 145px;
  top: 465px;
  left: 255px;
  border-radius: 3px;
  border: 1px solid rgb(204, 193, 193);
`;

export const CalculatorButtons = styled.div`
  display: grid;
  grid-gap: 3px;
  grid-template-columns: repeat(3, 1fr);
  padding: 7px;
`;

export const Button = styled.button`
  min-height: 30px;
  font-size: 2px;
  font-weight: 100;
  border: none;
  background: ${theme.color.inputBorderColor};
  border-radius: 3px;
  line-height: 1.17;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
    background-color: ${theme.color.buttonOrangeBg};
  }
`;

export const Btn = styled.span`
  font-size: 15px;
  height: 30px;
  font-family: ${props => props.theme.fontFamily};
`;

export const Clear = styled.div`
  min-height: 30px;
  font-weight: 100;
  border: none;
  background: #ffffff;
  border-radius: 3px;
  line-height: 1.17;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  cursor: pointer;
  font-size: 15px;
  background: ${theme.color.buttonOrangeBg};
`;
