import * as React from 'react';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';
import Box from '@mui/material/Box';

const Copyright = () => {
  return (
    <Box
      className={sxStyles.copyright}
      component="footer"
    >
      <Typography variant="body2" align="center">
        {'Copyright © '}
        <MuiLink color="inherit" href="/about">
          Your Website
        </MuiLink>{' '}
        {new Date().getFullYear()}.
      </Typography>
    </Box>
  );
}

const sxStyles = {
  copyright: {
    py: 1,
    px: 0,
    color: "primary.contrastText",
  },
};

export default Copyright;