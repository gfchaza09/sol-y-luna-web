import { createTheme } from "@mui/material/styles";

// Dark theme setup
export const darkTheme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      mobile2: 420,
      tablet: 640,
      tablet1: 768,
      tablet2: 820,
      tablet3: 950,
      laptop: 1024,
      desktop: 1200,
    },
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#111111",
      navbar: "#1c1c1c",
      footer: "#1c1c1c",
      border: "#F1DA9E66",
      borderActive: "#F1DA9E",
    },
    secondary: {
      light: "#0066ff",
      main: "#0044ff",
      contrastText: "#ffcc00",
    },
    background: {
      default: "#111111",
      btnMenu: "#1C1C1C",
    },
    custom: {
      light: "#ffa726",
      main: "#f57c00",
      dark: "#ef6c00",
      contrastText: "rgba(0, 0, 0, 0.87)",
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
    },
  },
  components: {
    MuiTypography: {
      variants: [
        {
          props: { variant: "textLogo" },
          style: {
            fontFamily: '"Lato", sans-serif',
            fontSize: "17px",
            lineHeight: "25px",
            fontWeight: 600,
            textDecoration: "none",
            color: "#ffffff",
          },
        },
        {
          props: { variant: "linkNavbar" },
          style: {
            fontFamily: '"Lato", sans-serif',
            fontSize: "16px",
            lineHeight: "25px",
            fontWeight: 600,
            textDecoration: "none",
          },
        },
        {
          props: { variant: "subtitleCard" },
          style: {
            fontFamily: '"Josefin Sans", sans-serif',
            fontSize: 22,
            fontWeight: 500,
            lineHeight: "25px",
            color: "#f1da9e",
          },
        },
        {
          props: { variant: "linkCard" },
          style: {
            fontFamily: '"Lato", sans-serif',
            fontSize: "16px",
            lineHeight: "20px",
            fontWeight: 500,
            color: "#F1DA9E",
          },
        },
        {
          props: { variant: "footnoteCard" },
          style: {
            fontFamily: '"Lato", sans-serif',
            fontSize: "17px",
            lineHeight: "25px",
            fontWeight: 500,
            color: "#F1DA9E",
          },
        },
        {
          props: { variant: "modalWhatsappColor" },
          style: {
            color: "#ffffff",
          },
        },
        {
          props: { variant: "caption2Card" },
          style: {
            fontFamily: '"Lato", sans-serif',
            fontSize: "12px",
            lineHeight: "18px",
            fontWeight: 500,
            color: "#F1DA9E",
          },
        },
      ],
    },
    MuiCard: {
      variants: [
        {
          props: { variant: "cardBackground" },
          style: {
            backgroundColor: "#1c1c1c",
          },
        },
      ],
    },
    MuiList: {
      variants: [
        {
          props: { variant: "backgroundMenu" },
          style: {
            backgroundColor: "#111111",
          },
        },
        {
          props: { variant: "backgroundMenuHeader" },
          style: {
            backgroundColor: "#1c1c1c",
          },
        },
      ],
    },
    MuiAppBar: {
      variants: [
        {
          props: { variant: "backgroundNavbar" },
          style: {
            backgroundColor: "#000000",
          },
        },
      ],
    },
    MuiAccordion: {
      variants: [
        {
          props: { variant: "backgroundAccordion" },
          style: {
            backgroundColor: "#1c1c1c",
          },
        },
      ],
    },
    MuiAccordionSummary: {
      variants: [
        {
          props: { variant: "backgroundAccordionHover" },
          style: {
            borderRadius: "6px",
            transition: "background .2s linear",
            ":hover": {
              backgroundColor: "#252525",
            },
          },
        },
      ],
    },
    MuiContainer: {
      variants: [
        {
          props: { variant: "backgroundAccordionHover" },
          style: {
            transition: "background .2s linear",
            ":hover": {
              backgroundColor: "#252525",
            },
          },
        },
        {
          props: { variant: "menuButton" },
          style: {
            backgroundColor: "#F1DA9E",
            color: "#000000",
          },
        },
      ],
    },
    MuiButtonBase: {
      variants: [
        {
          props: { variant: "contactButton" },
          style: {
            borderRadius: "12px",
            border: "1px solid #F1DA9E",
            color: "#F1DA9E",
            fontWeight: 500,
            fontSize: 16,
            lineHeight: "20px",
            transition: "all .2s linear",
            ":hover": {
              backgroundColor: "#F1DA9E22",
            },
          },
        },
        {
          props: { variant: "carouselButton" },
          style: {
            borderRadius: "50%",
            border: "2px solid #FFFFFF",
            color: "#FFFFFF",
          },
        },
        {
          props: { variant: "menuButton" },
          style: {
            backgroundColor: "#F1DA9E",
            color: "#000000",
          },
        },
      ],
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarColor: "#6b6b6b #2b2b2b",
          "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
            backgroundColor: "#2b2b2b",
          },
          "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
            borderRadius: 8,
            backgroundColor: "#6b6b6b",
            minHeight: 24,
            border: "3px solid #2b2b2b",
          },
          "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus":
            {
              backgroundColor: "#959595",
            },
          "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active":
            {
              backgroundColor: "#959595",
            },
          "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover":
            {
              backgroundColor: "#959595",
            },
          "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
            backgroundColor: "#2b2b2b",
          },
        },
      },
    },
  },
});

