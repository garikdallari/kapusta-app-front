import styled from '@emotion/styled';

export const PaperContainer = styled.div`
  padding: ${props => props.padding}px;
  background-color: ${props => props.theme};
  border-radius: 30px;
  width: fit-content;
`;
