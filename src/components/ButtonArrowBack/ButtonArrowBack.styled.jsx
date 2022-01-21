import styled from '@emotion/styled';

export const Button = styled.button`
  display: flex;
  align-items: center;
  
  width: 174px;
  height: 24px;
  
  padding: 0px;
  margin: 0 18px 0 0;
  background-color: inherit;
  border: none;
  
  cursor: pointer;
`;

export const BtnBackText = styled.p`
  margin: 0 0 0 15px;

  font-family: ${props => props.theme.fontFamily};
  font-weight: 500;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: 0.04em;

  color: rgba(82, 85, 95, 0.7);

  @media (max-width: 767px) {
    display: none;
  }
  @media (min-width: 320px and max-width: 768px) {
    display: ${prop => prop.displayText};
  }
`;

export const NavContainer = styled.div`
  @media (min-width: 767px) {
    display: flex;
    margin: 0 47px 0 0;
    align-items: center;
  }

  @media (min-width: 768px) {
    display: ${prop => prop.displayBtn};
  }
`;