import styled from '@emotion/styled';
import Icons from '../../components/Icons/Icons';

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

export const WrapperBottomIcon = styled.div`
display:none;

@media  (min-width: 768px) {
  position: absolute;
  z-index:-1;
  display:block;
  bottom: -316px;
  right: 63px;

  @media (min-width: 1280px) {
  bottom: -309px;
    right: 2px;
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
    /* width: 1335px; */
    width: ${props => props.width + 'px;'}
    height: 275px;
  }
`;

export const PositionWrapper = styled.div`
  position: relative;
`;
