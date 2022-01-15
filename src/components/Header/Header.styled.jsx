import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 0px 10px;
  margin: 0 auto;

  @media screen and (min-width: 320px) {
    max-width: 767px;
    padding: 0px 19px;
  }

  @media screen and (min-width: 768px) {
    max-width: 1280px;
    padding: 0px 26px;
  }

  @media screen and (min-width: 1280px) {
    padding: 0px 26px;
  }
`;
