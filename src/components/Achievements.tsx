import React from 'react';
import {
  Box,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  Chip,
  Stack,
} from '@mui/material';
import {
  EmojiEvents as EmojiEventsIcon,
  School as SchoolIcon,
  Code as CodeIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const achievements = [
  {
    title: 'Microsoft Learn Student Ambassador',
    description: 'Reached the BETA milestone in the community.',
    icon: <SchoolIcon />,
    color: '#00a4ef',
  },
  {
    title: 'LeetCode Achievement',
    description: 'Solved more than 400 questions on LeetCode, earning the 2024 year badge.',
    icon: <CodeIcon />,
    color: '#ffa116',
  },
  {
    title: 'Certifications',
    description: 'CCNAv7: Introduction to Network, Machine Learning - Infosys Springboard',
    icon: <EmojiEventsIcon />,
    color: '#4caf50',
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Achievements = () => {
  return (
    <Box>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        <Stack spacing={3}>
          {achievements.map((achievement, index) => (
            <motion.div key={index} variants={itemVariants}>
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
                <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: '12px',
                      backgroundColor: `${achievement.color}15`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mr: 2,
                      flexShrink: 0,
                      '& svg': {
                        fontSize: 24,
                        color: achievement.color,
                      },
                    }}
                  >
                    {achievement.icon}
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" gutterBottom fontWeight={600}>
                      {achievement.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {achievement.description}
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </motion.div>
          ))}
        </Stack>
      </motion.div>
    </Box>
  );
};

export default Achievements; 