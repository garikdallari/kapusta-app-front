import { Input, Select, Label, Form, Option } from './ProductForm.styled';

export default function ProductForm() {
  return (
    <Form name="productForm" autoComplete="on" noValidate>
      <Label>
        <Input
          type="text"
          name="descriptionProduct"
          placeholder="Product description"
        />
      </Label>

      <Label>
        <Select name="size">
          <Option value disabled selected hidden>
            Product category
          </Option>
          <Option value="Transport">Transport</Option>
          <Option value="Food">Food</Option>
          <Option value="Health">Health</Option>
        </Select>
      </Label>
    </Form>
  );
}
