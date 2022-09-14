import * as React from 'react';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';
import Box from '@mui/material/Box';

const Copyright = () => {
  return (
    <Box
      sx={sxStyles.copyright}
      component="footer"
    >
      <Typography variant="body2" align="center">
        <MuiLink color="inherit" href="/about">
          Théa &amp; JosNo
        </MuiLink>
      </Typography>
    </Box>
  );
}

const sxStyles = {
  copyright: {
    position: "fixed",
    bottom: 0,
    width: "80%",
    left: "50%",
    ml: "-40%",
    py: 1,
    px: 0,
  },
};

export default Copyright;