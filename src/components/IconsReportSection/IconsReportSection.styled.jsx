import styled from '@emotion/styled';

export const Section = styled.div`
  margin: 0px auto;
  padding: 0 9px;
  width: 300px;

  background-color: #ffffff;

  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    width: 666px;
    padding: 0 32px 30px 32px;

    border-radius: 30px;
    box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);

    overflow: hidden;
  }

  @media (min-width: 1060px) {
    width: 1060px;
    padding: 20px 220px 30px 230px;
  }
`;

export const Wrapper = styled.ul`
  margin: 0px auto;
  padding-left: 0;
  display: flex;
  justify-content: space-around;

  background-color: #ffffff;
  list-style: none;
  border-bottom: 1px solid #e0e5eb;

  @media (min-width: 768px) {
    margin: 0;
    flex-basis: fit-content;
    gap: 20px;
    border: none;
  }
`;

export const WrapperElement = styled.li`
  margin: 0px auto;
  padding: 20px 0;

  @media (min-width: 768px) {
    min-width: 80px;
    width: fit-content;
  }
`;

export const TextContainer = styled.p`
  padding: 0;
  margin: 0;

  text-align: center;
  text-transform: uppercase;

  font-size: 12px;
`;

export const SvgContainer = styled.a`
  display: block;
  margin: 5px 0;
  text-align: center;

  &:hover {
    color: #ff751d;
  }
`;
