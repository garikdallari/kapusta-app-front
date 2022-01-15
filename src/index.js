import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { theme } from './constants/theme';
import App from './App';
import './index.css';
import Summary from './components/Summary/Summary'
import FinanceTable from './components/FinanceTable/FinanceTable'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
        <Summary/>
        <FinanceTable/>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
