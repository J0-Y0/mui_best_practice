import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";


import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      sx={{ mt: 5 }}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      sx={{ mt: 5 }}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            MUI
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}

// import {
//   AppBar,
//   Box,
//   Typography,
//   InputBase,
//   Button,
//   Badge,
//   Avatar,
//   Menu,
//   MenuItem,
// } from "@mui/material";
// import { AccountCircle, CircleNotifications, Mail } from "@mui/icons-material";
// import React, { useState } from "react";
// import GroupWorkIcon from "@mui/icons-material/GroupWork";
// import styled from "@emotion/styled";
// const Navbar = () => {
//   const [open,setOpen] = useState(false)
//   const StyledAppBar = styled(AppBar)({
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     fontSize: "larger",
//   });

//   const LogoSection = styled(Box)({
//     display: "flex",
//     flexDirection: "row",
//   });
//   const StyledInputBase = styled(InputBase)(({ theme }) => ({
//     borderRadius: theme.shape.borderRadius,
//     maxWidth: "50%",
//     padding: "0 5px",
//     backgroundColor: "lightBlue",
//     "&:hover": {
//       backgroundColor: "white",
//     },
//   }));
//   const StyledNavCTAlg = styled(Box)(({ theme }) => ({
//     display: "none",
//     [theme.breakpoints.up("sm")]: { display: "flex", alignItems: "center" },
//   }));
//   const StyledNavCTAsm = styled(Box)(({ theme }) => ({
//     [theme.breakpoints.up("sm")]: { display: "none" },

//     display: "flex",
//     alignItems: "center",
//   }));
//   return (
//     <StyledAppBar sx={{ p: 1 }} position="sticky">
//       <LogoSection>
//         <GroupWorkIcon />
//         <Typography
//           sx={{
//             fontWeight: "bold",
//             display: { xs: "none", sm: "block" },
//           }}
//         >
//           LOGO
//         </Typography>
//       </LogoSection>

//       <StyledInputBase placeholder="Search" autoFocus="true" fullWidth="true" />
//       <StyledNavCTAlg>
//         <Badge badgeContent={4} color="error">
//           <Mail />
//         </Badge>
//         <Badge badgeContent={4} color="error" sx={{ mx: 1 }}>
//           <CircleNotifications />
//         </Badge>
//         <Avatar
//           sx={{ width: 30, height: 30, mx: 2 }}
//           alt="Yosef"
//           src="/static/images/avatar/1.jpg"
//           onClick={(e) => setOpen(true)}
//         />
//       </StyledNavCTAlg>

//       <StyledNavCTAsm>
//         <Avatar
//           sx={{ width: 30, height: 30 }}
//           alt="Yosef"
//           src="/static/images/avatar/1.jpg"
//           onClick={(e) => setOpen(true)}
//         />
//         <Typography>Yosef</Typography>
//         <Menu
//           sx={{ mt: 4 }}
//           id="basic-menu"
//           open={open}
//           onClose={(e) => setOpen(false)}
//           MenuListProps={{
//             "aria-labelledby": "basic-button",
//           }}
//           anchorOrigin={{
//             vertical: "top",
//             horizontal: "right",
//           }}
//           transformOrigin={{
//             vertical: "top",
//             horizontal: "left",
//           }}
//         >
//           <Box sx={{display:"flex"}}>
//             <MenuItem>
//               <Badge badgeContent={4} color="error">
//                 <Mail />
//               </Badge>
//             </MenuItem>
//             <MenuItem>
//               <Badge badgeContent={4} color="error">
//                 <Mail />
//               </Badge>
//             </MenuItem>{" "}

//           </Box>
//           <MenuItem>Profile</MenuItem>
//           <MenuItem>My account</MenuItem>
//           <MenuItem>Logout</MenuItem>
//         </Menu>
//       </StyledNavCTAsm>
//     </StyledAppBar>
//   );
// };

// export default Navbar;
