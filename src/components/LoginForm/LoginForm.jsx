import { Formik, Form } from 'formik';
import { LoginValidationShema } from '../../helpers/LoginValidationShema';
import Button from '../Button/Button';
import GoogleButton from '../GoogleButton/GoogleButton';
import {
  ErrorMessageEmail,
  ErrorMessagePassword,
  WrapperForm,
  StyledInput,
  InputName,
  AdditionallyInfo,
  BoxButton,
  WrapperButton,
} from './LoginForm.styled';

export default function LoginForm() {
  const initialValues = {
    password: '',
    email: '',
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
          validationSchema={LoginValidationShema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, isValid, dirty }) => (
            <Form>
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

              <BoxButton>
                <Button
                  marginRight="15px"
                  text="LogIn"
                  type="submit"
                  textColor="#FFFFFF"
                  backgroundColor="#FF751D"
                  disabled={!isValid && !dirty}
                />

                <Button
                  text="SignIn"
                  type="submit"
                  textColor="52555F"
                  backgroundColor="#F5F6FB"
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
