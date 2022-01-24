import styled from '@emotion/styled';
import Icons from '../../components/Icons/Icons';

export const TableSummaryWrapper = styled.div`
  display: ${prop => prop.displayMobile};
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    display: block;
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: start;
  }
`;

export const PaperHomePage = styled.div`
  padding: 0;
  margin: 0;

  @media screen and (min-width: 768px) {
    width: 665px;
    padding: 28px 30px 48px 30px;
    border-radius: 0px 30px 30px 30px;
    box-shadow: ${props => props.theme.color.boxShadow};
    background-color: ${props => props.theme.color.paperBgColor};
  }
  @media screen and (min-width: 1280px) {
    padding: 33px 20px 61px 20px;
    width: 1060px;
  }
`;

export const BackgroundBody = styled.div`
  margin: 0px auto;
  position: relative;
  background-color: ${props => props.theme.backgroundBodyColor};
  max-width: 767px;
  height: 286px;
  border-radius: 0px 0px 0px 80px;
  padding: 37px 0px 0px 0px;

  @media (min-width: 320px) {
    max-width: 767px;
    height: 286px;
  }

  @media (min-width: 768px) {
    max-width: 2280px;
    height: 526px;
    padding: 35px 0px 0px 0px;
  }
`;

export const WrapperBottomIcon = styled.div`
display:none;

@media  (min-width: 768px) {
  position: absolute;
  z-index:-1;
  display:block;
  bottom: -316px;
  right: 29px;

  @media (min-width: 1280px) {
  bottom: -171px;
  right: -123px;
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

  @media (min-width: 1280px) {
    width: 1335px;
    height: 275px;
  }
`;

export const PositionWrapper = styled.div`
  position: relative;
`;
