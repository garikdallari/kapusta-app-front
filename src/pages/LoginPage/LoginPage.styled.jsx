import styled from '@emotion/styled';
import Icons from '../../components/Icons/Icons';

export const Container = styled.div`
  padding: 0px 0px;
  margin: 0 auto;
  max-width: 767px;

  @media (min-width: 768px) {
    max-width: 1280px;
  }

  @media (min-width: 1280px) {
    max-width: 1980px;
  }
`;

export const LogoIcon = styled(Icons)`
  color: #000000;
  width: 183px;
  height: 46.34px;

  @media (min-width: 768px) {
    width: 306px;
    height: 100px;
  }
  @media (min-width: 1280px) {
    width: 377px;
    height: 120px;
  }
`;

export const BackgroundBody = styled.div`
  position: relative;
  background-color: ${props => props.theme.backgroundBodyColor};
  max-width: 767px;
  height: 286px;
  border-radius: 0px 0px 0px 80px;
  padding: 86px 88px 137px 49px;
  z-index: 0;

  @media (min-width: 768px) {
    max-width: 1980px;
    height: 526px;
    padding: 77px 290px 335px 171px;
  }

  @media (min-width: 1280px) {
    padding: 308px 673px 79px 230px;
  }
`;

export const BackgroundBodyReport = styled.div`
  position: relative;
  background-color: ${props => props.theme.backgroundBodyColor};
  max-width: 767px;
  height: 286px;
  border-radius: 0px 0px 0px 80px;
  padding: 21px 19px 51px 19px;
  z-index: 0;

  @media (min-width: 768px) {
    max-width: 1280px;
    height: 526px;
    padding: 42px 50px 76px 50px;
  }

  @media (min-width: 1280px) {
    max-width: 100vw;
    margin: auto;
    padding: 43px 110px 74px 110px;
  }
`;

export const WrapperBackgroundBody = styled.div`
  position: relative;
  width:100vw;
`;

export const WrapperLoginForm = styled.div`
  @media (min-width: 320px) {
    position: absolute;
    top: 162%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media (min-width: 768px) {
    top: 92%;
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

  @media (min-width: 768px) {
    margin: 0px 0px 0px 58px;
    font-size: 16px;
    line-height: 1.18;
  }

  @media (min-width: 1280px) {
    margin: 0px 0px 0px 70px;
  }
`;

export const WrapperTopIcon = styled.div`
  position: absolute;
  top: 40%;
  right: -1px;
  z-index: -1;

  @media (min-width: 768px) {
    top: 3%;
    right: 3px;
  }

  @media (min-width: 1280px) {
    top: 8%;
    right: 3px;
  }
`;

export const StyledTopIcon = styled(Icons)`
  color: #000000;
  width: 83px;
  height: 89px;

  @media (min-width: 768px) {
    width: 750px;
    height: 232px;
  }

  @media (min-width: 1280px) {
    width: 1254px;
  }
`;

export const WrapperBottomIcon = styled.div`
  margin: 407px 0px 0px 35px;

  @media (min-width: 768px) {
    position: relative;
    margin: 206px 0px 56px 114px;
  }

  @media (min-width: 1280px) {
    margin: 76px 867px 50px 230px;
  }
`;

export const StyledBottomIcon = styled(Icons)`
  color: #000000;
  width: 83px;
  height: 89px;
  @media (min-width: 768px) {
    width: 183px;
    height: 142px;
  }
`;

export const WrapperContent = styled.div``;
