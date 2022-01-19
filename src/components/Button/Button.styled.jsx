import styled from '@emotion/styled';

const setBackgroundColor = props => {
  if (props.disabled) {
    return '#d5d5d5';
  }
  return props.backgroundColor;
};

export const StyledBtn = styled.button`
  font-size: 12px;
  line-height: 1.16;
  letter-spacing: 0.02em;
  width: 125px;
  height: 44px;
  padding: 12px 15px;
  text-align: center;
  font-weight: 700;
  text-transform: uppercase;
  border-radius: 16px;
  border: 0px;
  box-shadow: 1px 2px 5px rgba(170, 178, 197, 0.4);
  color: ${props => props.textColor};
  font-family: ${props => props.theme.fontFamily};
  background-color: ${setBackgroundColor};
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:not(:last-child) {
    margin-right: ${props => props.marginRight};
  }

  /* &:hover,
  &:focus {
    background-color: #ff751d;
    color: #ffffff;
  } */
`;
