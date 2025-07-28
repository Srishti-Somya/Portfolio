import React from 'react';
import {
  Box,
  Typography,
  Paper,
  Stack,
} from '@mui/material';
import {
  Business as BusinessIcon,
  Group as GroupIcon,
  Campaign as CampaignIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const leadershipRoles = [
  {
    title: 'Deputy Secretary',
    organization: 'Bitwise Programming Hub Juet',
    period: 'Aug 2024 - Present',
    icon: <BusinessIcon />,
    color: '#2196f3',
  },
  {
    title: 'Training & Placement Coordinator',
    organization: 'T & P Cell',
    period: 'Jan 2024 - Present',
    icon: <GroupIcon />,
    color: '#4caf50',
  },
  {
    title: 'Coordinator - Sponsorship Team',
    organization: 'TEDxJUET',
    period: 'Jan 2023 - Aug 2023',
    icon: <CampaignIcon />,
    color: '#f50057',
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

const LeadershipRoles = () => {
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
          {leadershipRoles.map((role, index) => (
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
                      backgroundColor: `${role.color}15`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mr: 2,
                      flexShrink: 0,
                      '& svg': {
                        fontSize: 24,
                        color: role.color,
                      },
                    }}
                  >
                    {role.icon}
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" gutterBottom fontWeight={600}>
                      {role.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" gutterBottom>
                      {role.organization}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {role.period}
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

export default LeadershipRoles; 