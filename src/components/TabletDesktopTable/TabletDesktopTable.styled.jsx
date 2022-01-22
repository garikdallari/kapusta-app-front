import styled from '@emotion/styled';
        
export const StyledTable = styled.div`
display: none;

  @media screen and (min-width: 768px) {
   display: block;
   width: 605px;
  
   border-radius: 20px 20px 0 0;
  overflow: hidden;
  font-family: ${props => props.theme.fontFamily};
  font-size: ${props => props.theme.fontSize.descriptionProduct};
  line-height: 1.16;
  color: ${props => props.theme.color.buttonDarkText};
  margin-bottom: 50px;
  }

  @media screen and (min-width: 1280px) {
    width: 760px;
    margin:0;
    margin-right: 30px;
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
    background-color:${props => props.theme.backgroundBodyColor};
    border-radius:50%;
    
`;

export const ScrollBody = styled.div`
  overflow-y: scroll;
  height: 344px;


  ::-webkit-scrollbar {
    width: 6px;
    background-color: ${props => props.theme.backgroundBodyColor};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.color.buttonOrangeBg};
    border-radius: 2px;
  }
  ::-webkit-scrollbar-track-piece{
    background-color:${props => props.theme.backgroundBodyColor};
  }
`;

export const HeadTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  height: 40px;
  font-weight: 700;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  background-color: ${props => props.theme.backgroundBodyColor};
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
  border: 2px solid ${props => props.theme.backgroundBodyColor};
  font-weight: 400;
  letter-spacing: 0.04em;
  text-align: left;
`;

export const DateTd = styled.td`
  width: 100px;
  padding-left: 18px;
`;
export const StyledTd = styled.td`

&:first-letter{
  text-transform: uppercase;
}
  width: 100px;
  text-align: center;
`;

export const TabletText = styled.p`

&:first-letter{
  text-transform: uppercase;
}
@media screen and (min-width: 768px) {
  display: block;
}
@media screen and (min-width: 1280px) {
  display:none;
}`

export const DesktopText = styled.p`

&:first-letter{
  text-transform: uppercase;
}

@media screen and (min-width: 768px) {
  display: none;
}
@media screen and (min-width: 1280px) {
  display:block;
}`
