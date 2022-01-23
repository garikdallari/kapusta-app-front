import styled from '@emotion/styled';

export const SummaryTable = styled.table`
  background-color: ${props => props.theme.backgroundBodyColor};
  border-collapse: collapse;
  width: 100%;
`;

export const SummaryWrapper = styled.div`
  display: none;
  background-color: ${props => props.theme.backgroundBodyColor};
  border-radius: 20px 20px 20px 0;
  overflow: hidden;
  width: 230px;
  height: 266px;
  font-family: ${props => props.theme.fontFamily};
  font-size: ${props => props.theme.fontSize.descriptionProduct};
  line-height: 1.16;
  align-items: center;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${props => props.theme.color.buttonDarkText};
 

  @media screen and (min-width: 768px) {
    display: block;
    position: absolute;
    z-index: 99;
    left:0;
    bottom:0;
    transform: translate(30px,318px);
  }

  @media screen and (min-width: 1280px) {
    transform: translate(814px,-180px);
  }
`;

export const StyledTr = styled.tr`
  border-bottom: 2px solid #ffffff;
  height: 38px;
  text-align: left;
`;

export const HeadTd = styled.div`
  display: flex;
  border-bottom: 2px solid #ffffff;
  height: 38px;
  font-weight: 700;
  letter-spacing: 0.02em;
  color: #000000;
  align-items: center;
  justify-content: center;
`;

export const MontTd = styled.td`
  padding-left: 20px;
`;
