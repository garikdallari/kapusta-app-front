import styled from '@emotion/styled';

export const NavBox = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 30px;
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const ReportContainer = styled.div`
  @media screen and (max-width: 768px) {
    max-width: 350px;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: 768px) {
    max-width: 657px;
    margin-left: auto;
    margin-right: auto;
  }
  @media screen and (min-width: 768px) {
    max-width: 1055px;
    margin-left: auto;
    margin-right: auto;
  }
`;
