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
// import CalcModal from '../CalcModal/CalcModal';

import { useState } from 'react';

export default function ProductForm() {
  const [descriptionProduct, setDescriptionProduct] = useState('');
  const [categoryProduct, setCategoryProduct] = useState('');
  const [productPrice, setProductPrice] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'descriptionProduct':
        return setDescriptionProduct(value);
      case 'categoryProduct':
        return setCategoryProduct(value);
      case 'productPrice':
        return setProductPrice(value);
      default:
        return;
    }
  };

  const handleClearForm = e => {
    e.preventDefault();
    setDescriptionProduct('');
    setCategoryProduct('');
    setProductPrice('');
  };

  const handleClick = e => {
    e.preventDefault();
    setProductPrice(productPrice.concat(e.target?.name));
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
              type="number"
              onChange={handleChange}
              value={productPrice}
              class="calc-numbers"
              value={productPrice}
            />
            <Wallet />
            {/* <div class="container">
              <div class="calculator">
                <div class="calculator-buttons">
                  <button onClick={handleClick} name="0" class="btn span-3">
                    0
                  </button>
                  <button onClick={handleClick} name="1" class="btn">
                    1
                  </button>
                  <button onClick={handleClick} name="2" class="btn">
                    2
                  </button>
                  <button onClick={handleClick} name="3" class="btn">
                    3
                  </button>
                  <button onClick={handleClick} name="4" class="btn">
                    4
                  </button>
                  <button onClick={handleClick} name="5" class="btn">
                    5
                  </button>
                  <button onClick={handleClick} name="6" class="btn">
                    6
                  </button>
                  <button onClick={handleClick} name="7" class="btn">
                    7
                  </button>
                  <button onClick={handleClick} name="8" class="btn">
                    8
                  </button>
                  <button onClick={handleClick} name="9" class="btn">
                    9
                  </button>
                  <button onClick={handleClearForm} class="btn clear span-2">
                    C
                  </button>
                </div>
              </div>
            </div> */}
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
