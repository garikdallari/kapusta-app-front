import styled from '@emotion/styled';
import { theme } from '../../constants/theme';

const pointer = 'pointer';
const none = 'default';

export const WrapperInput = styled.div`
  display: ${prop => prop.displayMobile};
  flex-direction: column;
  gap: 40px;
  margin: 0 0 30px 0;

  @media screen and (min-width: 768px) {
    padding: 0 9px 0 9px;
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-start;
    align-items: center;
    gap: ${props => props.gap};
    padding: 0;
    margin-bottom: 0;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 9px;
    gap: 225px;
    gap: ${props => props.gap};
  }
`;

export const BalanceBox = styled.div`
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 0;

  @media screen and (min-width: 768px) {
    margin: 0;
    display: flex;
    align-items: center;
    gap: 22px;
  }

  @media screen and (min-width: 1280px) {
    align-items: center;
  }
`;

export const BalanceTitle = styled.p`
  text-align: center;
  font-family: ${props => props.theme.fontFamily};
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.04em;
  color: ${theme.color.buttonDarkText};
  margin: 43px 0 6px 0;
  @media screen and (min-width: 768px) {
    margin: 0 auto;
  }
`;

export const InputContainer = styled.form`
  position: relative;
  display: ${props => props.display};
  justify-content: center;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    display: ${props => props.display};
  }
`;

export const Label = styled.label`
  position: relative;
  left: 110px;
  top: 16px;
  font-family: ${props => props.theme.fontFamily};
  color: ${theme.color.blackText};
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
`;

export const BalanceInput = styled.input`
  padding: 12px 22px 12px 22px;
  width: 125px;
  height: 44px;
  border: 2px solid white;
  border-radius: 22px 0px 0px 22px;
  box-sizing: border-box;
  outline: none;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  letter-spacing: 0.02em;
  background-color: ${theme.color.overlay};
  &::placeholder {
    color: ${theme.color.blackText};
    font-family: ${props => props.theme.fontFamily};
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    text-align: center;
    letter-spacing: 0.02em;
    text-transform: uppercase;
  }
  @media screen and (min-width: 768px) {
    border-radius: 16px;
    margin: 0 15px 0 0;
  }
`;

export const BalanceButton = styled.button`
  width: 125px;
  height: 44px;
  border: 2px solid white;
  border-radius: 0px 22px 22px 0px;
  box-sizing: border-box;
  outline: none;
  cursor: pointer;
  font-family: ${props => props.theme.fontFamily};
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: ${theme.color.buttonDarkText};
  background-color: transparent;
  box-sizing: border-box;
  &:hover {
    background-color: ${props =>
      props.disabled ? false : theme.color.buttonOrangeBg};
    color: ${props => (props.disabled ? false : theme.color.buttonWhiteText)};
    cursor: ${props => (props.disabled ? none : pointer)};
  }
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    border-radius: 16px;
  }
`;
export const ReportTitle = styled.div`
  text-align: center;
  font-family: ${props => props.theme.fontFamily};
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.04em;
  color: ${theme.color.buttonDarkText};
  margin: 30px 0 6px 0;
  @media screen and (min-width: 768px) {
    margin: 0 auto;
  }
`;
export const ReportInput = styled.input`
  padding: 12px 22px 12px 22px;
  margin: 0 auto;
  width: 125px;
  height: 44px;
  margin-right: auto;
  margin-left: auto;
  border: 2px solid white;
  box-sizing: border-box;
  border-radius: 22px;
  outline: none;
  background-color: ${theme.color.overlay};
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  text-align: center;
  &::placeholder {
    color: ${theme.color.blackText};
    font-family: ${props => props.theme.fontFamily};
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    text-align: center;
    letter-spacing: 0.02em;
    text-transform: uppercase;
  }

  @media screen and (min-width: 768px) {
    margin: 0 auto;
  }

  @media screen and (min-width: 1280px) {
    margin: 0 15px 5px 21px;
  }
`;

export const ReportButton = styled.button`
  display: ${props => props.display};
  padding: 12px 30px 12px 30px;
  margin: 0 0 5px 0;
  width: 125px;
  height: 44px;
  margin-right: auto;
  margin-left: auto;
  border: 2px solid white;
  box-sizing: border-box;
  border-radius: 22px;
  outline: none;
  background-color: ${theme.color.overlay};
  @media screen and (min-width: 768px) {
    margin: 0 80px 0 21px;
  }

  @media screen and (min-width: 1280px) {
    margin: 0 225px 0 21px;
  }
  @media (max-width: 1279px) {
    display: none;
  }
`;

export const LabelReport = styled.span`
  position: relative;
  left: 110px;
  top: 0px;
  font-family: ${props => props.theme.fontFamily};
  color: ${theme.color.blackText};
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  @media screen and (min-width: 1280px) {
    left: 130px;
  }
`;

export const ReportData = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  display: flex;
  border-box: center;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`;

export const Data = styled.div`
  font-family: ${props => props.theme.fontFamily};
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.02em;
  text-transform: ${({ textTransform }) => textTransform};
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 20px;
  margin-top: 0;
  @media screen and (min-width: 768px) {
    margin-bottom: ${({ marginBottom }) => marginBottom};
  }
`;

export const DataBox = styled.p`
  margin: 5px 15px 0 15px;
  @media screen and (min-width: 768px) {
    margin-top: ${({ marginTop }) => marginTop};
    margin-bottom: ${({ marginBottom }) => marginBottom};
  }
`;
