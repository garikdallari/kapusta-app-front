import { Input, Select, ProductContainer } from './ProductForm.styled';

export default function ProductForm() {
  return (
    <ProductContainer>
      <form name="productForm" autoComplete="on" noValidate>
        <label>
          <Input
            type="text"
            name="descriptionProduct"
            placeholder="Описание товара"
          />
        </label>

        <label>
          <Select name="size">
            <option value disabled selected hidden>
              Категория товара
            </option>
            <option value="Transport">Транспорт</option>
            <option value="Food">Продукты</option>
            <option value="Health">Здоровье</option>
          </Select>
        </label>
      </form>
    </ProductContainer>
  );
}
