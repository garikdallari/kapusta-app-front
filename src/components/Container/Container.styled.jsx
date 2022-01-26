import styled from '@emotion/styled';

export const Wrapper = styled.div`
  padding: 0px 0px;
  margin: 0 auto;
  min-height:100%;
  @media screen and (min-width: 320px) {

    max-width: 767px;
    padding: 0px 0px;
  }

  @media screen and (min-width: 768px) {
    position:static;
    min-height: ${props => props.minTabletHeight};
    max-width: 665px;
    padding: 0px 0px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1060px;
    min-height: ${props => props.minDesktopHeight};
  }
`;
