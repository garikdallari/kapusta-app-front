import styled from '@emotion/styled';
import { Field } from 'formik';

export const WrapperForm = styled.div`
  outline: 1px solid black;
  width: 300px;
  padding: 40px 17px;

  @media screen and (max-width: 768px) {
  }

  @media screen and (max-width: 1280px) {
  }
`;

export const StyledInput = styled(Field)`
  max-width: 253px;
  max-height: 52px;
  background-color: #f6f7fb;
  border-radius: 30px;
  border: none;
  padding: 17px 20px;
`;

export const InputName = styled.p`
  font-family: ${props => props.theme.fontFamily};
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 0.85;
  letter-spacing: 0.04em;
  color: #000000;
`;

export const AdditionallyInfo = styled.p`
  font-weight: normal;
  font-size: 12px;
  line-height: 0.85;
  letter-spacing: 0.04em;
  font-family: ${props => props.theme.fontFamily};
  color: #52555f;
`;

// export const WrapperForm = styled.div`
//   display: flex;
//   margin-top: 50px;
//   width: 265px;
//   flex-direction: column;
//   margin-left: auto;
//   margin-right: auto;
//   justify-content: center;
//   padding: 40px;
//   border: 1px solid #1976d2;
//   border-radius: 2%;
// `;

export const ErrorMessage = styled.p`
  font-size: 12px;
  color: #f12121;
`;

// export const TitleForm = styled.h2`
//   text-align: center;
// `;

export const BoxButton = styled.div`
  margin-top: 40px;
`;
