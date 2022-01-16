import ButtonArrowBack from '../ButtonArrowBack/ButtonArrowBack';
import ProductForm from '../ProductForm/ProductForm';
import Wallet from '../Wallet/Wallet';

export default function SectionInputAndClear() {
  return (
    <div style={{ backgroundColor: '#F5F6FB' }}>
      <ButtonArrowBack />
      <div>
        <ProductForm />
        <Wallet />
      </div>
    </div>
  );
}
