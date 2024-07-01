
import {
  AppBar,
  Box,
  Typography,
  InputBase,
  Button,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import { AccountCircle, CircleNotifications, Mail } from "@mui/icons-material";
import React, { useState } from "react";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import styled from "@emotion/styled";
const Navbar = () => {
  const [open,setOpen] = useState(false)
  const StyledAppBar = styled(AppBar)({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "larger",
  
  });

  const LogoSection = styled(Box)({
    display: "flex",
    flexDirection: "row",
  });
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    borderRadius: theme.shape.borderRadius,
    maxWidth: "50%",
    padding: "2px 5px",
    backgroundColor: "lightBlue",
    "&:hover": {
      backgroundColor: "white",
    },
  }));
  const StyledNavCTAlg = styled(Box)(({ theme }) => ({
    display: "none",
    [theme.breakpoints.up("sm")]: { display: "flex", alignItems: "center" },
  }));
  const StyledNavCTAsm = styled(Box)(({ theme }) => ({
    [theme.breakpoints.up("sm")]: { display: "none" },

    display: "flex",
    alignItems: "center",
  }));
  return (
    <StyledAppBar sx={{ p: 2 }} position="sticky">
      <LogoSection>
        <GroupWorkIcon />
        <Typography 
          fontWeight={700}
          sx={{
            display: { xs: "none", sm: "block" },
          }}
        >
          LOGO
        </Typography>
      </LogoSection>

      <StyledInputBase placeholder="Search" autoFocus="true" fullWidth="true" />
      <StyledNavCTAlg>
        <Badge badgeContent={4} color="error">
          <Mail />
        </Badge>
        <Badge badgeContent={4} color="error" sx={{ mx: 1 }}>
          <CircleNotifications />
        </Badge>
        <Avatar
          sx={{ width: 30, height: 30, mx: 2 }}
          alt="Yosef"
          src="/static/images/avatar/1.jpg"
          onClick={(e) => setOpen(true)}
        />
      </StyledNavCTAlg>

      <StyledNavCTAsm>
        <Avatar
          sx={{ width: 30, height: 30 }}
          alt="Yosef"
          src="/static/images/avatar/1.jpg"
          onClick={(e) => setOpen(true)}
        />
        <Typography>Yosef</Typography>
        <Menu
          sx={{ mt: 4 }}
          id="basic-menu"
          open={open}
          onClose={(e) => setOpen(false)}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <MenuItem>
              <Badge badgeContent={4} color="error">
                <Mail />
              </Badge>
            </MenuItem>
            <MenuItem>
              <Badge badgeContent={4} color="error">
                <Mail />
              </Badge>
            </MenuItem>{" "}
          </Box>
          <MenuItem>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>
      </StyledNavCTAsm>
    </StyledAppBar>
  );
};

export default Navbar;
