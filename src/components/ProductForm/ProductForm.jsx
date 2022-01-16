import { Input, Select } from './ProductForm.styled';

export default function ProductForm() {
  return (
    <div>
      <form name="productForm" autoComplete="on" noValidate>
        <label>
          <Input
            type="text"
            name="descriptionProduct"
            placeholder="Описание товара"
          />
        </label>

        <label>
          <Select name="size" placeholder="Описание товара">
            <option value disabled selected>
              Категория товара
            </option>
            <option value="xs">Extra Small</option>
            <option value="s">Small</option>
            <option value="m">Medium</option>
            <option value="l">Large</option>
          </Select>
        </label>
      </form>
    </div>
  );
}
