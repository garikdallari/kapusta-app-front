import {
  Input,
  Select,
  Label,
  Form,
  Option,
  InputPrice,
  LabelInputPrice,
  Container,
  ButtonContainer,
  ButtonContainerInline,
} from './ProductForm.styled';
import Button from '../Button/Button';
import { theme } from '../../constants/theme';
import Wallet from '../../components/Wallet/Wallet';

import { useState } from 'react';

export default function ProductForm() {
  const [descriptionProduct, setDescriptionProduct] = useState('');
  const [categoryProduct, usetCategoryProduct] = useState('');
  const [productPrice, usetProductPrice] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'descriptionProduct':
        return setDescriptionProduct(value);
      case 'categoryProduct':
        return usetCategoryProduct(value);
      case 'productPrice':
        return usetProductPrice(value);
      default:
        return;
    }
  };

  const handleClearForm = () => {
    setDescriptionProduct('');
    usetCategoryProduct('');
    usetProductPrice('');
  };

  const handleSubmitForm = () => {
    console.log('Send form.');
    console.log('Clear form.');
    handleClearForm();
  };

  return (
    <>
      <Container>
        <Form name="productForm" autoComplete="on" noValidate>
          <Label>
            <Input
              name="descriptionProduct"
              placeholder="Description product."
              onChange={handleChange}
              value={descriptionProduct}
            />
          </Label>

          <Label>
            <Select
              name="categoryProduct"
              onChange={handleChange}
              value={categoryProduct}
            >
              <Option value disabled selected hidden>
                Category product.
              </Option>
              <Option value="Transport">Transport</Option>
              <Option value="Food">Food</Option>
              <Option value="Health">Health</Option>
            </Select>
          </Label>

          <LabelInputPrice>
            <InputPrice
              placeholder="00.00 $"
              name="productPrice"
              type="text"
              onChange={handleChange}
              value={productPrice}
            />
            <Wallet />
          </LabelInputPrice>
        </Form>

        <ButtonContainerInline>
          <ButtonContainer>
            <Button
              text={'ADD'}
              type={'button'}
              backgroundColor={theme.color.buttonOrangeBg}
              textColor={theme.color.inputBorderColor}
              marginRight={'15px'}
              onClick={handleSubmitForm}
            />
            <Button text={'CLEAR'} type={'button'} onClick={handleClearForm} />
          </ButtonContainer>
        </ButtonContainerInline>
      </Container>
    </>
  );
}
