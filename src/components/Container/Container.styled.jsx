import styled from '@emotion/styled';

export const Wrapper = styled.div`
  padding: 0px 20px;
  margin: 0 auto;

  @media screen and (min-width: 320px) {
    max-width: 767px;
  }

  @media screen and (min-width: 768px) {
    max-width: 1199px;
    padding: 0px 40px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 2560px;
  }
`;
