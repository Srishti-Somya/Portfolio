import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        backgroundColor: 'background.paper',
        borderTop: 1,
        borderColor: 'divider',
      }}
    >
      <Container>
        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
        >
          © {new Date().getFullYear()} Srishti Somya. All rights reserved.
          {' | '}
          <Link
            href="mailto:srishtisomyagwl@gmail.com"
            color="inherit"
            underline="hover"
          >
            Contact
          </Link>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer; 