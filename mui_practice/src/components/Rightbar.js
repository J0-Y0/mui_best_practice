import { Avatar, AvatarGroup, Box, Typography } from '@mui/material';
import React from 'react'

const Rightbar = ({ flex }) => {
  return (
    <Box sx={{ p: 2, display: { xs: "none", md: "block" } }} flex={flex}>
      <Box position="fixed">
        <Typography color={"Grey"} fontWeight={500} component="h1" variant="h5">
          Online friends
        </Typography>
        <AvatarGroup max={7}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />

          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        </AvatarGroup>
      </Box>
    </Box>
  );
};

export default Rightbar
