import { Switch, Redirect, Route } from 'react-router-dom';
import './App.css';

// import PublicRoute from './routes/PublicRoute';
// import PrivateRoute from './routes/PrivateRoute';

import SignupPage from './pages/SignupPage/SignupPage';
// import LoginPage from './pages/LoginPage/LoginPage';
// import ReportPage from './pages/ReportPage/ReportPage';
// import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <>
      <SignupPage></SignupPage>
    </>
    // <Switch>
    //   <Route path="/" exact>
    //     <Redirect to="/login" />
    //   </Route>

    //   <Route path="/signup" restricted>
    //     <SignupPage />
    //   </Route>

    //   <Route path="/login" redirectTo="/home" restricted>
    //     <LoginPage />
    //   </Route>

    //   <Route path="/home">
    //     <HomePage />
    //   </Route>

    //   <Route path="/report">
    //     <ReportPage />
    //   </Route>

    //   <Redirect to="/" />
    // </Switch>
  );
}

export default App;
