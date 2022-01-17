import styled from '@emotion/styled';

export const Section = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 0 9px;
  width: 320px;

  background-color: ${props => props.bgColor};
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

  @media (min-width: 1280px) {
    width: 1060px;
    padding: 20px 220px 30px 230px;
  }
`;

export const Wrapper = styled.ul`
  margin: 0px auto;
  padding-left: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  list-style: none;

  &::after {
    position: absolute;
    right: 13px;
    bottom: 0;
    display: block;
    width: 90%;
    content: '';
    border-bottom: 1px solid ${props => props.elementoColor};
  }

  @media (min-width: 768px) {
    margin: 0;
    gap: 40px 10px;
    border: none;

    &::after {
      display: none;
    }
  }
`;

export const WrapperElement = styled.li`
  position: relative;
  margin: 0px auto;
  flex-basis: calc((100% - 18px) / 3);
  padding-top: 20px;
  padding-bottom: 20px;

  &:nth-child(3n)::after {
    position: absolute;
    right: 6px;
    bottom: 0;
    display: block;
    width: 300%;
    content: '';
    border-bottom: 1px solid ${props => props.elementColor};
  }

  @media (min-width: 768px) {
    min-width: 80px;
    flex-basis: min-content;
    margin: 0;
    padding: 0;

    &:nth-child(3n)::after {
      display: none;
    }
  }
`;

export const TextContainer = styled.p`
  padding: 0;
  margin: 0;

  text-align: center;
  text-transform: uppercase;

  font-size: 12px;
`;

export const SvgContainer = styled.button`
  margin: 0 auto;
  height: 106px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  border: none;
  background-color: transparent;
  color: inherit;

  &:hover,
  &:focus {
    color: ${props => props.buttonColor};
    transition: all ease 250ms;
  }
`;
