import { Box } from '@mui/material';
import React from 'react'

const Rightbar = ({ flex }) => {
  return (
    <Box
      sx={{ bgcolor: "yellow", p: 2, display: { xs: "none", md: "block" } }}
      flex={flex}
    >
      <Box position='fixed' > hello</Box>
    </Box>
  );
};

export default Rightbar
