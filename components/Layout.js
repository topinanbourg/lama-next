
import Container from '@mui/material/Container';
import Copyright from './Copyright';

const Layout = ({ children }) => {
    return (
        <Container maxWidth="sm"
            sx={{
                px: 1,
                mt: 'auto',
                backgroundColor: (theme) =>
                    theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[800],
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
            }}>
            {children}
            <Copyright />
        </Container >
    );
};

export default Layout;