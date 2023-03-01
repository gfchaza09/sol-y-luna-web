import "@/styles/globals.css";
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline'
// Customs themes
import { darkTheme, lightTheme } from '../themes/themes.js'
// Context
import HomeContextProvider from "@/context/HomeContext";
import { useState } from "react";


export default function App({ Component, pageProps }) {
  const [isDarkMode, setIsDarkMode] = useState(true)

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  const theme = isDarkMode ? darkTheme : lightTheme;


  return (
    <HomeContextProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      </ThemeProvider>
    </HomeContextProvider>
  );
}
