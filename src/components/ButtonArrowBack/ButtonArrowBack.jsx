import { useHistory } from 'react-router-dom';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { Button, BtnBackText, NavContainer } from './ButtonArrowBack.styled';
import { theme } from '../../constants/theme';

export default function ButtonArrowBack({ displayBtn, displayText }) {
  const history = useHistory();

  return (
    <NavContainer displayBtn={displayBtn}>
      <Button onClick={() => history.push('/home')}>
        <HiArrowNarrowLeft
          style={{
            color: theme.color.buttonOrangeBg,
          }}
        />
        <BtnBackText displayText={displayText}>Go back</BtnBackText>
      </Button>
    </NavContainer>
  );
}
