import { Container, Date } from './CurrentDate.styled';
import Icons from '../Icons/Icons';

export default function Accounting() {
  return (
    <Container>
      <Icons name="calendar" color="currentColor" width="20px" height="20px" />
      <Date>18.01.2022</Date>
    </Container>
  );
}
