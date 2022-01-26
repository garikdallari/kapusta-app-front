import styled from '@emotion/styled';

export const TableConteiner = styled.table`
  height: 38px;
  background-color: #f5f6fb;

  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  @media screen and (min-width: 768px) {
    width: 605px;
  }

  @media screen and (min-width: 1280px) {
    width: 760px;
  }
`;
export const TableCategory = styled.thead`
  font-weight: 700;
  font-size: 12px;
  line-height: 1.667;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: ${props => props.textColor};
`;
export const Data = styled.th`
  text-align: left;
  @media screen and (min-width: 768px) {
    padding-left: 21px;
  }

  @media screen and (min-width: 1280px) {
    padding-left: 20px;
  }
`;
export const Note = styled.th`
  text-align: center;
`;
export const Sum = styled.th`
  text-align: right;
`;
export const Colum = styled.th`
  @media screen and (min-width: 768px) {
    padding-left: 38px;
  }

  @media screen and (min-width: 1280px) {
    padding-left: 48px;
  }
`;
