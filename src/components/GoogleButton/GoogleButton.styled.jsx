import styled from '@emotion/styled';

export const Button = styled.button`
  font-family: ${props => props.theme.fontFamily};
  font-weight: 500;
  font-size: 14px;
  line-height: 1.14;
  padding: 11px;
  justify-content: center;
  align-items: center;
  display: flex;
  background-color: #f6f7fb;
  border-radius: 26px;
  border: 0px;
  width: 125px;
  height: 40px;
  letter-spacing: 0.02em;
  color: #000000;
  box-shadow: 1px 2px 5px rgba(170, 178, 197, 0.4);

  svg {
    margin-right: 10px;
    width: 18px;
    height: 18px;
  }
`;
