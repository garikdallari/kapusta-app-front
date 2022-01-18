import { useHistory } from 'react-router-dom';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { Button, BtnBackText, NavContainer } from './ButtonArrowBack.styled';
import { theme } from '../../constants/theme';

export default function ButtonArrowBack() {
  const history = useHistory();

  return (
    <NavContainer>
      <Button onClick={() => history.push('/home')}>
        <HiArrowNarrowLeft
          style={{
            color: theme.color.buttonOrangeBg,
            width: '100%',
            height: '100%',
          }}
        />
        {/* <BtnBackText>Go back</BtnBackText> */}
      </Button>
      {/* <BtnBackText>Go back</BtnBackText> */}
    </NavContainer>
  );
}
