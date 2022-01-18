import styled from '@emotion/styled';
import { theme } from '../../constants/theme';

export const Section = styled.section``;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 767px) {
    margin-top: 40px;
  }

  @media (min-width: 768px) {
    margin-top: 30px;
  }
`;

export const BackdropContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;
  }

  @media (max-width: 767px) {
    background-color: ${theme.backgroundBodyColor};
    padding: 15px 19px 43px 19px;
    border-radius: 0 0 0 90px;
  }
`;
