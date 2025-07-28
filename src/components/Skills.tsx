import React from 'react';
import {
  Box,
  Typography,
  Paper,
  Chip,
  useTheme,
} from '@mui/material';
import {
  Code as CodeIcon,
  Build as BuildIcon,
  Psychology as PsychologyIcon,
  School as SchoolIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { CustomGrid } from './CustomGrid';

const skillCategories = [
  {
    title: 'Programming Languages & Tools',
    icon: <CodeIcon />,
    color: '#2196f3',
    skills: ['C/C++', 'Python', 'HTML+CSS', 'VSCode', 'Git', 'GitHub', 'Figma', 'Docker'],
    description: 'Core technologies and development tools I work with',
  },
  {
    title: 'Core Coursework',
    icon: <SchoolIcon />,
    color: '#ff9800',
    skills: ['Machine Learning', 'Object Operating Programming', 'Data Structures', 'Database', 'Computer Networks'],
    description: 'Academic foundations and technical knowledge',
  },
  {
    title: 'Technical Skills',
    icon: <BuildIcon />,
    color: '#4caf50',
    skills: ['Problem Solving', 'Algorithm Design', 'Database Management', 'Version Control', 'Web Development'],
    description: 'Technical competencies and professional skills',
  },
  {
    title: 'Soft Skills',
    icon: <PsychologyIcon />,
    color: '#f50057',
    skills: ['Team Management', 'Leadership', 'Community Building', 'Communication', 'Time Management'],
    description: 'Professional and interpersonal abilities',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

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

const Skills = () => {
  const theme = useTheme();

  return (
    <Box>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <CustomGrid container spacing={4}>
          {skillCategories.map((category, index) => (
            <CustomGrid item xs={12} md={6} key={index}>
              <motion.div variants={itemVariants}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    height: '100%',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                      '& .skill-icon-bg': {
                        transform: 'scale(1.2)',
                      },
                    },
                  }}
                >
                  {/* Background Icon */}
                  <Box
                    className="skill-icon-bg"
                    sx={{
                      position: 'absolute',
                      right: -20,
                      bottom: -20,
                      opacity: 0.05,
                      transform: 'scale(1)',
                      transition: 'transform 0.3s ease-in-out',
                      '& svg': {
                        fontSize: '180px',
                        color: category.color,
                      },
                    }}
                  >
                    {category.icon}
                  </Box>

                  {/* Content */}
                  <Box sx={{ position: 'relative', zIndex: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                      <Box
                        sx={{
                          width: 56,
                          height: 56,
                          borderRadius: '16px',
                          backgroundColor: `${category.color}15`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mr: 2,
                          flexShrink: 0,
                          transition: 'transform 0.2s',
                          '& svg': {
                            fontSize: 28,
                            color: category.color,
                          },
                        }}
                      >
                        {category.icon}
                      </Box>
                      <Box>
                        <Typography variant="h6" fontWeight={600} gutterBottom>
                          {category.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {category.description}
                        </Typography>
                      </Box>
                    </Box>

                    <Box
                      sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 1.5,
                        mt: 3,
                      }}
                    >
                      {category.skills.map((skill, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <Chip
                            label={skill}
                            sx={{
                              backgroundColor: `${category.color}10`,
                              color: category.color,
                              fontWeight: 500,
                              borderRadius: '10px',
                              px: 1.5,
                              py: 2.5,
                              '&:hover': {
                                backgroundColor: category.color,
                                color: 'white',
                                transform: 'translateY(-2px)',
                              },
                              transition: 'all 0.2s',
                            }}
                          />
                        </motion.div>
                      ))}
                    </Box>
                  </Box>
                </Paper>
              </motion.div>
            </CustomGrid>
          ))}
        </CustomGrid>
      </motion.div>
    </Box>
  );
};

export default Skills; 