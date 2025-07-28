import React from 'react';
import {
  Box,
  Typography,
  Paper,
  Link,
  Stack,
} from '@mui/material';
import {
  Email as EmailIcon,
  Phone as PhoneIcon,
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon,
  Code as CodeIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const contactInfo = [
  {
    icon: <EmailIcon />,
    label: 'Email',
    value: 'srishtisomyagwl@gmail.com',
    link: 'mailto:srishtisomyagwl@gmail.com',
    color: '#2196f3',
  },
  {
    icon: <PhoneIcon />,
    label: 'Phone',
    value: '+91-9399741836',
    link: 'tel:+919399741836',
    color: '#4caf50',
  },
  {
    icon: <LinkedInIcon />,
    label: 'LinkedIn',
    value: 'Srishti Somya',
    link: 'https://linkedin.com/in/Srishti-Somya',
    color: '#0077b5',
  },
  {
    icon: <GitHubIcon />,
    label: 'GitHub',
    value: 'Srishti-Somya',
    link: 'https://github.com/Srishti-Somya',
    color: '#333333',
  },
  {
    icon: <CodeIcon />,
    label: 'LeetCode',
    value: 'SrishtiiS',
    link: 'https://leetcode.com/SrishtiiS',
    color: '#f50057',
  },
];

const Contact = () => {
  return (
    <Box sx={{ maxWidth: '800px', mx: 'auto' }}>
      <Stack spacing={2}>
        {contactInfo.map((info, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Paper
              elevation={3}
              sx={{
                p: 3,
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                },
              }}
            >
              <Link
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  textDecoration: 'none',
                  color: 'inherit',
                  display: 'block',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: '12px',
                      backgroundColor: `${info.color}15`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mr: 2,
                      transition: 'transform 0.2s',
                      '& svg': {
                        fontSize: 24,
                        color: info.color,
                      },
                      '.MuiPaper-root:hover &': {
                        transform: 'scale(1.1)',
                      },
                    }}
                  >
                    {info.icon}
                  </Box>
                  <Box>
                    <Typography
                      variant="subtitle2"
                      color="text.secondary"
                      gutterBottom
                      sx={{ fontSize: '0.875rem' }}
                    >
                      {info.label}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: 500,
                        color: info.color,
                        transition: 'color 0.2s',
                        '&:hover': {
                          color: `${info.color}`,
                        },
                      }}
                    >
                      {info.value}
                    </Typography>
                  </Box>
                </Box>
              </Link>
            </Paper>
          </motion.div>
        ))}
      </Stack>
    </Box>
  );
};

export default Contact; 