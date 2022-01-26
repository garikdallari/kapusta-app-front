import styled from '@emotion/styled';

export const PaperContainer = styled.div`
  padding: ${props => props.padding};
  background-color: ${props => props.theme};
  border-radius: ${props => props.borderRadius};
  width: fit-content;
  box-shadow: ${props => props.boxShadow};
}
`
