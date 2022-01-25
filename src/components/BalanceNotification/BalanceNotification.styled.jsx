import styled from '@emotion/styled';

export const Notification = styled.div`
  display: flex;
  margin: 25px 0 0 0;
  padding: 30px 25px;
  flex-direction: column;
  position: absolute;
  width: 282px;
  height: 163px;
  top: 78%;
  z-index: 99;
  left: -12px;
  background: linear-gradient(117.84deg, #1d346a 2.84%, #031634 67.28%);
  border-radius: 30px;
 justify-content:center;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 0;
    height: 0;
    border: 15px solid transparent;
    border-bottom-color: #1d345c;
    border-top: 0;
    margin-left: -95px;
    margin-top: -15px;
  
  }

  @media screen and (min-width: 768px) {
    width: 292px;
    left: 4px;
    top: 90%;
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const WelcTextNotification = styled.p`
  margin: 0 auto;
  padding: 0 auto;
  font-family: ${props => props.theme.fontFamily};
  color: white;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
 
  @media screen and (max-width: 768px) {
  }

  @media screen and (max-width: 1280px) {
  }
`;

export const DescrTextNotification = styled.p`
  margin: 0 auto;
  margin-top: 20px;
  padding: 0 auto;
  font-family: ${props => props.theme.fontFamily};
  color: white;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  @media screen and (max-width: 768px) {
  }

  @media screen and (max-width: 1280px) {
  }
`;
