import { createTheme } from '@mui/material/styles';
import colors from "./app-colors";

const theme = createTheme({
  palette: {
    primary: {
      light: colors.primary[300],
      main: colors.primary[500],
      dark: colors.primary[800],
      contrastText: '#fff',
      ...colors.primary,
    },
    secondary: {
      light: colors.secondary[300],
      main: colors.secondary[500],
      dark: colors.secondary[800],
      contrastText: '#fff',
      ...colors.secondary,
    },
    error: {
      light: colors.error[300],
      main: colors.error[500],
      dark: colors.error[800],
      contrastText: '#fff',
      ...colors.error,
    },
  },
  typography: {
    fontFamily: [
      'Roboto',
      'sans-serif',
    ].join(','),
  },
  shape: {
    borderRadius: 4,
  },
  spacing: 8
});

export default theme;