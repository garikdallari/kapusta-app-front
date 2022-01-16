import styled from '@emotion/styled';

export const SummaryTable = styled.table`
  background-color: #f5f6fb;
  border-collapse: collapse;
  width: 100%;
  `;

export const SummaryWrapper = styled.div`
  background-color: #f5f6fb;
  border-radius: 20px 20px 20px 0;
  overflow: hidden;
  width: 230px;
  height: 266px;
  font-family: Roboto;
  font-size: 12px;
  line-height: 1.16;
  align-items: center;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #52555f;
`;

export const StyledTr = styled.tr`
  border: 2px solid #ffffff;
  height: 38px;
  &:first-child{border-top:none;}
  text-align: left;
`;

export const HeadTd = styled.div`
display:flex;
border: 2px solid #ffffff;
height: 38px;
  font-weight: 700;
  letter-spacing: 0.02em;
  color: #000000;
 align-items:center;
 justify-content:center;
`;

export const MontTd = styled.td`
padding-left: 20px;
 `