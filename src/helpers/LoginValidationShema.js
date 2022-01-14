import * as Yup from 'yup';

export const LoginValidationShema = Yup.object().shape({
  email: Yup.string()
    .email('Please enter a valid email')
    .required('This field is required'),
  password: Yup.string()
    .typeError('Should be a string')
    .required('This field is required'),
});
