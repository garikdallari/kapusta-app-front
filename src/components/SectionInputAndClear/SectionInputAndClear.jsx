import ButtonLeft from '../ButtonLeft/ButtonLeft';
import ProductForm from '../ProductForm/ProductForm';

export default function SectionInputAndClear() {
  return (
    <div style={{ backgroundColor: '#F5F6FB' }}>
      <ButtonLeft />
      <div>
        <ProductForm />
      </div>
    </div>
  );
}
