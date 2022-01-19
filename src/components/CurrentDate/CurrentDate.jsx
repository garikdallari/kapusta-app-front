import { Container, Current } from './CurrentDate.styled';
import Icons from '../Icons/Icons';
import { format } from 'date-fns';

export default function CurrentDate() {
  const currentDate = format(new Date(), 'dd.MM.yyyy');

  return (
    <Container>
      <Icons name="calendar" color="currentColor" width="20px" height="20px" />
      <Current>{currentDate}</Current>
    </Container>
  );
}
