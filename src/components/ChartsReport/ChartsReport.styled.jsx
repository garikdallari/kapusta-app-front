import styled from '@emotion/styled';

export const Card = styled.div`
  @media screen and (min-width: 768px) {
    width: 71.5%;
  }
  display: flex;
  width: 95%;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background-color: #fff;
  background: linear-gradient(
    to top,
    #ffffff 0%,
    #ffffff 11.5%,
    #f5f6fb 11.5%,
    #f5f6fb 12%,
    #ffffff 12%,
    #ffffff 22.5%,
    #f5f6fb 22.5%,
    #f5f6fb 23%,
    #ffffff 23%,
    #ffffff 33.6%,
    #f5f6fb 33.5%,
    #f5f6fb 34%,
    #ffffff 34%,
    #ffffff 44.6%,
    #f5f6fb 44.5%,
    #f5f6fb 45%,
    #ffffff 45%,
    #ffffff 55.5%,
    #f5f6fb 55.5%,
    #f5f6fb 56%,
    #ffffff 56%,
    #ffffff 66.5%,
    #f5f6fb 66.5%,
    #f5f6fb 67%,
    #ffffff 67%,
    #ffffff 77.6%,
    #f5f6fb 77.5%,
    #f5f6fb 78%,
    #ffffff 78%,
    #ffffff 88.5%,
    #f5f6fb 88.5%,
    #f5f6fb 89%,
    #ffffff 89%,
    #ffffff 100%
  );
`;

export const Container = styled.div`
  margin: 0 auto;
  width: ${({ width }) => width};
  background-color: #fff;
  border-radius: 30px;
  padding-bottom: 25px;

  @media screen and (min-width: 768px) {
    box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
    width: 666px;
    padding-bottom: 19px;
    margin-bottom: 50px;
  }

  @media screen and (min-width: 1280px) {
    width: 1046px;
  }
`;
