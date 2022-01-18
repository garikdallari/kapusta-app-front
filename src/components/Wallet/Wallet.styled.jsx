import styled from '@emotion/styled';
import { theme } from '../../constants/theme';

export const ContainerWallet = styled.div`
  border: 2px solid ${theme.color.inputBorderColor};
  width: 183px;
  height: 44px;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (min-width: 768px) {
    border: 2px solid ${theme.color.inputPlaceholderColor};
    width: 104px;
    padding: 10px 10px 10px 0px;
    border-radius: 0px 22px 22px 0px;
    border-left: none;
  }

  @media (max-width: 767px) {
    margin-top: 30px;
    width: 183px;
    margin-right: auto;
    margin-left: auto;
    padding: 12px 20px 12px 0px;
    border-radius: 22px;
  }

  @media (min-width: 1280px) {
    width: 124px;
  }
`;

export const ContainerBalance = styled.span`
  font-size: ${theme.fontSize.descriptionProduct};
  letter-spacing: 0.02em;
  border-right: 2px solid ${theme.color.inputBorderColor};
  height: 40px;

  display: flex;
  align-items: center;

  @media (min-width: 768px) {
    color: ${theme.color.inputPlaceholderColor};
  }

  @media (max-width: 767px) {
    font-weight: bold;
    padding-right: 15px;
    margin-right: 20px;
  }
`;
