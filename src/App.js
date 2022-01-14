import { Switch, Redirect, Route } from 'react-router-dom';
import './App.css';

import Container from './components/Container/Container';

import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';

import RegisterPage from './pages/RegisterPage/RegisterPage';
import LoginPage from './pages/LoginPage/LoginPage';
import ReportPage from './pages/ReportPage/ReportPage';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <Container>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/login" />
        </Route>

        <Route path="/signup" restricted>
          <RegisterPage />
        </Route>

        <Route path="/login" redirectTo="/home" restricted>
          <LoginPage />
        </Route>

        <Route path="/home">
          <HomePage />
        </Route>

        <Route path="/report">
          <ReportPage />
        </Route>

        <Redirect to="/" />
      </Switch>
    </Container>
  );
}

export default App;
