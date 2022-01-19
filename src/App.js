import { Switch, Redirect, Route } from 'react-router-dom';
import './App.css';

import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';

import RegisterPage from './pages/RegisterPage/RegisterPage';
import LoginPage from './pages/LoginPage/LoginPage';
import ReportPage from './pages/ReportPage/ReportPage';
import HomePage from './pages/HomePage/HomePage';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Header></Header>

      <Switch>
        <PublicRoute path="/" exact>
          <Redirect to="/login" />
        </PublicRoute>

        <PublicRoute path="/signup" restricted>
          <RegisterPage />
        </PublicRoute>

        <PublicRoute path="/login" redirectTo="/home" restricted>
          <LoginPage />
        </PublicRoute>

        <PrivateRoute path="/home">
          <HomePage />
        </PrivateRoute>

        <PrivateRoute path="/report">
          <ReportPage />
        </PrivateRoute>

        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
