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
  &:focus {
    outline: none;
  }
  ::placeholder {
    color: ${theme.color.inputPlaceholderColor};
  }

  @media (max-width: 767px) {
    min-width: 282px;
    border-radius: 16px 16px 0px 0px;
  }

  @media (min-width: 768px) {
    border: 2px solid ${theme.color.inputPlaceholderColor};
    width: 192px;
    border-radius: 16px 0px 0px 0px;
    border-right: none;
  }

  @media (min-width: 1280px) {
    width: 289px;
  }
`;

export const Select = styled.select`
  font-size: ${theme.fontSize.descriptionProduct};
  color: ${theme.color.inputPlaceholderColor};
  background-color: inherit;
  padding: 0px;
  height: 44px;
  padding-left: 18px;
  border: 2px solid #ffffff;
  &:focus {
    outline: none;
  }

  @media (max-width: 767px) {
    min-width: 282px;
    border-radius: 0px 0px 16px 0px;
  }

  @media (min-width: 768px) {
    border: 2px solid ${theme.color.inputPlaceholderColor};
    width: 171px;
  }
  @media (min-width: 1280px) {
    width: 188px;
  }
`;

export const Label = styled.div`
  margin-left: auto;
  margin-right: auto;
`;

export const Form = styled.form`
  display: flex;

  @media (min-width: 768px) {
    margin-left: 33px;
  }

  @media (min-width: 1280px) {
    margin-left: 23px;
  }

  @media (max-width: 767px) {
    margin-top: 15px;
    flex-direction: column;
  }
`;
