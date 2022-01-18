import {
  WrapperBackgroundBody,
  BackgroundBodyReport,
} from '../LoginPage/LoginPage.styled';
// components
import Header from '../../components/Header/Header';
import Container from '../../components/Container/Container';
import ButtonArrowBack from '../../components/ButtonArrowBack/ButtonArrowBack';
import Accounting from '../../components/Accounting/Accounting';
import ReportBalance from '../../components/Balance/ReportBalance';
import IconsReportSection from '../../components/IconsReportSection/IconsReportSection';
import { NavBox } from './ReportPage.styled';

export default function ReportPage() {
  // удалить массив categories, перед подключением store
  const categories = [
    { key: 1, name: 'products', price: '1000' },
    { key: 2, name: 'cocktail', price: '1000' },
    { key: 3, name: 'kite', price: '10' },
    { key: 4, name: 'health', price: '1000' },
    { key: 5, name: 'car', price: '1000' },
    { key: 6, name: 'couch', price: '1000' },
    { key: 7, name: 'tools', price: '1000' },
    { key: 8, name: 'invoice', price: '10' },
    { key: 11, name: 'hobby', price: '1000' },
    { key: 9, name: 'book', price: '1000' },
    { key: 10, name: 'ufo', price: '10' },
  ];
  return (
    <>
      <WrapperBackgroundBody>
        <BackgroundBodyReport>
          <Container>
            <NavBox>
              <ButtonArrowBack />
              <ReportBalance />
            </NavBox>
            <Accounting />
            <IconsReportSection amount={categories} />
          </Container>
        </BackgroundBodyReport>
      </WrapperBackgroundBody>
    </>
  );
}
