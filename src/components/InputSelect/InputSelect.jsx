import Select from 'react-select';
import { ContainerInputSelect } from './InputSelect.styled';
import { theme } from '../../constants/theme';

const data = [
  { value: 'Transport', label: 'Transport' },
  { value: 'Food', label: 'Food' },
  { value: 'Health', label: 'Health' },
  { value: 'Entertainment', label: 'Entertainment' },
  { value: 'House', label: 'House' },
  { value: 'Technics', label: 'Technics' },
  { value: 'Utilities, communic', label: 'Utilities, communic' },
  { value: 'Sports, hobbies', label: 'Sports, hobbies' },
  { value: 'Education', label: 'Education' },
  { value: 'Other', label: 'Other' },
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
        options={data}
        placeholder={'Product category'}
        onChange={sendNewData}
        value={changeCategory}
      />
    </ContainerInputSelect>
  );
}
