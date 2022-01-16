import styled from '@emotion/styled';
import Icons from '../../components/Icons/Icons';

export const LogoIcon = styled(Icons)`
  color: #000000;
  width: 183px;
  height: 46.34px;
`;

export const BackgroundBody = styled.div`
  position: relative;
  background-color: ${props => props.theme.backgroundBodyColor};
  max-width: 767px;
  height: 286px;
  border-radius: 0px 0px 0px 80px;
  padding: 86px 88px 137px 49px;
  z-index: 0;

  @media (min-width: 320px) {
    max-width: 767px;
    height: 286px;
  }

  @media (min-width: 768px) {
    max-width: 2280px;
    height: 526px;
    padding: 90px 290px 335px 171px;
  }
`;

export const WrapperBackgroundBody = styled.div`
  position: relative;
`;

export const WrapperLoginForm = styled.div`
  @media (min-width: 320px) {
    position: absolute;
    top: 162%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media (min-width: 768px) {
    top: 86%;
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

export const WrapperTopIcon = styled.div`
  position: absolute;
  top: 40%;
  right: -15px;
  z-index: -1;

  /* @media (min-width: 768px) {
    top: 3%;
    right: -115px;
  } */

  @media (min-width: 1280px) {
  }
`;

export const StyledTopIcon = styled(Icons)`
  color: #000000;
  width: 83px;
  height: 89px;

  @media (min-width: 768px) {
    width: 1000px;
    height: 232px;
  }

  @media (min-width: 1280px) {
    width: 1334px;
  }
`;

export const WrapperBottomIcon = styled.div`
  margin-top: 407px;
`;

export const StyledBottomIcon = styled(Icons)`
  color: #000000;
  width: 83px;
  height: 89px;
`;

export const WrapperContent = styled.div``;
