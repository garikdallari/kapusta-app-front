import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { Provider } from 'react-redux';
import { theme } from './constants/theme';
import App from './App';
import './index.css';
import store from './redux/store';
import TabletDesktopTable from './components/TabletDesktopTable/TabletDesktopTable'
import MobileTable from './components/MobileTable/MobileTable'
import Summary from './components/Summary/Summary'
import IncomeExpenseBtns from './components/IncomeExpenseBtns/IncomeExpenseBtns'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
        <TabletDesktopTable/>
        <MobileTable/>
        <IncomeExpenseBtns/>
        <Summary/>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
