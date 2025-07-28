import React from 'react';
import { Grid, GridProps } from '@mui/material';

interface CustomGridProps extends GridProps {
  item?: boolean;
  container?: boolean;
  spacing?: number;
  xs?: number | boolean;
  sm?: number | boolean;
  md?: number | boolean;
  lg?: number | boolean;
  xl?: number | boolean;
}

export const CustomGrid: React.FC<CustomGridProps> = (props) => {
  return <Grid {...props} />;
}; 