import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { Field } from 'formik';

export const WrapperForm = styled.div`
  width: 300px;
  padding: 40px 17px;
  background-color: #ffffff;
  box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
  border-radius: 30px;
  margin: 0px auto;

  @media (min-width: 768px) {
    width: 436px;
    padding: 50px 85px;
  }
`;

export const StyledInput = styled(Field)`
  position: relative;
  width: 253px;
  height: 52px;
  background-color: #f6f7fb;
  border-radius: 30px;
  border: none;
  padding: 17px 20px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.14;
  letter-spacing: 0.04em;
  margin-bottom: 30px;

  @media (min-width: 768px) {
    width: 265px;
  }

  ::placeholder {
    font-family: ${props => props.theme.fontFamily};
    font-weight: 400;
    font-size: 14px;
    line-height: 1.14;
    letter-spacing: 0.04em;
    color: #a6abb9;
  }
`;

export const AdditionallyInfo = styled.p`
  font-weight: 400;
  font-size: 10px;
  line-height: 1.2;
  letter-spacing: 0.04em;
  font-family: ${props => props.theme.fontFamily};
  color: #52555f;
  text-align: center;
  margin: 0px 0px 24px 0px;

  @media (min-width: 768px) {
    font-size: 12px;
    line-height: 1.16;
  }
`;

export const InputName = styled.p`
  font-family: ${props => props.theme.fontFamily};
  font-weight: 400;
  font-size: 10px;
  line-height: 1.2;
  letter-spacing: 0.04em;
  color: #000000;
  margin: 0px 0px 12px 0px;

  @media (min-width: 768px) {
    font-size: 12px;
    line-height: 1.16;
  }
`;

export const ErrorMessageEmail = styled.p`
  position: absolute;
  top: 270px;
  font-family: ${props => props.theme.fontFamily};
  font-weight: 400;
  font-size: 10px;
  line-height: 1.2;
  letter-spacing: 0.04em;
  color: #eb5757;
  @media (min-width: 768px) {
    top: 287px;
  }
`;

export const ErrorMessagePassword = styled.p`
  position: absolute;
  top: 373px;
  font-family: ${props => props.theme.fontFamily};
  font-weight: 400;
  font-size: 10px;
  line-height: 1.2;
  letter-spacing: 0.04em;
  color: #eb5757;
  @media (min-width: 768px) {
    top: 394px;
  }
`;

export const BoxButton = styled.div`
  display: flex;
`;

export const WrapperButton = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

export const StyledLink = styled(Link)`
  font-size: 12px;
  line-height: 1.16;
  letter-spacing: 0.02em;
  font-weight: 700;
  text-transform: uppercase;
  color: #52555f;
  padding: 15px 38px;
  text-decoration: none;
`;

export const WrapperLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 125px;
  height: 44px;
  background-color: #f5f6fb;
  border-radius: 16px;
  box-shadow: 1px 2px 5px rgba(170, 178, 197, 0.4);
`;
