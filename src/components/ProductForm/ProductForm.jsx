import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Input,
  Label,
  Form,
  InputPrice,
  LabelInputPrice,
  Container,
  ButtonContainer,
  ButtonContainerInline,
} from './ProductForm.styled';

import Button from '../Button/Button';
import { theme } from '../../constants/theme';
import Wallet from '../../components/Wallet/Wallet';
import transOperations from '../../redux/transactions/trans-operations';
import authSelectors from '../../redux/auth/auth-selectors';
import transSelectors from '../../redux/transactions/trans-selectors';
import { convertDate } from '../../helpers/dateConverter';
import { getUserBalance } from '../../redux/balance/balance-operations.js';
import SelectCategory from '../SelectCategory/SelectCategory';

export default function ProductForm({ transactionDate }) {
  const dispatch = useDispatch();
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const token = useSelector(authSelectors.getToken);
  const type = useSelector(transSelectors.getType);
  const { day, month, year } = convertDate(transactionDate, 'YYYY-MM-DD', '-');

  const options = [
    { value: 'transport', label: 'Transport' },
    { value: 'food', label: 'Food' },
    { value: 'health', label: 'Health' },
    { value: 'alcohol', label: 'Alcohol' },
    { value: 'activities', label: 'Activities' },
    { value: 'home_stuff', label: 'Home stuff' },
    { value: 'gadgets', label: 'Gadgets' },
    { value: 'utility_bills', label: 'Utility bills' },
    { value: 'hobbies', label: 'Hobbies' },
    { value: 'education', label: 'Education' },
    { value: 'others', label: 'Others' },
  ]

  const optionsIncome = [
    { value: 'salary', label: 'Salary' },
    { value: 'extra_income', label: 'Extra Income' }
  ]

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

  const handleSubmitForm = () => {
    dispatch(
      transOperations.createTransactions({
        type,
        amount,
        category,
        description,
        day,
        month,
        year,
        token,
      }),
    );
    dispatch(getUserBalance());
    dispatch(transOperations.getBalanceBy6Month(type, token));
    handleClearForm();
  };

  return (
    <>
      <Container>
        <Form name="productForm" autoComplete="on" noValidate>
          <Label>
            <Input
              name="description"
              placeholder="Description product."
              onChange={handleChange}
              value={description}
            />
          </Label>

          <Label>
            <SelectCategory
              setCategory={setCategory}
              options={type==='expense'
                ? options
                : optionsIncome}
              placeholder={type==='expense'
                ? "Product category"
                : "Income сategory"}
            />
          </Label>

          <LabelInputPrice>
            <InputPrice
              placeholder="00.00 $"
              name="amount"
              type="number"
              onChange={handleChange}
              value={amount}
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
