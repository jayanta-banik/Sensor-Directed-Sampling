import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';

import { Box, ThemeProvider } from '@mui/material';
import { Provider as ReduxProvider } from 'react-redux';

import './index.css';
import App from './App.jsx';
import theme from './theme';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      {/* <ThemeProvider theme={theme}> */}
      {/* <ReduxProvider store={store}> */}
      <Box sx={{ height: '100vh', width: 'fill-available' }}>
        <App />
      </Box>
      {/* </ReduxProvider> */}
      {/* </ThemeProvider> */}
    </BrowserRouter>
  </StrictMode>
);
