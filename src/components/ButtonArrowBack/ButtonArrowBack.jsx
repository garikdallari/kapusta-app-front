import { useHistory } from 'react-router-dom';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { Button, BtnBackText, NavContainer } from './ButtonArrowBack.styled';
import { theme } from '../../constants/theme';

export default function ButtonArrowBack({ displayBtn, displayText, displayMobile, displayItem }) {
  const history = useHistory();

 const onClick=(e)=>{ history.push('/home');
 console.log(displayItem);
 console.log(e.target);
 displayItem(e.target.id);
 history.push('/home');
}

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
