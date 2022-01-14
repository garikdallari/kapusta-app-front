import { StyledBtn } from './Button.styled';

export default function Button({
  text,
  backgroundColor,
  textColor,
  type,
  marginRight,
}) {
  return (
    <>
      <StyledBtn
        type={type}
        backgroundColor={backgroundColor}
        textColor={textColor}
        marginRight={marginRight}
      >
        {text}
      </StyledBtn>
    </>
  );
}
