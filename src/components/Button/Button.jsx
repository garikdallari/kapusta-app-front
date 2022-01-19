import { StyledBtn } from './Button.styled';

export default function Button({
  text,
  backgroundColor,
  textColor,
  type,
  marginRight,
  disabled,
  onClick,
}) {
  return (
    <>
      <StyledBtn
        type={type}
        backgroundColor={backgroundColor}
        textColor={textColor}
        marginRight={marginRight}
        disabled={disabled}
        onClick={onClick}
      >
        {text}
      </StyledBtn>
    </>
  );
}