// Light theme setup
export const lightTheme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      mobile2: 420,
      tablet: 640,
      tablet1: 768,
      tablet2: 820,
      tablet3: 950,
      laptop: 1024,
      desktop: 1200,
    },
  },
  palette: {
    mode: "light", // Establece el modo de color en light
    primary: {
      main: "#D0A554", // Define el color principal para el tema
      navbar: "#ffffff",
      footer: "#ffffff",
      border: "#9CA3AF80",
      borderActive: "#9CA3AF",
    },
    secondary: {
      main: "#F4F6F8", // Define el color secundario para el tema
    },
    background: {
      default: "#F4F6F8",
      btnMenu: "#FFFFFF",
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
    },
  },
  components: {
    MuiTypography: {
      variants: [
        {
          props: { variant: "textLogo" },
          style: {
            fontFamily: '"Lato", sans-serif',
            fontSize: "17px",
            lineHeight: "25px",
            fontWeight: 600,
            textDecoration: "none",
            color: "#000000",
          },
        },
        {
          props: { variant: "linkNavbar" },
          style: {
            fontFamily: '"Lato", sans-serif',
            fontSize: "16px",
            lineHeight: "25px",
            fontWeight: 600,
            textDecoration: "none",
          },
        },
        {
          props: { variant: "subtitleCard" },
          style: {
            fontFamily: '"Josefin Sans", sans-serif',
            fontSize: 22,
            fontWeight: 500,
            lineHeight: "25px",
            color: "#d0a554",
          },
        },
        {
          props: { variant: "linkCard" },
          style: {
            fontFamily: '"Lato", sans-serif',
            fontSize: "16px",
            lineHeight: "20px",
            fontWeight: 500,
            color: "#6B7280",
          },
        },
        {
          props: { variant: "footnoteCard" },
          style: {
            fontFamily: '"Lato", sans-serif',
            fontSize: "17px",
            lineHeight: "25px",
            fontWeight: 500,
            color: "#6B7280",
          },
        },
        {
          props: { variant: "modalWhatsappColor" },
          style: {
            color: "#000000",
          },
        },
        {
          props: { variant: "caption2Card" },
          style: {
            fontFamily: '"Lato", sans-serif',
            fontSize: "12px",
            lineHeight: "18px",
            fontWeight: 500,
            color: "#6B7280",
          },
        },
      ],
    },
    MuiCard: {
      variants: [
        {
          props: { variant: "cardBackground" },
          style: {
            backgroundColor: "#FFFFFF",
          },
        },
        {
          props: { variant: "cardHomeBackground" },
          style: {
            backgroundColor: "#F4F6F8",
          },
        },
      ],
    },
    MuiList: {
      variants: [
        {
          props: { variant: "backgroundMenu" },
          style: {
            backgroundColor: "#F4F6F8",
          },
        },
      ],
    },
    MuiAppBar: {
      variants: [
        {
          props: { variant: "backgroundNavbar" },
          style: {
            backgroundColor: "#ffffff",
          },
        },
      ],
    },
    MuiAccordion: {
      variants: [
        {
          props: { variant: "backgroundAccordion" },
          style: {
            backgroundColor: "#FFFFFF",
          },
        },
      ],
    },
    MuiAccordionSummary: {
      variants: [
        {
          props: { variant: "backgroundAccordionHover" },
          style: {
            borderRadius: "6px",
            transition: "background .2s linear",
            ":hover": {
              backgroundColor: "#F4F6F8",
            },
          },
        },
      ],
    },
    MuiContainer: {
      variants: [
        {
          props: { variant: "backgroundAccordionHover" },
          style: {
            transition: "background .2s linear",
            ":hover": {
              backgroundColor: "#F4F6F8",
            },
          },
        },
        {
          props: { variant: "menuButton" },
          style: {
            backgroundColor: "#9CA3AF",
            color: "#FFFFFF",
          },
        },
      ],
    },
    MuiButtonBase: {
      variants: [
        {
          props: { variant: "contactButton" },
          style: {
            borderRadius: "12px",
            border: "1px solid #6B7280",
            color: "#6B7280",
            fontWeight: 500,
            fontSize: 16,
            lineHeight: "20px",
            transition: "all .2s linear",
            ":hover": {
              backgroundColor: "#6B728033",
            },
          },
        },
        {
          props: { variant: "carouselButton" },
          style: {
            borderRadius: "50%",
            border: "2px solid #000000",
            color: "#000000",
          },
        },
        {
          props: { variant: "menuButton" },
          style: {
            backgroundColor: "#9CA3AF",
            color: "#FFFFFF",
          },
        },
      ],
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarColor: "#6b6b6b #2b2b2b",
          "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
            backgroundColor: "#2b2b2b",
          },
          "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
            borderRadius: 8,
            backgroundColor: "#6b6b6b",
            minHeight: 24,
            border: "3px solid #2b2b2b",
          },
          "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus":
            {
              backgroundColor: "#959595",
            },
          "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active":
            {
              backgroundColor: "#959595",
            },
          "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover":
            {
              backgroundColor: "#959595",
            },
          "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
            backgroundColor: "#2b2b2b",
          },
        },
      },
    },
  },
});
