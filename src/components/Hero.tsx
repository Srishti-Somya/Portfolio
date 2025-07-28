import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  IconButton,
} from '@mui/material';
import {
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Code as CodeIcon,
  KeyboardArrowDown as KeyboardArrowDownIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <Box
      id="hero"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #1a237e 0%, #0d47a1 100%)',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 50%)',
          animation: 'pulse 8s ease-in-out infinite',
        },
      }}
    >
      {/* Animated background elements */}
      {[...Array(5)].map((_, index) => (
        <Box
          key={index}
          component={motion.div}
          sx={{
            position: 'absolute',
            width: { xs: '150px', md: '300px' },
            height: { xs: '150px', md: '300px' },
            borderRadius: '50%',
            background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
            filter: 'blur(20px)',
          }}
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: index * 1.5,
            ease: 'easeInOut',
          }}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}

      <Container sx={{ position: 'relative', zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', md: '4rem' },
              fontWeight: 700,
              mb: 2,
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              background: 'linear-gradient(135deg, #ffffff 0%, #e3f2fd 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            Hi, I'm Srishti Somya
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '1.5rem', md: '2rem' },
              fontWeight: 400,
              mb: 4,
              color: '#e3f2fd',
              textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            Computer Science Student & Software Engineer
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '1rem', md: '1.2rem' },
              mb: 4,
              maxWidth: '600px',
              lineHeight: 1.6,
              color: '#e3f2fd',
              opacity: 0.9,
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            Passionate about building innovative solutions and exploring new technologies.
            Currently working on implementing change data capture using Kafka and Debezium.
          </Typography>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            sx={{
              mb: 6,
              justifyContent: { xs: 'center', md: 'flex-start' },
            }}
          >
            <Button
              variant="contained"
              component={Link}
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              sx={{
                backgroundColor: '#ffffff',
                color: '#1a237e',
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                '&:hover': {
                  backgroundColor: '#e3f2fd',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              Get in Touch
            </Button>
            <Button
              variant="outlined"
              component={Link}
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              sx={{
                borderColor: '#ffffff',
                color: '#ffffff',
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                '&:hover': {
                  borderColor: '#e3f2fd',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              View Projects
            </Button>
          </Stack>

          <Stack
            direction="row"
            spacing={2}
            sx={{
              justifyContent: { xs: 'center', md: 'flex-start' },
            }}
          >
            {[
              { icon: <GitHubIcon />, link: 'https://github.com/Srishti-Somya', label: 'GitHub' },
              { icon: <LinkedInIcon />, link: 'https://linkedin.com/in/Srishti-Somya', label: 'LinkedIn' },
              { icon: <CodeIcon />, link: 'https://leetcode.com/SrishtiiS', label: 'LeetCode' },
            ].map((social, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <IconButton
                  component="a"
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  sx={{
                    color: '#ffffff',
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,0.2)',
                    },
                  }}
                >
                  {social.icon}
                </IconButton>
              </motion.div>
            ))}
          </Stack>
        </motion.div>
      </Container>

      <Box
        component={motion.div}
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        sx={{
          position: 'absolute',
          bottom: 40,
          left: '50%',
          transform: 'translateX(-50%)',
          cursor: 'pointer',
          zIndex: 2,
        }}
      >
        <Link to="education" spy={true} smooth={true} offset={-70} duration={500}>
          <IconButton
            sx={{
              color: '#ffffff',
              backgroundColor: 'rgba(255,255,255,0.1)',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.2)',
              },
            }}
          >
            <KeyboardArrowDownIcon />
          </IconButton>
        </Link>
      </Box>
    </Box>
  );
};

export default Hero; 