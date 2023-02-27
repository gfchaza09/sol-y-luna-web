import "@/styles/globals.css";
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline'
// Customs themes
import darkTheme from '../themes/darkTheme.js'
import lightTheme from '../themes/lightTheme.js'


// Context
import HomeContextProvider from "@/context/HomeContext";

export default function App({ Component, pageProps }) {
  return (
    <HomeContextProvider>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </HomeContextProvider>
  );
}
