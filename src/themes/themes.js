import { createTheme } from '@mui/material/styles';

// Dark theme setup
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ff4400',
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      contrastText: '#ffcc00',
    },
    custom: {
      light: '#ffa726',
      main: '#f57c00',
      dark: '#ef6c00',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  typography: {
    fontFamily: '"Lato", sans-serif',
    h1: {
      fontFamily: '"Josefin Sans", sans-serif',
      fontSize: 50,
      fontWeight: 600,
      lineHeight: "50px",
    },
    h2: {
      fontFamily: '"Josefin Sans", sans-serif',
      fontSize: 40,
      fontWeight: 500,
      lineHeight: "45px",
    },
    h3: {
      fontFamily: '"Josefin Sans", sans-serif',
      fontSize: 28,
      fontWeight: 500,
      lineHeight: "28px",
    },
    h4: {
      fontFamily: '"Josefin Sans", sans-serif',
      fontSize: 22,
      fontWeight: 500,
      lineHeight: "25px",
    },
    h5: {
      fontFamily: '"Josefin Sans", sans-serif',
      fontSize: 17,
      fontWeight: 500,
      lineHeight: "22px",
    }
  }
});

// Light theme setup
export const lightTheme = createTheme({
  palette: {
    mode: 'light', // Establece el modo de color en light
    primary: {
      main: '#d0a554', // Define el color principal para el tema
    },
    secondary: {
      main: '#d8c8ba', // Define el color secundario para el tema
    },
  },
  typography: {
    fontFamily: '"Lato", sans-serif',
    h1: {
      fontFamily: '"Josefin Sans", sans-serif',
      fontSize: 50,
      fontWeight: 600,
      lineHeight: "50px",
    },
    h2: {
      fontFamily: '"Josefin Sans", sans-serif',
      fontSize: 40,
      fontWeight: 500,
      lineHeight: "45px",
    },
    h3: {
      fontFamily: '"Josefin Sans", sans-serif',
      fontSize: 28,
      fontWeight: 500,
      lineHeight: "28px",
    },
    h4: {
      fontFamily: '"Josefin Sans", sans-serif',
      fontSize: 22,
      fontWeight: 500,
      lineHeight: "25px",
    },
    h5: {
      fontFamily: '"Josefin Sans", sans-serif',
      fontSize: 17,
      fontWeight: 500,
      lineHeight: "22px",
    }
  }
});







