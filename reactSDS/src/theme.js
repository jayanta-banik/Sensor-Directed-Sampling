import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#00695c' },
    secondary: { main: '#f50057' },
    background: { default: '#f9fbe7', paper: '#f1f8e9' },
    text: { primary: '#415252', secondary: '#348c81', disabled: '#97b5b5' },
    error: { main: '#9e2523', dark: '#9e2523' },
    warning: { main: '#ffd54f' },
    divider: '#004d40',
  },

  shape: { borderRadius: 15 },

  typography: {
    fontFamily:
      '"Funnel Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
    h1: { fontSize: '2rem', fontWeight: 700 },
    h2: { fontSize: '1.5rem', fontWeight: 700 },
    h3: { fontSize: '1.25rem', fontWeight: 700 },
    h4: { fontSize: '1rem', fontWeight: 700 },
    h5: { fontSize: '0.75rem', fontWeight: 700 },
    h6: { fontSize: '0.5rem', fontWeight: 700 },
  },
});

export default theme;
