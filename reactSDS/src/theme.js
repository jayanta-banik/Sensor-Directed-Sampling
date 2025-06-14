import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: { main: '#aa346f' },
    secondary: { main: '#df5927' },
    background: { default: '#fff5fa' },
  },

  shape: { borderRadius: 15 },

  typography: {
    fontFamily:
      'GTWalsheimProRegular, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
    h1: { fontSize: '2.5rem', fontWeight: 700 },
    h2: { fontSize: '2rem', fontWeight: 700 },
    h3: { fontSize: '1.75rem', fontWeight: 700 },
    h4: { fontSize: '1.5rem', fontWeight: 700 },
    h5: { fontSize: '1.25rem', fontWeight: 700 },
  },
});

export default theme;
