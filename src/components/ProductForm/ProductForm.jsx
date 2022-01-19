import {
  Input,
  Select,
  Label,
  Form,
  Option,
  InputPrice,
  LabelInputPrice,
} from './ProductForm.styled';
import Wallet from '../../components/Wallet/Wallet';

export default function ProductForm() {
  return (
    <Form name="productForm" autoComplete="on" noValidate>
      <Label>
        <Input name="descriptionProduct" placeholder="Product description" />
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

      <LabelInputPrice>
        <InputPrice placeholder="00.00 $" name="Price" />
        <Wallet />
      </LabelInputPrice>
    </Form>
  );
}
