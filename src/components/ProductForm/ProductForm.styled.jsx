import styled from '@emotion/styled';

export const Input = styled.input`
  color: #c7ccdc;
  font-size: 12px;
  background-color: inherit;
  padding: 0px;
  height: 44px;
  padding-left: 20px;
  border: 2px solid #ffffff;
  border-radius: 16px 16px 0px 0px;
  min-width: 282px;
  &:focus {
    outline: none;
  }
  ::placeholder {
    font-size: 12px;
    color: #c7ccdc;
  }

  // @media (min-width: 768px) {
  //   display: none;
  // }
`;

export const Select = styled.select`
  font-size: 12px;
  color: #c7ccdc;
  background-color: inherit;
  padding: 0px;
  height: 44px;
  padding-left: 20px;
  border: 2px solid #ffffff;
  border-radius: 0px 0px 16px 0px;
  min-width: 282px;
  &:focus {
    outline: none;
  }

  // @media (min-width: 768px) {
  //   display: none;
  // }
`;
