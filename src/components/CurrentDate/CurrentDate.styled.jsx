import styled from '@emotion/styled';
import { theme } from '../../constants/theme';

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;

  width: 104px;
  height: 40px;

  @media screen and (min-width: 768px) {
    margin-right: 33px;
  }

  @media screen and (min-width: 1280px) {
    margin-right: 23px;
  }
`;

export const Date = styled.span`
  margin-left: 10px;

  font-family: ${theme.fontFamily};
  font-weight: 900;
  font-size: 12px;
  line-height: 1.17;
  // letter-spacing: 0.04em;
  text-transform: uppercase;

  color: ${theme.color.buttonDarkText};
`;
