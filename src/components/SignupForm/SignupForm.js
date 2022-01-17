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
} from './SignupForm.styled';

export default function SignInForm() {
  const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const handleSubmit = values => {
    // example  dispatch(authOperations.login(values));
    console.log(values);
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
                <Button
                  marginRight="15px"
                  text="LogIn"
                  type="submit"
                  textColor="52555F"
                  backgroundColor="#F5F6FB"
                  disabled={!isValid && !dirty}
                />

                <Button
                  text="SignIn"
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
