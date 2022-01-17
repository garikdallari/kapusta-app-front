import { HiArrowNarrowLeft } from 'react-icons/hi';
import { Button, BtnBackText, NavContainer } from './ButtonLeft.styled';

export default function ButtonLeft() {
  return (
    <>
      <NavContainer>
        <Button onClick={() => console.log('Клик на кнопку Стрелка влево.')}>
          <HiArrowNarrowLeft
            style={{
              color: 'FF751D',
              width: '18px',
              height: '12px',
            }}
          />
        </Button>
        <BtnBackText>Go back</BtnBackText>
      </NavContainer>
    </>
  );
}
