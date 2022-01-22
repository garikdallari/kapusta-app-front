import styled from '@emotion/styled';

export const ButtonExpense = styled.button`
height:53px;
width:159px;
background-color:${props => props.theme.backgroundBodyColor};
color:#000000;
text-transform:uppercase;
font-family:${props => props.theme.fontFamily};
font-weight: 700;
font-size: ${props => props.theme.fontSize.descriptionProduct};
Line height: 1.16;
Letter spacing: 0.02em;
border:none;
margin-right:2px;
cursor:pointer;
padding:7px 30px 7px 30px;
transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

:hover, :focus{
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    color: ${props => props.theme.color.inputBorderColor};
  background-color:  ${props => props.theme.color.buttonOrangeBg};
}

@media screen and (min-width: 768px) {
  position:relative;
  z-index:${props =>props.active?"5":"0"}
   width:138px;
   height:40px;
   color: ${props =>props.active?props.theme.color.buttonOrangeBg:"#000000"};
   background-color: ${props =>props.active?"white":"#FAFBFD"};
   border-radius:  20px 20px 0 0;
   margin:0;

:hover, :focus{
  color:  ${props =>props.active?props.theme.color.buttonOrangeBg:"#000000"};
  background-color: ${props =>props.active?"white":"#FAFBFD"};
}
}`;

export const ButtonIncome = styled.button`
height:53px;
width:159px;
background-color:${props => props.theme.backgroundBodyColor};
color:color:#000000;
text-transform:uppercase;
font-family:${props => props.theme.fontFamily};
font-weight: 700;
font-size: ${props => props.theme.fontSize.descriptionProduct};
Line height: 1.16;
Letter spacing: 0.02em;
border:none;
margin-right:0;
cursor:pointer;
padding:7px 30px 7px 30px;
transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

:hover, :focus{
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    color: ${props => props.theme.color.inputBorderColor};
  background-color:  ${props => props.theme.color.buttonOrangeBg};
}

@media screen and (min-width: 768px) {
  position:relative;
  z-index:${props =>props.active?"5":"0"}
   width:138px;
   height:40px;
   color:${props =>props.active?props.theme.color.buttonOrangeBg:"#000000"};
   background-color:  ${props =>props.active?"white":"#FAFBFD"};
   border-radius:  20px 20px 0 0;
   margin:0;

  :hover, :focus{
    color:${props =>props.active?props.theme.color.buttonOrangeBg:"#000000"};
    background-color:${props =>props.active?"white":"#FAFBFD"}}
}
`;

export const ButtonsWrapper = styled.div`
display: flex;
position:relative;
right:3px;
@media (min-width: 768px) {
position:static;
}`