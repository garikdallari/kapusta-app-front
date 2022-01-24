import styled from '@emotion/styled';
import { theme } from '../../constants/theme';

export const Container = styled.div`
 display:${props=>props.displayMobile};
 margin-left:auto;
 margin-right:auto;
  width: 104px;
  height: 40px;
  @media (min-width: 768px) {
    display: ${props=>props.displayTablet};
    margin:0;
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
  background-color: transparent;
  cursor: pointer;
 
`;
