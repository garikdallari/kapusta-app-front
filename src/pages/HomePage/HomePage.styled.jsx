import styled from '@emotion/styled';

export const TableSummaryWrapper = styled.div`
display:flex;
align-items:center;
justify-content:center;
@media screen and (min-width: 768px) {
    align-items: start;
    flex-direction:column;

@media screen and (min-width: 1280px) {
    flex-direction:row;
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
