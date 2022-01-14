import './App.css';

import SignInForm from './components/SignInForm/SignInForm';
import Container from './components/Container/Container';
import LoginForm from './components/LoginForm/LoginForm';

function App() {
  return (
    <Container>
      <div>
        <SignInForm></SignInForm>
        <LoginForm></LoginForm>
      </div>
    </Container>
  );
}

export default App;
