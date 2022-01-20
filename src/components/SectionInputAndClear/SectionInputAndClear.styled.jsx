import styled from '@emotion/styled';
import { theme } from '../../constants/theme';

export const Section = styled.section`
  @media (min-width: 1280px) {
    display: flex;
  }
`;
export const Container = styled.div`
  @media (max-width: 767px) {
    padding: 15px 19px 43px 19px;
  }

  @media (min-width: 768px) {
    display: flex;
  }
`;

export const ButtonContainer = styled.div`
  height: 44px;
  display: flex;
  justify-content: center;

  @media (max-width: 767px) {
    margin-top: 40px;
    margin-bottom: 48px;
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    margin-top: 30px;
    margin-bottom: 48px;
  }
  @media (min-width: 1280px) {
    margin-bottom: 60px;
  }

  @media (min-width: 1280px) {
    margin-left: 26px;
  }
`;
