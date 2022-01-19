import styled from '@emotion/styled';
import { theme } from '../../constants/theme';

export const Section = styled.div`
  margin: 0 auto;
  padding: 7px 11px 7px 14px;
  width: 282px;

  background: ${theme.color.buttonWhiteBg};

  box-shadow: ${theme.color.boxShadowMobile};
  border-radius: 20px;

  @media screen and (min-width: 768px) {
    padding-right: 122px;
    padding-left: 123px;
    width: 668px;

    box-shadow: ${theme.color.boxShadow};
    border-radius: 30px;
  }

  @media screen and (min-width: 1280px) {
    padding-right: 318px;
    padding-left: 319px;
    width: 1060px;
  }
`;

export const List = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  :nth-child(1) {
    margin-right: 15px;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;

    :nth-child(1) {
      margin-right: 21px;
    }
  }
`;

export const Vertical = styled.div`
  margin-right: 10px;

  height: 71px;
  border-right: 1px solid ${theme.color.lightGray};

  @media screen and (min-width: 768px) {
    margin-right: 19px;

    height: 36px;
    border-right: 1px solid ${theme.color.lightGray};
  }
`;

export const Nomination = styled.span`
  margin: 0 0 8px 0;
  font-family: ${theme.fontFamily}, sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.14;
  color: ${theme.color.buttonDarkText};

  @media screen and (min-width: 768px) {
    margin: 0 15px 0 0;
  }
`;

export const Amount = styled.span`
  margin: 0;
  font-family: ${theme.fontFamily}, sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.14;
  letter-spacing: 0.04em;

  color: ${theme.color.expensesColor};
`;
export const AmountIncome = styled.span`
  margin: 0;
  font-family: ${theme.fontFamily};
  font-weight: 700;
  font-size: 14px;
  line-height: 1.14;
  letter-spacing: 0.04em;

  color: ${theme.color.incomeColor};
`;
