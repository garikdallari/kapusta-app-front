import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 0px 10px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 320px) {
    max-width: 767px;
    padding: 0px 19px;
  }

  @media screen and (min-width: 768px) {
    max-width: 1280px;
    padding: 0px 26px;
  }

  @media screen and (min-width: 1280px) {
    padding: 0px 26px;
  }
`;

export const MenuBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 0px 13px 0px;
`;

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
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.16;

  letter-spacing: 0.04em;
  color: #52555f;
`;

export const UserNameBox = styled.div`
  display: none;

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
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.16;
  letter-spacing: 0.04em;
  color: #52555f;
`;

export const LogOutButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  bac
  width: 32px;
  height: 32px;
  border: none;
  background-color: transparent;
  margin-left: 15px;
`;
