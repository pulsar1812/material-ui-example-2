import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import { blue, amber } from '@material-ui/core/colors';

import App from './App';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: {
      main: amber[400],
      light: amber[200],
      dark: amber[800]
    }
  }
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
