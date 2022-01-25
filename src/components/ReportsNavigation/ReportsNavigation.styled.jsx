import styled from '@emotion/styled';
import { theme } from '../../constants/theme';

export const ReportBox = styled.a`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 15px;
  cursor: pointer;
  align-items: center;
`;

export const ReportHeader = styled.span`
  font-family: ${props => props.theme.fontFamily};
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.04em;
  color: ${theme.color.buttonDarkText};
  border: none;
  background-color: transparent;
  @media screen and (min-width: 768px) {
    margin: 0 0 0 111px;
  }

  @media screen and (min-width: 1280px) {
    margin: 0 0 0 205px;
  }
`;
