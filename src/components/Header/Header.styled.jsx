import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 0px 10px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  @media (min-width: 320px) {
    max-width: 767px;
    padding: 0px 19px;
  }

  @media (min-width: 768px) {
    max-width: 1280px;
    padding: 0px 26px;
  }

  @media (min-width: 1280px) {
    padding: 0px 26px;
    max-width: 1980px;
  }
`;

export const MenuBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 0px 13px 0px;
`;
