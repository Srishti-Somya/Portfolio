import React, { ReactNode } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';

interface SectionContainerProps {
  children: ReactNode;
  title: string;
  id: string;
  lightBg?: boolean;
  fullWidth?: boolean;
  subtitle?: string;
}

const SectionContainer: React.FC<SectionContainerProps> = ({
  children,
  title,
  id,
  lightBg = false,
  fullWidth = false,
  subtitle,
}) => {
  return (
    <Box
      id={id}
      component="section"
      sx={{
        py: { xs: 6, md: 8 },
        backgroundColor: lightBg ? 'background.default' : 'background.paper',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Pattern */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.03,
          backgroundImage: `radial-gradient(circle at 1px 1px, ${lightBg ? '#1a2027' : '#2196f3'} 1px, transparent 0)`,
          backgroundSize: '40px 40px',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth={fullWidth ? false : 'lg'}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h2"
            sx={{
              mb: subtitle ? 2 : 6,
              textAlign: 'center',
              fontWeight: 600,
              background: 'linear-gradient(45deg, #2196f3, #1976d2)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              position: 'relative',
              zIndex: 1,
            }}
          >
            {title}
          </Typography>

          {subtitle && (
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{
                mb: 6,
                textAlign: 'center',
                maxWidth: '800px',
                mx: 'auto',
                lineHeight: 1.6,
                position: 'relative',
                zIndex: 1,
              }}
            >
              {subtitle}
            </Typography>
          )}

          <Box sx={{ position: 'relative', zIndex: 1 }}>
            {children}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default SectionContainer; 