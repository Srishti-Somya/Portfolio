import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'background.default',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
      }}
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.5,
          ease: [0.43, 0.13, 0.23, 0.96],
        }}
      >
        <Box
          sx={{
            width: 80,
            height: 80,
            borderRadius: '20px',
            background: 'linear-gradient(135deg, #2196f3 0%, #1976d2 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mb: 2,
            boxShadow: '0 8px 16px rgba(33, 150, 243, 0.2)',
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              top: -2,
              left: -2,
              right: -2,
              bottom: -2,
              background: 'linear-gradient(135deg, #2196f3 0%, #1976d2 100%)',
              borderRadius: '22px',
              zIndex: -1,
              opacity: 0.5,
              animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: 'white',
              fontWeight: 700,
              userSelect: 'none',
            }}
          >
            S
          </Typography>
        </Box>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.5,
          ease: [0.43, 0.13, 0.23, 0.96],
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: 'text.secondary',
            fontWeight: 500,
            userSelect: 'none',
          }}
        >
          Loading...
        </Typography>
      </motion.div>
      <Box sx={{ mt: 4, display: 'flex', gap: 1 }}>
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1, 0] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          >
            <Box
              sx={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                backgroundColor: 'primary.main',
                opacity: 0.7,
              }}
            />
          </motion.div>
        ))}
      </Box>
      <style>
        {`
          @keyframes pulse {
            0%, 100% {
              transform: scale(1);
              opacity: 0.5;
            }
            50% {
              transform: scale(1.1);
              opacity: 0.2;
            }
          }
        `}
      </style>
    </Box>
  );
};

export default LoadingScreen; 