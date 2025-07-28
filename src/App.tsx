import React, { useState, useEffect } from 'react';
import { ThemeProvider, createTheme, CssBaseline, Box } from '@mui/material';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import Achievements from './components/Achievements';
import LeadershipRoles from './components/LeadershipRoles';
import SectionContainer from './components/SectionContainer';

// Create Inter font theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#2196f3',
      light: '#64b5f6',
      dark: '#1976d2',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#f50057',
      light: '#ff4081',
      dark: '#c51162',
      contrastText: '#ffffff',
    },
    background: {
      default: '#f8fafc',
      paper: '#ffffff',
    },
    text: {
      primary: '#1a2027',
      secondary: '#4a5568',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 800,
      fontSize: '3.5rem',
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
      '@media (max-width:600px)': {
        fontSize: '2.5rem',
      },
    },
    h2: {
      fontWeight: 700,
      fontSize: '2.5rem',
      lineHeight: 1.3,
      letterSpacing: '-0.01em',
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
    },
    h3: {
      fontWeight: 600,
      fontSize: '2rem',
      lineHeight: 1.4,
      '@media (max-width:600px)': {
        fontSize: '1.75rem',
      },
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.75rem',
      lineHeight: 1.4,
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.4,
    },
    h6: {
      fontWeight: 600,
      fontSize: '1.25rem',
      lineHeight: 1.4,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
      letterSpacing: '0.00938em',
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
      letterSpacing: '0.00938em',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '8px',
          fontWeight: 500,
          padding: '8px 16px',
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            transform: 'translateY(-2px)',
          },
        },
        contained: {
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          '&:hover': {
            boxShadow: '0 6px 8px rgba(0,0,0,0.15)',
          },
        },
        outlined: {
          borderWidth: '2px',
          '&:hover': {
            borderWidth: '2px',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
        },
        elevation1: {
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        },
        elevation2: {
          boxShadow: '0 6px 8px rgba(0,0,0,0.1)',
        },
        elevation3: {
          boxShadow: '0 8px 12px rgba(0,0,0,0.1)',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          fontWeight: 500,
          '&:hover': {
            transform: 'translateY(-2px)',
          },
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          padding: '12px 0',
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          margin: '16px 0',
        },
      },
    },
  },
  shape: {
    borderRadius: 8,
  },
  shadows: [
    'none',
    '0 2px 4px rgba(0,0,0,0.05)',
    '0 4px 6px rgba(0,0,0,0.1)',
    '0 6px 8px rgba(0,0,0,0.1)',
    '0 8px 12px rgba(0,0,0,0.1)',
    '0 12px 24px rgba(0,0,0,0.15)',
    '0 12px 24px rgba(0,0,0,0.15)',
    '0 12px 24px rgba(0,0,0,0.15)',
    '0 12px 24px rgba(0,0,0,0.15)',
    '0 12px 24px rgba(0,0,0,0.15)',
    '0 12px 24px rgba(0,0,0,0.15)',
    '0 12px 24px rgba(0,0,0,0.15)',
    '0 12px 24px rgba(0,0,0,0.15)',
    '0 12px 24px rgba(0,0,0,0.15)',
    '0 12px 24px rgba(0,0,0,0.15)',
    '0 12px 24px rgba(0,0,0,0.15)',
    '0 12px 24px rgba(0,0,0,0.15)',
    '0 12px 24px rgba(0,0,0,0.15)',
    '0 12px 24px rgba(0,0,0,0.15)',
    '0 12px 24px rgba(0,0,0,0.15)',
    '0 12px 24px rgba(0,0,0,0.15)',
    '0 12px 24px rgba(0,0,0,0.15)',
    '0 12px 24px rgba(0,0,0,0.15)',
    '0 12px 24px rgba(0,0,0,0.15)',
    '0 12px 24px rgba(0,0,0,0.15)',
  ],
});

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <LoadingScreen />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Hero />
      <SectionContainer
        id="experience"
        title="Experience"
        subtitle="My professional journey and internships"
        lightBg={true}
      >
        <Experience />
      </SectionContainer>
      <SectionContainer
        id="education"
        title="Education"
        subtitle="My academic journey and qualifications"
        lightBg={false}
      >
        <Education />
      </SectionContainer>
      
      <SectionContainer
        id="projects"
        title="Projects"
        subtitle="Some of my notable technical projects"
        lightBg={false}
      >
        <Projects />
      </SectionContainer>
      <SectionContainer
        id="skills"
        title="Skills & Expertise"
        subtitle="Technologies and tools I work with"
        lightBg={true}
      >
        <Skills />
      </SectionContainer>
      <SectionContainer
        id="achievements"
        title="Achievements"
        subtitle="Recognition and certifications"
        lightBg={false}
      >
        <Box sx={{ maxWidth: '1000px', mx: 'auto' }}>
          <Achievements />
        </Box>
      </SectionContainer>
      <SectionContainer
        id="leadership-roles"
        title="Leadership Roles"
        subtitle="Positions of responsibility and impact"
        lightBg={true}
      >
        <Box sx={{ maxWidth: '1000px', mx: 'auto' }}>
          <LeadershipRoles />
        </Box>
      </SectionContainer>
      <SectionContainer
        id="contact"
        title="Get In Touch"
        subtitle="Let's connect and discuss opportunities"
        lightBg={false}
      >
        <Contact />
      </SectionContainer>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
