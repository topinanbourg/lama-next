import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const baseTheme = {
  // size of an H1 in pixels
  headerHeight: 42,
  // size of the footer in pixels
  footerHeight: 36,
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
