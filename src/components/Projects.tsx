import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Chip,
  Stack,
  Link,
} from '@mui/material';
import { GitHub as GitHubIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { CustomGrid } from './CustomGrid';

const projects = [
  {
    title: 'RustDB - Lightweight In-Memory Database',
    period: 'Feb - Apr 2025',
    description: 'Designing a simple, fast, in-memory key-value store in Rust. Supports JSON-based structured data and implementing a custom CLI commands to perform CRUD operations.',
    technologies: ['Rust', 'Serde', 'JSON', 'CLI'],
    github: 'https://github.com/Srishti-Somya/rust_sql_parser',
  },
  {
    title: 'AI Data Curator and Analyst',
    period: 'Aug - Nov 2024',
    description: 'Engineered a web scraping pipeline using selenium, extracting about 10K data points from multiple sources. Transforms unstructured data from the web and converts them into a structured format. Implemented data cleaning with entity recognition to improve analysis accuracy by 30%.',
    technologies: ['Selenium', 'BeautifulSoup', 'SpaCy-transformer', 'FastAPI'],
    github: 'https://github.com/Srishti-Somya/Ai-data-curator-and-analyst',
  },
  {
    title: 'Language Translator',
    period: 'Dec 2023',
    description: 'Developed a speech-to-text and text-to-text translator supporting 50+ languages. Integrated with speech recognition and audio output, implemented translation using google-translate api.',
    technologies: ['Tkinter', 'Google-Translate-API'],
    github: 'https://github.com/Srishti-Somya/Language_Translator',
  },
];

const Projects = () => {
  return (
    <Box>
      <CustomGrid container spacing={4}>
        {projects.map((project, index) => (
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
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                  },
                }}
              >
                <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                    <Typography variant="h5" component="h3" gutterBottom fontWeight={600}>
                      {project.title}
                    </Typography>
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: 'text.secondary',
                        '&:hover': {
                          color: 'primary.main',
                        },
                      }}
                    >
                      <GitHubIcon />
                    </Link>
                  </Box>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    {project.period}
                  </Typography>
                  <Typography variant="body1" paragraph sx={{ flex: 1 }}>
                    {project.description}
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap" gap={1} sx={{ mt: 'auto' }}>
                    {project.technologies.map((tech, i) => (
                      <Chip
                        key={i}
                        label={tech}
                        size="small"
                        sx={{
                          backgroundColor: 'primary.light',
                          color: 'white',
                          fontWeight: 500,
                          '&:hover': {
                            backgroundColor: 'primary.main',
                            transform: 'translateY(-2px)',
                          },
                          transition: 'all 0.2s',
                        }}
                      />
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </motion.div>
          </CustomGrid>
        ))}
      </CustomGrid>
    </Box>
  );
};

export default Projects; 