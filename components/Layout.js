
import { useTheme } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import Container from '@mui/material/Container';
import Copyright from './Copyright';

import CurrentTheme from '../styles/theme';

const Layout = ({ children }) => {
    const theme = useTheme();

    // availables breakpoints from muitheme
    const availableSize = theme.breakpoints.keys;
    // largest usable breakpoint 
    const largestSizeBP = availableSize.reduce((acc, curr) => {
        return useMediaQuery(theme.breakpoints.up(curr)) ? curr : acc;
    });

    // save breakpoint key and value in theme provided
    CurrentTheme.breakpoints.current = {
        key: largestSizeBP,
        value: theme.breakpoints.values[largestSizeBP]
    };

    // moins la hauteur du footer
    let margins = CurrentTheme.footerHeight;
    // moins les marges de padding de container (qui est en "px")
    margins += 2 * CurrentTheme.spacing(3).slice(0, -2);

    return (
        <ThemeProvider theme={CurrentTheme}>
            <Container maxWidth={largestSizeBP}
                sx={{
                    px: 1,
                    py: 1,
                    mt: 'auto',
                    minHeight: `calc(100vh - ${margins}px)`,
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'center',
                }}>
                {children}
                <Copyright />
            </Container >
        </ThemeProvider>
    );
};

export default Layout;