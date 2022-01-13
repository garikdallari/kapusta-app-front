import { StyledBtn } from './Button.styled';

// props => text(string), backgroundColor(string), textColor(string)

export default function Button({ text, backgroundColor, textColor }) {
  return (
    <>
      <StyledBtn backgroundColor={backgroundColor} textColor={textColor}>
        {text}
      </StyledBtn>
    </>
  );
}
