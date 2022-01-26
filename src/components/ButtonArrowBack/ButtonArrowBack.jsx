
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { Button, BtnBackText, NavContainer } from './ButtonArrowBack.styled';
import { theme } from '../../constants/theme';

export default function ButtonArrowBack({onClick, displayBtn, displayText, displayMobile, displayItem }) {

  return (
    <NavContainer displayBtn={displayBtn} displayMobile={displayMobile} >
      <Button id="arrowBack" onClick={onClick}>
        <HiArrowNarrowLeft size={24}
          style={{
            color: theme.color.buttonOrangeBg,
            pointerEvents:"none",
          }}
        />
        <BtnBackText displayText={displayText}>Go back</BtnBackText>
      </Button>
    </NavContainer>
  );
}
