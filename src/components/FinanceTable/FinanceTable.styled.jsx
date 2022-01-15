import styled from '@emotion/styled';
        
export const StyledFinanceTable = styled.div`
  border-radius: 20px 20px 0 0;
  overflow: hidden;
  font-family: ${props => props.theme.fontFamily};
  font-size: 12px;
  line-height: 1.16;
  color: #52555f;
  width: 282px;
  display: none;
  margin-top: 50px;
  margin-bottom: 50px;

  @media screen and (min-width: 768px) {
    display: block;
    width: 605px;
  }

  @media screen and (min-width: 1280px) {
    width: 760px;
  }
`;
export const DeleteBtn = styled.button`
border: none;
background-color: transparent;
cursor: pointer;
text-align: center;
width: 32px;
height: 32px;
aligh-self: center;
transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
&:hover, &:focus{
    background-color: #F5F6FB;
    border-radius:50%;
    
`;

export const ScrollBody = styled.div`
  overflow-y: scroll;
  height: 344px;


  ::-webkit-scrollbar {
    width: 6px;
    background-color: #f5f6fb;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #ff751d;
    border-radius: 2px;
  }
  ::-webkit-scrollbar-track-piece{
    background-color: #f5f6fb;
  }
`;

export const HeadTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  height: 40px;
  font-weight: 700;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  background-color: #f5f6fb;
  width: 100%;
  table-layout: fixed;
  text-align: left;
`;

export const BodyTable = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

export const BodyTr = styled.tr`
  height: 40px;
  border: 2px solid #f5f6fb;
  font-weight: 400;
  letter-spacing: 0.04em;
  text-align: left;
`;

export const DateTd = styled.td`
  width: 100px;
  padding-left: 18px;
`;
export const StyledTd = styled.td`
  width: 100px;
  text-align: center;
`;

export const TabletText = styled.p`
@media screen and (min-width: 768px) {
  display: block;
}
@media screen and (min-width: 1280px) {
  display:none;
}`

export const DesktopText = styled.p`
@media screen and (min-width: 768px) {
  display: none;
}
@media screen and (min-width: 1280px) {
  display:block;
}`
