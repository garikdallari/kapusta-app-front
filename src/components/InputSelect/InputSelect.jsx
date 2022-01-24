import Select from 'react-select';
import { ContainerInputSelect } from './InputSelect.styled';
import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import { expenseData, incomeData } from './data';
import { customStyles } from './custonStyles';

export default function InputSelect({ handleChange, category }) {
  const typeTransactions = useSelector(authSelectors.getTypeTransactions);

  const dataOptionsSelect =
    typeTransactions === 'income' ? incomeData : expenseData;

  const dataPlaceholder =
    typeTransactions === 'income' ? 'Income category' : 'Product category';

  const changeCategory = category && {
    label: category,
    value: category,
  };

  const sendNewData = e => {
    const eventObject = { target: { name: 'category', value: e.value } };
    handleChange(eventObject);
  };
  return (
    <ContainerInputSelect>
      <Select
        name="category"
        styles={customStyles}
        options={dataOptionsSelect}
        placeholder={dataPlaceholder}
        onChange={sendNewData}
        value={changeCategory}
        maxMenuHeight={360}
      />
    </ContainerInputSelect>
  );
}
