// import React from 'react';
// import { Formik } from 'formik';
// // import { useDispatch } from 'react-redux';
// import {
//   WrapperForm,
//   ErrorMessage,
//   TitleForm,
//   StyledInput,
// } from './LoginForm.styled';
// import * as yup from 'yup';

// export default function LoginForm() {
//   const initialValues = {
//     email: '',
//     password: '',
//   };

//   const validationSchema = yup.object().shape({
//     email: yup
//       .string()
//       .email('Please enter a valid email')
//       .required('This field is required'),
//     password: yup
//       .string()
//       .typeError('Should be a string')
//       .required('This field is required'),
//   });

//   const onSubmit = values => {
//     //  dispatch(authOperations.login(values));

//     console.log(values);
//   };

//   return (
//     <>
//       <Formik
//         initialValues={initialValues}
//         validatedOnBlur
//         onSubmit={onSubmit}
//         validationSchema={validationSchema}
//       >
//         {({
//           values,
//           errors,
//           touched,
//           handleChange,
//           handleBlur,
//           isValid,
//           handleSubmit,
//           dirty,
//         }) => (
//           <WrapperForm>
//             <TitleForm>AUTHORIZATION</TitleForm>
//             <Box
//               component="form"
//               sx={{
//                 '& > :not(style)': { m: 1, width: '250px' },
//               }}
//               onSubmit={handleSubmit}
//             >
//               <StyledInput
//                 label="email"
//                 variant="outlined"
//                 type="email"
//                 name="email"
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 value={values.email}
//                 autoComplete="on"
//               />
//               {touched.email && errors.email && (
//                 <ErrorMessage>{`*${errors.email}`}</ErrorMessage>
//               )}

//               <StyledInput
//                 label="password"
//                 variant="outlined"
//                 type="password"
//                 name="password"
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 value={values.password}
//                 autoComplete="on"
//               />
//               {touched.password && errors.password && (
//                 <ErrorMessage>{`*${errors.password}`}</ErrorMessage>
//               )}

//               <Button
//                 variant="contained"
//                 disabled={!isValid && !dirty}
//                 type="submit"
//               >
//                 LogIn
//               </Button>
//             </Box>
//           </WrapperForm>
//         )}
//       </Formik>
//     </>
//   );
// }
import React from 'react';
import { Formik, Form, Field } from 'formik';
import { ErrorMessage } from './LoginForm.styled';
import * as Yup from 'yup';

export default function LoginForm() {
  const initialValues = {
    password: '',
    email: '',
  };

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email('Please enter a valid email')
      .required('This field is required'),
    password: Yup.string()
      .typeError('Should be a string')
      .required('This field is required'),
  });

  return (
    <>
      <div>
        <h1>Login</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={LoginSchema}
          onSubmit={values => {
            //  dispatch(authOperations.login(values));
            console.log(values);
          }}
        >
          {({ errors, touched, isValid, dirty }) => (
            <Form>
              <Field name="email" type="email" placeholder="your@email.com" />
              {errors.email && touched.email && (
                <ErrorMessage>{errors.email}</ErrorMessage>
              )}

              <Field
                type="password"
                name="password"
                autoComplete="on"
                placeholder="password"
              />

              {touched.password && errors.password && (
                <ErrorMessage>{errors.password}</ErrorMessage>
              )}
              <button type="submit" disabled={!isValid && !dirty}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}
