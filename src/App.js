import './App.css';

import LoginForm from './components/LoginForm/LoginForm';
import Container from './components/Container/Container';
import FinanceTable from './components/FinanceTable/FinanceTable' ;
import Summary from './components/Summary/Summary';

function App() {
  return (
    <Container>
      <LoginForm></LoginForm>
      <FinanceTable/>
      <Summary/>
    </Container>
  );
}

export default App;
