import styled from '@emotion/styled';

export const WrapperBackgroundBody = styled.div`
  position: relative;
`;

export const WrapperLoginForm = styled.div`
  @media (min-width: 320px) {
    position: absolute;
    top: 167%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media (min-width: 768px) {
    top: 75%;
  }
  @media (min-width: 1280px) {
    top: 75%;
    left: 76%;
  }
`;

export const SubTitle = styled.h2`
  font-family: ${props => props.theme.fontFamily};
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  line-height: 1.15;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #52555f;
  margin: 0px 0px 0px 10px;
`;
