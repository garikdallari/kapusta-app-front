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
import InputSelect from '../InputSelect/InputSelect';
import Button from '../Button/Button';
import { theme } from '../../constants/theme';
import Wallet from '../../components/Wallet/Wallet';
import transOperations from '../../redux/transactions/trans-operations';
import authSelectors from '../../redux/auth/auth-selectors';
import transSelectors from '../../redux/transactions/trans-selectors';
import { convertDate } from '../../helpers/dateConverter';
import { getUserBalance } from '../../redux/balance/balance-operations.js';

export default function ProductForm({ transactionDate, displayMobile, displayItem }) {
  const dispatch = useDispatch();
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const token = useSelector(authSelectors.getToken);
  const type = useSelector(transSelectors.getType);
  const { day, month, year } = convertDate(transactionDate, 'YYYY-MM-DD', '-');

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

  const handleSubmitForm = (e) => {
    displayItem(e.target.id);
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
      <Container displayMobile={displayMobile}>
        <Form name="productForm" autoComplete="on" noValidate>
          <Label>
            <Input
              name="description"
              placeholder="Description product"
              onChange={handleChange}
              value={description}
            />
          </Label>

          <InputSelect handleChange={handleChange} category={category} />
          <LabelInputPrice>
            <InputPrice
              placeholder="00.00 USD"
              name="amount"
              type="number"
              onChange={handleChange}
              value={amount}
            />
            <Wallet />
          </LabelInputPrice>
        </Form>

        <ButtonContainerInline>
          <ButtonContainer >
            <Button
              onClick={handleSubmitForm}
              text={'ADD'}
              type={'button'}
              backgroundColor={theme.color.buttonOrangeBg}
              textColor={theme.color.inputBorderColor}
              marginRight={'15px'}/>
            <Button text={'CLEAR'} type={'button'} onClick={handleClearForm} />
          </ButtonContainer>
        </ButtonContainerInline>
      </Container>
    </>
  );
}
