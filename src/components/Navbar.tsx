import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
  Box,
  Container,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Link } from 'react-scroll';

const navItems = [
  { name: 'Home', id: 'hero' },
  { name: 'Education', id: 'education' },
  { name: 'Experience', id: 'experience' },
  { name: 'Projects', id: 'projects' },
  { name: 'Skills', id: 'skills' },
  { name: 'Achievements', id: 'achievements' },
  { name: 'Leadership', id: 'leadership-roles' },
  { name: 'Contact', id: 'contact' },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <List>
      {navItems.map((item) => (
        <ListItem key={item.id} disablePadding>
          <Link
            to={item.id}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={handleDrawerToggle}
            style={{ width: '100%', padding: '8px 16px' }}
          >
            <ListItemText
              primary={item.name}
              sx={{
                '& .MuiTypography-root': {
                  fontWeight: 500,
                },
              }}
            />
          </Link>
        </ListItem>
      ))}
    </List>
  );

  return (
    <AppBar
      position="fixed"
      elevation={scrolled ? 4 : 0}
      sx={{
        backgroundColor: scrolled ? 'background.paper' : 'transparent',
        transition: 'all 0.3s',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              fontWeight: 700,
              color: scrolled ? 'text.primary' : 'white',
            }}
          >
            Srishti Somya
          </Typography>

          {isMobile ? (
            <>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{
                  color: scrolled ? 'text.primary' : 'white',
                }}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                  keepMounted: true,
                }}
                PaperProps={{
                  sx: {
                    width: 240,
                  },
                }}
              >
                {drawer}
              </Drawer>
            </>
          ) : (
            <Box sx={{ display: 'flex', gap: 2 }}>
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.id}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <Button
                    sx={{
                      color: scrolled ? 'text.primary' : 'white',
                      '&:hover': {
                        backgroundColor: scrolled
                          ? 'rgba(0, 0, 0, 0.04)'
                          : 'rgba(255, 255, 255, 0.1)',
                      },
                    }}
                  >
                    {item.name}
                  </Button>
                </Link>
              ))}
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar; 