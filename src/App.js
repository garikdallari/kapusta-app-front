import { Switch, Redirect } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import authOperations from './redux/auth/auth-operations';
import authSelectors from './redux/auth/auth-selectors';
import './App.css';

import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';

import RegisterPage from './pages/RegisterPage/RegisterPage';
import LoginPage from './pages/LoginPage/LoginPage';
import ReportPage from './pages/ReportPage/ReportPage';
import HomePage from './pages/HomePage/HomePage';
import Header from './components/Header/Header';

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

          <PrivateRoute path="/home" redirectTo="/login">
            <HomePage />
          </PrivateRoute>

          <PrivateRoute path="/report" redirectTo="/login">
            <ReportPage />
          </PrivateRoute>
        </Switch>
      </>
    )
  );
}

export default App;
