import { Box } from '@mui/material'
import React from 'react'

export default function Sidebar({ flex }) {
  return (
    <Box sx={{ bgcolor: "green" ,p:2 ,display:{xs:'none',sm:'block'} }} flex={flex}>
     
      Sidebar
    </Box>
  );
}
