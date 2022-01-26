import styled from '@emotion/styled';
import { theme } from '../../constants/theme';

export const ContainerInputSelect = styled.div`
  width: 282px;
  height: 44px;
  margin-left: auto;
  margin-right: auto;
  border: 2px solid ${theme.color.inputBorderColor};
  border-radius: 0px 0px 16px 16px;

  @media (min-width: 768px) {
    width: 170px;
    border-radius: 0;
    border: 2px solid ${theme.color.inputBorderColorDeskTab};
  }

  @media (min-width: 1280px) {
    width: 190px;
  }
`;
