import styled from '@emotion/styled';
import { theme } from '../../constants/theme';

export const Container = styled.div`
  width: 104px;
  height: 40px;

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const Current = styled.button`
  display: flex;
  align-items: center;

  padding: 10px 0;

  width: 104px;
  height: 40px;

  font-family: ${theme.fontFamily}, sans-serif;
  font-weight: 900;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: 0.04em;
  text-transform: uppercase;

  color: ${theme.color.buttonDarkText};

  border: none;
  background-color: #ffffff;
  cursor: pointer;
`;
