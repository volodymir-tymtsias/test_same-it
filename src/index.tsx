import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material';
import './normalize.css';

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
  }
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
