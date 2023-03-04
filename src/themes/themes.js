import { createTheme } from "@mui/material/styles";

// Dark theme setup
export const darkTheme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      tablet2: 820,
      laptop: 1024,
      desktop: 1200,
    },
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#D0A554",
      navbar: "#1c1c1c",
    },
    secondary: {
      light: "#0066ff",
      main: "#0044ff",
      contrastText: "#ffcc00",
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
    variants: [
      {
        props: { variant: "textLogo" },
        style: {
          fontFamily: '"Lato", sans-serif',
          fontSize: "17px",
          lineHeight: "25px",
          fontWeight: 600,
          textDecoration: "none",
        },
      },
    ],
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
            color: "#ffffff",
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
  },
});

// Light theme setup
export const lightTheme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      tablet2: 820,
      laptop: 1024,
      desktop: 1200,
    },
  },
  palette: {
    mode: "light", // Establece el modo de color en light
    primary: {
      main: "#D0A554", // Define el color principal para el tema
      navbar: "#ffffff",
    },
    secondary: {
      main: "#F4F6F8", // Define el color secundario para el tema
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
            color: "#000000",
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
            color: "#D0A554",
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
  },
});
