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
    border-bottom: none;
  }

  @media (min-width: 768px) {
    border: 2px solid ${theme.color.inputBorderColorDeskTab};
    width: 190px;
    border-radius: 16px 0px 0px 0px;
    border-right: none;
  }

  @media (min-width: 1280px) {
    width: 288px;
  }
`;

export const Select = styled.select`
  font-size: ${theme.fontSize.descriptionProduct};
  color: ${theme.color.inputPlaceholderColor};
  background-color: inherit;
  padding: 0px;
  height: 44px;
  padding-left: 18px;
  border: 2px solid ${theme.color.inputBorderColor};
  &:focus {
    outline: none;
  }

  @media (max-width: 767px) {
    min-width: 282px;
    border-radius: 0px 0px 16px 0px;
  }

  @media (min-width: 768px) {
    border: 2px solid ${theme.color.inputBorderColorDeskTab};
    width: 170px;
  }
  @media (min-width: 1280px) {
    width: 188px;
  }
`;

export const Label = styled.label`
  margin-left: auto;
  margin-right: auto;
`;

export const LabelInputPrice = styled.label`
  margin-left: auto;
  margin-right: auto;
  display: flex;
`;

export const Form = styled.form`
  display: flex;

  @media (min-width: 768px) {
    margin-left: 32px;
  }

  @media (max-width: 767px) {
    margin-top: 15px;
    flex-direction: column;
  }

  @media (min-width: 1280px) {
    margin-left: 20px;
  }
`;

export const Option = styled.option`
  // padding: 5px;
`;

export const InputPrice = styled.input`
  border: 2px solid ${theme.color.inputBorderColorDeskTab};
  padding: 0px;
  background-color: inherit;
  width: 125px;
  height: 44px;

  text-align: right;
  letter-spacing: 0.02em;
  color: ${theme.color.blackText};
  font-weight: bold;
  font-size: ${theme.fontSize.descriptionProduct};
  line-height: 14px;

  ::placeholder {
    color: ${theme.color.blackText};
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 767px) {
    margin-top: 30px;
    padding-right: 15px;
    border: 2px solid ${theme.color.inputBorderColor};
    border-radius: 22px 0px 0px 22px;
  }

  @media (min-width: 768px) {
    border-left: none;
    width: 70px;
    border-right: none;
    ::placeholder {
      color: ${theme.color.inputPlaceholderColor};
    }
  }

  @media (min-width: 1280px) {
    width: 88px;
  }
`;

export const Container = styled.div`
  @media (min-width: 1280px) {
    display: flex;
  }
`;

export const ButtonContainer = styled.div`
  height: 44px;
  display: flex;
  justify-content: center;

  @media (max-width: 767px) {
    margin-top: 40px;
    margin-bottom: 48px;
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    margin-top: 30px;
    margin-bottom: 48px;
  }
  @media (min-width: 1280px) {
    margin-bottom: 60px;
  }

  @media (min-width: 1280px) {
    margin-left: 26px;
  }
`;

export const ButtonContainerInline = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
    display: inline-block;
    margin-left: 13%;
  }
`;
