import { useEffect, useState } from "react";
import "@/styles/globals.css";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
// Customs themes
import { darkTheme, lightTheme } from "../themes/themes.js";
// Context
import HomeContextProvider from "@/context/HomeContext";
import { useThemeDarkLight } from "@/hooks/useThemeDarkLight.js";

export default function App({ Component, pageProps }) {
  const [mounted, setMounted] = useState(false);
  const [activeTheme, setActiveTheme] = useState(lightTheme);
  const [selectedTheme, setSelectedTheme] = useThemeDarkLight();

  const toggleTheme = () => {
    setSelectedTheme(selectedTheme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    setActiveTheme(selectedTheme === "light" ? lightTheme : darkTheme);
  }, [selectedTheme]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <HomeContextProvider>
      <ThemeProvider theme={activeTheme}>
        <CssBaseline />
        <Component
          {...pageProps}
          toggleTheme={toggleTheme}
          selectedTheme={selectedTheme}
        />
      </ThemeProvider>
    </HomeContextProvider>
  );
}
