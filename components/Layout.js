
import { ThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import Container from '@mui/material/Container';
import Copyright from './Copyright';

import CurrentTheme from '../styles/theme';
import MaxWidthContext from "../scripts/maxWidthContext";
import { useTheme } from "@mui/styles";

const Layout = ({ children }) => {

    const theme = useTheme();

    // availables breakpoints from muitheme
    const availableSize = theme.breakpoints.keys;
    // largest usable breakpoint 
    const largestSizeBP = availableSize.reduce((acc, curr) => {
        // disable linter rule about using react hook inside a callback
        // cf: "What exactly do the lint rules enforce?":
        // https://reactjs.org/docs/hooks-faq.html#what-exactly-do-the-lint-rules-enforce
        // eslint-disable-next-line react-hooks/rules-of-hooks
        return useMediaQuery(theme.breakpoints.up(curr)) ? curr : acc;
    });

    const maxWidth = theme.breakpoints.values[largestSizeBP];
    // save breakpoint key and value in theme provided
    CurrentTheme.breakpoints.current = {
        key: largestSizeBP,
        value: maxWidth
    };

    // moins la hauteur du footer
    let margins = CurrentTheme.footerHeight;
    // moins les marges de padding de container (qui est en "px")
    margins += 2 * CurrentTheme.spacing(3).slice(0, -2);

    return (
        <ThemeProvider theme={CurrentTheme}>
            <MaxWidthContext.Provider value={CurrentTheme.breakpoints.current}>
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
            </MaxWidthContext.Provider>
        </ThemeProvider>
    );
};

export default Layout;