import { Box } from '@mui/material';
import React from 'react'

const Rightbar = ({ flex }) => {
  return (
    <Box
      sx={{ bgcolor: "blue", p: 2, display: { xs: "none", sm: "block" } }}
      flex={flex}
    >
      
    </Box>
  );
};

export default Rightbar
