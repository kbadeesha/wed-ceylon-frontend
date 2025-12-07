import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.scss';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { router } from './router';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
