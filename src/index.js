import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { StoreProvider } from 'easy-peasy';
import { ThemeProvider } from 'styled-components';
import { createBrowserHistory } from 'history';
import { store } from './store';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from './global-styles';
import { theme } from './utils/theme';

const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <ThemeProvider theme={theme}>
        <Router history={history}>
          <GlobalStyles />
          <App />
        </Router>
      </ThemeProvider>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
