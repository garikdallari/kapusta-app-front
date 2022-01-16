import styled from '@emotion/styled';
import { theme } from '../../constants/theme';

export const ContainerWallet = styled.div`
  border: 2px solid ${theme.color.inputBorderColor};
  border-radius: 22px;
  display: block;
  width: 183px;
  height: 44px;
  padding: 12px 20px 12px 0px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
  margin-top: 30px;
`;

export const ContainerBalance = styled.span`
  font-size: ${theme.fontSize.descriptionProduct};
  margin-right: 20px;
  font-weight: bold;
  letter-spacing: 0.02em;
  border-right: 2px solid ${theme.color.inputBorderColor};
  height: 40px;
  padding-right: 15px;
  display: flex;
  align-items: center;
`;
