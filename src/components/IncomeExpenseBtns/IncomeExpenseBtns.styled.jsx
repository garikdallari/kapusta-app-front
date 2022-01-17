import styled from '@emotion/styled';

export const Button = styled.button`
height:53px;
min-width:159px;
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
:last-child{
    margin-right:0;
}

:hover, :focus{
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    color: ${props => props.theme.color.inputBorderColor};
  background-color:  ${props => props.theme.color.buttonOrangeBg}

}

@media screen and (min-width: 768px) {
   width:138px;
   height:40px;
   color: ${props => props.theme.color.buttonOrangeBg};
   background-color:  #FEFEFE;
   border-radius:  20px 20px 0 0;
  
   :hover, :focus{
    background-color:  #FEFEFE;
    color: ${props => props.theme.color.buttonOrangeBg};}
   
    :last-child{
        color:#000000;
        background-color: #FAFBFD;
        :hover, :focus{
            color:#000000;
            background-color: #FAFBFD;}
    }
}

`;

export const ButtonsWrapper = styled.div``;
