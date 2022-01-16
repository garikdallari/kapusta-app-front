import {
  Input,
  Select,
  ProductContainer,
  Label,
  Form,
} from './ProductForm.styled';

export default function ProductForm() {
  return (
    <ProductContainer>
      <Form name="productForm" autoComplete="on" noValidate>
        <Label>
          <Input
            type="text"
            name="descriptionProduct"
            placeholder="Описание товара"
          />
        </Label>

        <Label>
          <Select name="size">
            <option value disabled selected hidden>
              Категория товара
            </option>
            <option value="Transport">Транспорт</option>
            <option value="Food">Продукты</option>
            <option value="Health">Здоровье</option>
          </Select>
        </Label>
      </Form>
    </ProductContainer>
  );
}
