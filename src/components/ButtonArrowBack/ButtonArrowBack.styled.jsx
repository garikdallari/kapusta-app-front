import styled from '@emotion/styled';

export const Button = styled.button`
  border-radius: 50px;
  width: 24px;
  height: 24px;
  padding: 0 auto;
  margin: 0 18px 0 0;
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

export const BtnBackText = styled.p`
  text-align: center;
  font-family: ${props => props.theme.fontFamily};
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.04em;
  color: rgba(82, 85, 95, 0.7);
  border-radius: 50px;
  padding: 0 auto;
  border: none;
  justify-content: center;
  align-items: center;
  @media (max-width: 767px) {
    display: none;
  }

  @media (max-width: 767px) {
    display: none;
  }
`;

export const NavContainer = styled.div`
  @media (min-width: 767px) {
    display: flex;
    margin: 0 47px 0 0;
    align-items: center;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;
