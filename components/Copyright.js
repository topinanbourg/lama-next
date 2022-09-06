import * as React from 'react';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';
import Box from '@mui/material/Box';

export default function Copyright() {
  return (
    <Box
      component="footer"
      sx={{
        py: 1,
        px: 0,
        mt: 'auto',
        backgroundColor: (theme) =>
          theme.palette.grey[600],
      }}
    >
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <MuiLink color="inherit" href="/about">
          Your Website
        </MuiLink>{' '}
        {new Date().getFullYear()}.
      </Typography>
    </Box>
  );
}
