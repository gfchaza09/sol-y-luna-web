import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
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

export default darkTheme;
