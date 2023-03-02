import "@/styles/globals.css";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
// Customs themes
import { darkTheme, lightTheme } from "../themes/themes.js";
// Context
import HomeContextProvider from "@/context/HomeContext";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const [activeTheme, setActiveTheme] = useState(lightTheme);
  const [selectedTheme, setSelectedTheme] = useState("light");

  const toggleTheme = () => {
    setSelectedTheme(selectedTheme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    setActiveTheme(selectedTheme === "light" ? lightTheme : darkTheme);
  }, [selectedTheme]);

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
