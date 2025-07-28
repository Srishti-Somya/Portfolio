import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Chip,
  Stack,
} from '@mui/material';
import { motion } from 'framer-motion';
import { CustomGrid } from './CustomGrid';

const experiences = [
  {
    title: 'Software Engineer Intern',
    company: 'TeamLease Regtech Pvt. Ltd.',
    period: 'June 2025 - present',
    location: 'Remote',
    description: [
      'Working on implementation for change data capture in the existing database of SaaS products using Kafka and Debezium.',
    ],
  },
  {
    title: 'AI/ML Summer Research Intern',
    company: 'Maulana Azad National Institute of Technology, Bhopal',
    period: 'June - July 2024',
    location: 'Bhopal',
    description: [
      'Hands on implementation of supervised and unsupervised machine learning algorithms.',
      'Developed a predictive model using Linear Regression, Decision Trees, and Random Forest, achieving about 85% accuracy.',
    ],
  },
];

const Experience = () => {
  return (
    <Box>
      <CustomGrid container spacing={4}>
        {experiences.map((exp, index) => (
          <CustomGrid item xs={12} md={6} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                elevation={3}
                sx={{
                  height: '100%',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                  },
                }}
              >
                <CardContent>
                  <Typography variant="h5" gutterBottom fontWeight={600} color="primary">
                    {exp.title}
                  </Typography>
                  <Typography variant="h6" gutterBottom color="text.secondary">
                    {exp.company}
                  </Typography>
                  <Stack direction="row" spacing={2} mb={2}>
                    <Chip
                      label={exp.period}
                      size="small"
                      sx={{
                        backgroundColor: 'primary.main',
                        color: 'white',
                        fontWeight: 500,
                      }}
                    />
                    <Chip
                      label={exp.location}
                      size="small"
                      variant="outlined"
                      sx={{ fontWeight: 500 }}
                    />
                  </Stack>
                  <Box component="ul" sx={{ pl: 2, mt: 2 }}>
                    {exp.description.map((item, i) => (
                      <Typography
                        component="li"
                        variant="body1"
                        key={i}
                        sx={{
                          mb: 1,
                          color: 'text.secondary',
                          '&::marker': {
                            color: 'primary.main',
                          },
                        }}
                      >
                        {item}
                      </Typography>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </CustomGrid>
        ))}
      </CustomGrid>
    </Box>
  );
};

export default Experience; 