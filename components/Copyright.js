import * as React from 'react';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';
import Box from '@mui/material/Box';
import { makeStyles } from "@mui/styles";

const Copyright = () => {
  const classes = useStyles();
  return (
    <Box
      className={classes.copyright}
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

const useStyles = makeStyles((theme) => ({
  copyright: {
    py: 1,
    px: 0,
    color: theme.palette.primary.contrastText,
  },
}));


export default Copyright;