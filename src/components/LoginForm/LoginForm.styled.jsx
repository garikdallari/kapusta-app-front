import styled from '@emotion/styled';
// import { TextField } from '@mui/material';

// export const StyledInput = styled(TextField)`
//   &:not(:first-of-type) {
//     margin-top: 20px;
//   }
// `;

export const StyledInput = styled.input``;

export const WrapperForm = styled.div`
  display: flex;
  margin-top: 50px;
  width: 265px;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  padding: 40px;
  border: 1px solid #1976d2;
  border-radius: 2%;
`;

export const ErrorMessage = styled.p`
  font-size: 12px;
  color: #f12121;
`;

export const TitleForm = styled.h2`
  text-align: center;
`;
