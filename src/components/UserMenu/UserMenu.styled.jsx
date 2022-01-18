import styled from '@emotion/styled';

export const UserAvatarBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  background-color: #f5f6fa;
  border-radius: 50%;
`;

export const UserAvatarName = styled.div`
  font-family: ${props => props.theme.fontFamily};
  font-weight: 700;
  font-size: 12px;
  line-height: 1.16;
  letter-spacing: 0.04em;
  color: #52555f;
`;

export const UserNameBox = styled.div`
  display: none;
  justify-content: center;
  align-items: center;

  &::after {
    content: '';
    width: 1px;
    height: 36px;
    background-color: #e0e5eb;
    margin-left: 20px;
  }

  @media (min-width: 768px) {
    display: flex;
    margin-left: 10px;
  }
`;

export const UserName = styled.p`
  font-family: ${props => props.theme.fontFamily};
  margin: 0px;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.16;
  letter-spacing: 0.04em;
  color: #52555f;
`;

export const LogOutIconButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border: none;
  background-color: transparent;
  margin-left: 15px;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const LogOutTextButton = styled.button`
  display: none;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border: none;
  background-color: transparent;
  margin-left: 15px;
  font-family: ${props => props.theme.fontFamily};
  font-weight: 400;
  font-size: 12px;
  line-height: 1.16;
  letter-spacing: 0.04em;
  color: #52555f;
  padding: 10px;
  cursor: pointer;
  text-decoration-line: underline;
  @media (min-width: 768px) {
    display: flex;
  }
`;
