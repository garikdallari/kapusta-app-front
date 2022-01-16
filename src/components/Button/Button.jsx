import { StyledBtn } from './Button.styled';

export default function Button({
  text,
  backgroundColor,
  textColor,
  type,
  marginRight,
  disabled,
}) {
  return (
    <>
      <StyledBtn
        type={type}
        backgroundColor={backgroundColor}
        textColor={textColor}
        marginRight={marginRight}
        disabled={disabled}
      >
        {text}
      </StyledBtn>
    </>
  );
}
