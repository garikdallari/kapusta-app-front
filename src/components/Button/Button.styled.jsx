import styled from '@emotion/styled';

export const StyledBtn = styled.button`
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.02em;
  width: 125px;
  padding: 12px 34px;
  text-align: center;
  font-weight: bold;
  font-style: normal;
  text-transform: uppercase;
  border-radius: 16px;
  border: 0px;
  box-shadow: 1px 2px 5px rgba(170, 178, 197, 0.4);
  color: ${props => props.textColor};
  font-family: ${props => props.theme.fontFamily};
  background-color: ${props => props.backgroundColor};
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  /* cursor: pointer;
  &:hover,
  &:focus {
    background-color: #ff751d;
    color: #ffffff;
  } */
`;