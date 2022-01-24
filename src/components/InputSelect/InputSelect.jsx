import Select from 'react-select';
import { ContainerInputSelect } from './InputSelect.styled';
import { theme } from '../../constants/theme';
import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';

const expenseData = [
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
];

const incomeData = [
  { value: 'salary', label: 'Salary' },
  { value: 'extra_income', label: 'Extra Income' },
];

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: state.isFocused
      ? theme.color.buttonDarkText.buttonDarkText
      : theme.color.inputPlaceholderColor,
    backgroundColor: state.isFocused
      ? theme.color.inputBorderColorDeskTab
      : theme.color.inputBorderColor,
    fontSize: '12px',
    paddingLeft: '20px',
    height: '32px',
    lineHeight: '14px',
    letterSpacing: '0.02em',
  }),
  container: (provided, state) => ({
    ...provided,
    height: '44px',
    width: '100%',
  }),
  placeholder: (provided, state) => ({
    ...provided,
    fontSize: '12px',
    color: `${theme.color.inputPlaceholderColor}`,
  }),
  control: (provided, state, base) => ({
    //весь контейнер инпута селект.
    ...provided,
    ...base,
    boxShadow: state.isFocused ? 0 : 0,
    height: '44px',
    width: '100%',
    border: `none`,
    backgroundColor: 'inherit',
    borderRadius: '0px',
    '&:hover': {
      borderColor: state.isFocused
        ? theme.color.inputBorderColorDeskTab
        : theme.color.inputBorderColorDeskTab,
    },
  }),
  indicatorSeparator: (provided, state) => ({
    ...provided,
    display: 'none',
  }),
  // menu: (provided, state) => ({
  //   ...provided,
  //   height: '365px',
  // }),
  singleValue: (provided, state) => ({
    //выбранное значение в инпуте.
    ...provided,
    color: theme.color.inputPlaceholderColor,
    fontSize: '12px',
    paddingLeft: '0px',
    lineHeight: '14px',
    letterSpacing: '0.02em',
  }),
  selectContainer: (provided, state) => ({
    ...provided,
    fontSize: '12px',
    lineHeight: '14px',
    letterSpacing: '0.02em',
  }),
};

export default function InputSelect({ handleChange, category, setCategory }) {
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
      />
    </ContainerInputSelect>
  );
}
