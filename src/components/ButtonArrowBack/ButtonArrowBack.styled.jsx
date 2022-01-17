import styled from '@emotion/styled';

export const Button = styled.button`
  margin-top: 15px;
  border-radius: 50px;
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
  @media (min-width: 768px) {
    display: none;
  }
`;

export const BtnBackText = styled.span`
  border-radius: 50px;
  type: button;
  width: 24px;
  height: 24px;
  padding: 0px;
  background-color: inherit;
  border: none;
  // display: flex;
  justify-content: center;
  align-items: center;
  &:focus,
  :hover {
    background-color: white;
  }

  @media (max-width: 767px) {
    display: none;
  }
`;

export const NavContainer = styled.div`
  display: inline-block;
`;
