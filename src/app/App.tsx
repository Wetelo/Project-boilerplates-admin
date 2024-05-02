import { ThemeProvider } from '@mui/material';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { AppRouter } from '@/router/app-router';
import { setupStore } from '@/store';
import { theme } from '@/theme';

const store = setupStore();

export const App = () => (
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <AppRouter />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
