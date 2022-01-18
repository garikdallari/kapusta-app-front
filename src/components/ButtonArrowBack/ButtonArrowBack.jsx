import { HiArrowNarrowLeft } from 'react-icons/hi';
import { Button, BtnBackText, NavContainer } from './ButtonArrowBack.styled';
import { theme } from '../../constants/theme';

export default function ButtonArrowBack() {
  return (
    <NavContainer>
      <Button onClick={() => console.log('Клик на кнопку Стрелка влево.')}>
        <HiArrowNarrowLeft
          style={{
            color: theme.color.buttonOrangeBg,
            width: '100%',
            height: '100%',
          }}
        />
        {/* <BtnBackText>Go back</BtnBackText> */}
      </Button>
      <BtnBackText>Go back</BtnBackText>
    </NavContainer>
  );
}
