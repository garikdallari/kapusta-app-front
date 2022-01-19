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
    width: 104px;
    padding: 10px 10px 10px 0px;
    border-radius: 0px 22px 22px 0px;
    border-left: none;
  }

  @media (max-width: 767px) {
    margin-top: 30px;
    // width: 183px;
    margin-right: auto;
    margin-left: auto;
    padding: 12px 20px 12px 0px;
    border-radius: 0px 22px 22px 0px;
    border-left: none;
  }

  @media (min-width: 1280px) {
    border: 2px solid ${theme.color.inputBorderColorDeskTab};
    // width: 124px;
  }
`;
