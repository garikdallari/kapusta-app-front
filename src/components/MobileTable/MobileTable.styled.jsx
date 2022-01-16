import styled from '@emotion/styled';

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

export const StyledMobileTable = styled.div`
  overflow-y: auto;
  height: 150px;
  width: 282px;
  margin-bottom: 50px;
  letter-spacing: 0.04em;
  color: #52555f;
  font-weight: 700;
  font-family: ${props => props.theme.fontFamily};
  font-size: 12px;
  line-height: 1.16;

  ::-webkit-scrollbar {
    width: 4px;
    background-color: #f5f6fb;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #ff751d;
    border-radius: 2px;
 
  }
  ::-webkit-scrollbar-track-piece {
    background-color: #f5f6fb;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

export const BodyTr = styled.tr`
  height: 50px;
  border-bottom: 1px solid #f5f6fb;
`;
export const DeleteTd = styled.td`
  width: 60px;
  text-align: end;
`;

export const AmountTd = styled.td`
  width: 100px;
  text-align: end;
`;

export const DescriptionTd = styled.td`
&:first-letter{
    text-transform: uppercase;
   }`;

export const StyledP = styled.p`
font-size: 8px;
line-height: 1.13;
font-weight: 400;
margin:0;
margin-top:3px;
`

export const Date = styled.span`
margin-right:20px;
`

export const Category = styled.span`
display:inline-block;

&:first-letter{
    text-transform: uppercase;
}`
