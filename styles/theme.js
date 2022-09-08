import { createTheme } from '@mui/material/styles';

const baseTheme = {
  // size of an H1 in pixels
  headerHeight: 42,
  // size of the footer in pixels
  footerHeight: 36,
}

// Create a theme instance.
const theme = createTheme({
  palette: {
    mode: 'dark',
  },
  ...baseTheme
});

export default theme;
