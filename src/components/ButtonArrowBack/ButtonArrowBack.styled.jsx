import styled from '@emotion/styled';

const Button = styled.button`
  margin-top: 15px;
  border-radius: 50px;
  type: button;
  width: 24px;
  height: 24px;
  padding: 0px;
  background-color: inherit;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  &:focus,
  :hover {
    background-color: white;
  }

  // @media (min-width: 768px) {
  //   display: none;
  // }
`;

export default Button;
