import { Switch, Redirect } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import authOperations from './redux/auth/auth-operations';
import authSelectors from './redux/auth/auth-selectors';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';

import { ToastContainer } from 'react-toastify';
import Header from './components/Header/Header';

// import RegisterPage from './pages/RegisterPage/RegisterPage';
// import LoginPage from './pages/LoginPage/LoginPage';
// import ReportPage from './pages/ReportPage/ReportPage';
// import HomePage from './pages/HomePage/HomePage';
// import GoogleLoader from './components/GoogleLoader/GoogleLoader';

const RegisterPage = lazy(() =>
  import(
    './pages/RegisterPage/RegisterPage' /* webpackChunkName: 'RegisterPage' */
  ),
);

const LoginPage = lazy(() =>
  import('./pages/LoginPage/LoginPage' /* webpackChunkName: 'LoginPage' */),
);

const HomePage = lazy(() =>
  import('./pages/HomePage/HomePage' /* webpackChunkName: 'HomePage' */),
);

const ReportPage = lazy(() =>
  import('./pages/ReportPage/ReportPage' /* webpackChunkName: 'ReportPage' */),
);

const GoogleLoader = lazy(() =>
  import(
    './components/GoogleLoader/GoogleLoader' /* webpackChunkName: 'GoogleLoader' */
  ),
);

function App() {
  const isFetchingCurrent = useSelector(authSelectors.getFetchingCurrent);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrent && (
      <>
        <Header></Header>

        <Suspense fallback={<h1>Loading.....</h1>}>
          <Switch>
            <PublicRoute path="/" exact redirectTo="/home" restricted>
              <Redirect to="/login" />
            </PublicRoute>

            <PublicRoute path="/signup" redirectTo="/home" restricted>
              <RegisterPage />
            </PublicRoute>

            <PublicRoute path="/login" redirectTo="/home" restricted>
              <LoginPage />
            </PublicRoute>

            <PublicRoute path="/google" redirectTo="/home" restricted>
              <GoogleLoader />
            </PublicRoute>

            <PrivateRoute path="/home" redirectTo="/login">
              <HomePage />
            </PrivateRoute>

            <PrivateRoute path="/report" redirectTo="/login">
              <ReportPage />
            </PrivateRoute>
          </Switch>
        </Suspense>
        <ToastContainer autoClose={4000} />
      </>
    )
  );
}

export default App;
