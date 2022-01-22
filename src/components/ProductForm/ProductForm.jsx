import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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

import transOperations from '../../redux/transactions/trans-operations';
import authSelectors from '../../redux/auth/auth-selectors';
import transSelectors from '../../redux/transactions/trans-selectors';



export default function ProductForm() {
  const dispatch = useDispatch();
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const token = useSelector(authSelectors.getToken);
  const type= useSelector(transSelectors.getType);
  

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'description':
        return setDescription(value);
      case 'category':
        return setCategory(value);
      case 'amount':
        return setAmount(value);
      default:
        return;
    }
  };

  const handleClearForm = () => {
    setDescription('');
    setCategory('');
    setAmount('');
  };

  const handleClick = e => {
    e.preventDefault();
    setAmount(setAmount.concat(e.target?.name));
  };

  const handleSubmitForm = () => {
    dispatch(transOperations.createTransactions({type, amount, category, description, token}));
    dispatch(transOperations.getBalanceBy6Month(type,token));
    handleClearForm();
  };

return (
    <>
      <Container>
        <Form  name="productForm" autoComplete="on" noValidate>
          <Label>
            <Input
              name="description"
              placeholder="Description product."
              onChange={handleChange}
              value={description}
            />
          </Label>

          <Label>
            <Select
              name="category"
              onChange={handleChange}
              value={category}
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
              name="amount"
              type="number"
              onChange={handleChange}      
              class="calc-numbers"          
              value={amount}/>
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
