import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#FFA366', // Warm Soft Orange
      contrastText: '#FAFAFA',
    },
    secondary: {
      main: '#A0E7B2', // Fresh Mint Green
      contrastText: '#4E342E',
    },
    error: {
      main: '#FF6B6B', // Soft Coral Red
    },
    text: {
      primary: '#4E342E', // Dark Brown
      secondary: '#FAFAFA', // Off-White
    },
    background: {
      default: '#FFFFFF',
      paper: '#F7EBD2', // Golden Beige
    },
  },
  typography: {
    fontFamily: "'Poppins', 'Inter', 'Outfit', sans-serif",
    button: {
      textTransform: 'none',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          padding: '8px 16px',
        },
      },
    },
  },
});

export const colors = {
  primary: '#FFA366',
  secondary: '#A0E7B2',
  accent: '#F7EBD2',
  textMain: '#4E342E',
  textLight: '#FAFAFA',
  error: '#FF6B6B',
}; 