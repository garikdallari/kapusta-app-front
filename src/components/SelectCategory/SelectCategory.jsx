import { useEffect, useState } from 'react';
import Select from 'react-select';
import styles from './SelectCategory.module.css';

function customTheme(theme) {
  return {
    ...theme,
    colors: {
      ...theme.colors,
      primary25: '#F5F6FB',
      neutral50: '#C7CCDC',
    },
  };
}

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: state.isFocused ? '#52555F' : '#C7CCDC',
    paddingLeft: 20,
    paddindRight: 20,
  }),
  singleValue: provided => ({
    ...provided,
    color: '#C7CCDC',
  }),
  control: (base, state) => ({
    ...base,
    border: state.isFocused ? 0 : 0,
    boxShadow: state.isFocused ? 0 : 0,
    '&:hover': {
      border: state.isFocused ? 0 : 0,
    },
  }),
};

export default function SelectCategory({ setCategory, options, placeholder }) {
  const [option, setOption] = useState({});

  useEffect(() => {
    setCategory(option.value);
  }, [setCategory, option]);

  return (
    <>
      <Select
        options={options}
        theme={customTheme}
        className={styles.dropdown}
        styles={customStyles}
        placeholder={placeholder}
        onChange={setOption}
      />
    </>
  );
};