import { theme } from '../../constants/theme';

export const customStyles = {
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
    textAlign: 'left',
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
    paddingLeft: '12px',
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
  singleValue: (provided, state) => ({
    //выбранное значение в инпуте.
    ...provided,
    color: theme.color.blackText,
    fontSize: '12px',
    paddingLeft: '0px',
    lineHeight: '14px',
    letterSpacing: '0.02em',
    fontWeight: 'bold',
  }),
  selectContainer: (provided, state) => ({
    ...provided,
    fontSize: '12px',
    lineHeight: '14px',
    letterSpacing: '0.02em',
  }),
};
