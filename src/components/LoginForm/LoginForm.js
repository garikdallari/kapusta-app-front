// import React from 'react';
import { Formik, Form } from 'formik';
import { LoginValidationShema } from '../../helpers/LoginValidationShema';
import Button from '../Button/Button';
import GoogleButton from '../GoogleButton/GoogleButton';
import {
  ErrorMessage,
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
          Вы можете авторизоваться с помощью Google Account:
        </AdditionallyInfo>
        <WrapperButton>
          <GoogleButton />
        </WrapperButton>

        <AdditionallyInfo>
          Или зайти с помощью e-mail и пароля, предварительно
          зарегистрировавшись:
        </AdditionallyInfo>
        <Formik
          initialValues={initialValues}
          validationSchema={LoginValidationShema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, isValid, dirty }) => (
            <Form>
              <InputName>Электронная почта:</InputName>
              <StyledInput
                name="email"
                type="email"
                placeholder="your@email.com"
              />
              {errors.email && touched.email && (
                <ErrorMessage>{errors.email}</ErrorMessage>
              )}
              <InputName>Пароль:</InputName>
              <StyledInput
                type="password"
                name="password"
                autoComplete="on"
                placeholder="Password"
              />
              {touched.password && errors.password && (
                <ErrorMessage>{errors.password}</ErrorMessage>
              )}

              <BoxButton>
                <Button
                  marginRight="15px"
                  text="войти"
                  type="submit"
                  textColor="#FFFFFF"
                  backgroundColor="#FF751D"
                  disabled={!isValid && !dirty}
                />

                <Button
                  text="Регистрация"
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
