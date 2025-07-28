import React from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { motion } from 'framer-motion';
import { CustomGrid } from './CustomGrid';

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

const Education = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ position: 'relative' }}>
      <Container maxWidth="md" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <CustomGrid container spacing={4} justifyContent="center">
            <CustomGrid item xs={12}>
              <motion.div variants={itemVariants}>
                <Paper
                  elevation={3}
                  sx={{
                    p: { xs: 2, sm: 3, md: 4 },
                    height: '100%',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    '&:hover': {
                      transform: isMobile ? 'none' : 'translateY(-4px)',
                      boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                    },
                    maxWidth: '800px',
                    margin: '0 auto',
                    borderRadius: { xs: '16px', sm: '20px' },
                  }}
                >
                  <List sx={{ p: 0 }}>
                    <ListItem sx={{ px: { xs: 1, sm: 2 }, flexDirection: 'column' }}>
                      <ListItemText
                        primary={
                          <Typography 
                            variant={isMobile ? "h6" : "h5"}
                            gutterBottom 
                            sx={{
                              fontWeight: 600,
                              color: 'primary.main',
                              textAlign: 'center',
                              mb: { xs: 1, sm: 2 },
                              fontSize: {
                                xs: '1.25rem',
                                sm: '1.5rem',
                                md: '1.75rem',
                              },
                            }}
                          >
                            Jaypee University Of Engineering and Technology, Guna
                          </Typography>
                        }
                        secondary={
                          <Box sx={{ textAlign: 'center' }}>
                            <Typography 
                              variant="body1" 
                              color="text.primary" 
                              gutterBottom
                              sx={{
                                fontSize: {
                                  xs: '0.9rem',
                                  sm: '1rem',
                                  md: '1.1rem',
                                },
                              }}
                            >
                              B.Tech - Computer Science and Engineering
                            </Typography>
                            <Typography 
                              variant="body2" 
                              color="text.secondary"
                              sx={{
                                fontSize: {
                                  xs: '0.8rem',
                                  sm: '0.875rem',
                                  md: '0.95rem',
                                },
                              }}
                            >
                              2022 - 2026 | CGPA: 9.4(upto 6th sem)
                            </Typography>
                          </Box>
                        }
                      />
                    </ListItem>
                    <Divider sx={{ my: { xs: 2, sm: 3 } }} />
                    <ListItem sx={{ px: { xs: 1, sm: 2 }, flexDirection: 'column' }}>
                      <ListItemText
                        primary={
                          <Typography 
                            variant={isMobile ? "h6" : "h5"}
                            gutterBottom 
                            sx={{
                              fontWeight: 600,
                              color: 'primary.main',
                              textAlign: 'center',
                              mb: { xs: 1, sm: 2 },
                              fontSize: {
                                xs: '1.25rem',
                                sm: '1.5rem',
                                md: '1.75rem',
                              },
                            }}
                          >
                            Sanskar Public School, Gwalior
                          </Typography>
                        }
                        secondary={
                          <Box sx={{ textAlign: 'center' }}>
                            <Typography 
                              variant="body1" 
                              color="text.primary" 
                              gutterBottom
                              sx={{
                                fontSize: {
                                  xs: '0.9rem',
                                  sm: '1rem',
                                  md: '1.1rem',
                                },
                              }}
                            >
                              Class 12th
                            </Typography>
                            <Typography 
                              variant="body2" 
                              color="text.secondary"
                              sx={{
                                fontSize: {
                                  xs: '0.8rem',
                                  sm: '0.875rem',
                                  md: '0.95rem',
                                },
                              }}
                            >
                              2022 | Percentage: 88%
                            </Typography>
                          </Box>
                        }
                      />
                    </ListItem>
                    <Divider sx={{ my: { xs: 2, sm: 3 } }} />
                    <ListItem sx={{ px: { xs: 1, sm: 2 }, flexDirection: 'column' }}>
                      <ListItemText
                        primary={
                          <Typography 
                            variant={isMobile ? "h6" : "h5"}
                            gutterBottom 
                            sx={{
                              fontWeight: 600,
                              color: 'primary.main',
                              textAlign: 'center',
                              mb: { xs: 1, sm: 2 },
                              fontSize: {
                                xs: '1.25rem',
                                sm: '1.5rem',
                                md: '1.75rem',
                              },
                            }}
                          >
                            Delhi Public School, Gwalior
                          </Typography>
                        }
                        secondary={
                          <Box sx={{ textAlign: 'center' }}>
                            <Typography 
                              variant="body1" 
                              color="text.primary" 
                              gutterBottom
                              sx={{
                                fontSize: {
                                  xs: '0.9rem',
                                  sm: '1rem',
                                  md: '1.1rem',
                                },
                              }}
                            >
                              Class 10th
                            </Typography>
                            <Typography 
                              variant="body2" 
                              color="text.secondary"
                              sx={{
                                fontSize: {
                                  xs: '0.8rem',
                                  sm: '0.875rem',
                                  md: '0.95rem',
                                },
                              }}
                            >
                              2020 | Percentage: 92.4%
                            </Typography>
                          </Box>
                        }
                      />
                    </ListItem>
                  </List>
                </Paper>
              </motion.div>
            </CustomGrid>
          </CustomGrid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Education; 