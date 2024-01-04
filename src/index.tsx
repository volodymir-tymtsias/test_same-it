import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material';
import './normalize.css';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';

const theme = createTheme({
  palette: {
    primary: {
      main: '#87bfff',
      dark: '#160c28',
    },
    secondary: {
      main: '#f2c33f',
      light: '#f6d371',
    },
  },
  components: {
    // Name of the component
    MuiTablePagination: {
      styleOverrides: {
        toolbar: {
          // Some CSS
          flexWrap: 'wrap',
          justifyContent: 'center',
        },
      },
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
