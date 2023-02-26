import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
    palette: {
      mode: 'light', // Establece el modo de color en light
      primary: {
        main: '#1976d2', // Define el color principal para el tema
      },
      secondary: {
        main: '#f50057', // Define el color secundario para el tema
      },
    },
  }); 
    

export default lightTheme;