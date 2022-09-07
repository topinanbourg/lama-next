import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Tip from '../components/Tip';
import Link from '../components/Link';
import Copyright from '../components/Copyright';

export default function About() {
  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Next.js example
      </Typography>
      <Button variant="contained" component={Link} noLinkStyle href="/">
        Go to the main page
      </Button>
      <Tip />
    </Box>
  );
}
