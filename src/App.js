import { Switch, Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from './components/Loader/Loader';
import authOperations from './redux/auth/auth-operations';
import authSelectors from './redux/auth/auth-selectors';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';

import RegisterPage from './pages/RegisterPage/RegisterPage';
import LoginPage from './pages/LoginPage/LoginPage';
import ReportPage from './pages/ReportPage/ReportPage';
import HomePage from './pages/HomePage/HomePage';
import Header from './components/Header/Header';
import GoogleLoader from './components/GoogleLoader/GoogleLoader';
import { ToastContainer } from 'react-toastify';

function App() {
  const isFetchingCurrent = useSelector(authSelectors.getFetchingCurrent);
  const [inProgress, setInProgress] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
    setInProgress(false);
  }, [dispatch]);

  if (inProgress || isFetchingCurrent) {
    return <Loader />;
  }

  return (
    !isFetchingCurrent && (
      <>
        <Header></Header>

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
        <ToastContainer autoClose={4000} />
      </>
    )
  );
}

export default App;
