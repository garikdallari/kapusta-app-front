import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import { Formik, Form } from 'formik';
import { SignInValidationSchema } from '../../helpers/SignInValidationShema';
import Button from '../Button/Button';
import GoogleButton from '../GoogleButton/GoogleButton';
import {
  ErrorMessageName,
  ErrorMessageEmail,
  ErrorMessagePassword,
  ErrorMessageConfirmPassword,
  WrapperForm,
  StyledInput,
  InputName,
  AdditionallyInfo,
  BoxButton,
  WrapperButton,
  StyledLink,
  WrapperLink,
} from './SignupForm.styled';

export default function SignInForm() {
  const dispatch = useDispatch();
  const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const handleSubmit = ({ name, email, password }) => {
    dispatch(authOperations.signup({ name, email, password }));
  };

  return (
    <>
      <WrapperForm>
        <AdditionallyInfo>
          You can log in with your Google Account:
        </AdditionallyInfo>
        <WrapperButton>
          <GoogleButton />
        </WrapperButton>

        <AdditionallyInfo>
          Or log in using e-mail and password, in advance by registering:
        </AdditionallyInfo>
        <Formik
          initialValues={initialValues}
          validatedOnBlur
          validationSchema={SignInValidationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, isValid, handleSubmit, dirty }) => (
            <Form onSubmit={handleSubmit}>
              <InputName>Name:</InputName>
              <StyledInput name="name" type="text" placeholder="Name" />
              {errors.name && touched.name && (
                <ErrorMessageName>{errors.name}</ErrorMessageName>
              )}
              <InputName>Email:</InputName>
              <StyledInput
                name="email"
                type="email"
                placeholder="your@email.com"
              />
              {errors.email && touched.email && (
                <ErrorMessageEmail>{errors.email}</ErrorMessageEmail>
              )}
              <InputName>Password:</InputName>
              <StyledInput
                type="password"
                name="password"
                autoComplete="on"
                placeholder="Password"
              />
              {touched.password && errors.password && (
                <ErrorMessagePassword>{errors.password}</ErrorMessagePassword>
              )}
              <InputName>Confirm Password:</InputName>
              <StyledInput
                type="password"
                name="confirmPassword"
                autoComplete="on"
                placeholder="Confirm your password"
              />
              {touched.confirmPassword && errors.confirmPassword && (
                <ErrorMessageConfirmPassword>
                  {errors.confirmPassword}
                </ErrorMessageConfirmPassword>
              )}

              <BoxButton>
                <WrapperLink>
                  <StyledLink to="/login">LogIn</StyledLink>
                </WrapperLink>

                <Button
                  text="Signin"
                  type="submit"
                  textColor="#FFFFFF"
                  backgroundColor="#FF751D"
                  disabled={!isValid && !dirty}
                />
              </BoxButton>
            </Form>
          )}
        </Formik>
      </WrapperForm>
    </>
  );
}
