import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const baseTheme = {
  headerHeight: "55px",
  footerHeight: "20px",
}

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    background: {
      default: '#212121',
    }
  },
  ...baseTheme
});

export default theme;
