import styled from '@emotion/styled';
import { theme } from '../../constants/theme';

export const Input = styled.input`
  color: ${theme.color.buttonDarkText};
  font-size: ${theme.fontSize.descriptionProduct};

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
    color: ${theme.color.inputPlaceholderColor};
  }

  // @media (min-width: 768px) {
  //   display: none;
  // }
`;

export const Select = styled.select`
  font-size: ${theme.fontSize.descriptionProduct};
  color: ${theme.color.inputPlaceholderColor};
  background-color: inherit;
  padding: 0px;
  height: 44px;
  padding-left: 18px;
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

export const ProductContainer = styled.div`
  margin-top: 15px;
`;

export const Label = styled.div`
  margin-left: auto;
  margin-right: auto;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
