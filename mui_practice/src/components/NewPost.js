import { Edit } from '@mui/icons-material';
import { Box, Fab } from '@mui/material';
import React from 'react'

const NewPost = () => {

  return (
    <Box position="fixed" bottom={10} sx={{ left: { xs: 200, sm: 55 } }} >
      <Fab color="primary" aria-label="add">
        <Edit />
      </Fab>
    </Box>
  );
}

export default NewPost
