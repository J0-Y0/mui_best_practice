import {
  Box,
  FormControlLabel,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import React from "react";
import { Bookmark, Home, LocalActivity, ModeNight, PostAdd, RssFeed, Settings } from "@mui/icons-material";
export default function Sidebar({ flex, setMode, mode }) {
  return (
    <Box sx={{ p: 2, display: { xs: "none", sm: "block" } }} flex={flex}>
      <Box position={"fixed"}>
        <List>
          <ListItem disablePadding>
            <ListItemButton href="#">
              <ListItemIcon>
                <Home />
                onchange
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton href="#">
              <ListItemIcon>
                <PostAdd />{" "}
              </ListItemIcon>
              <ListItemText primary="My posts" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton href="#">
              <ListItemIcon>
                <Bookmark />
              </ListItemIcon>
              <ListItemText primary="Saved Posts" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton href="#">
              <ListItemIcon>
                {" "}
                <RssFeed />{" "}
              </ListItemIcon>
              <ListItemText primary="Connection" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton href="#">
              <ListItemIcon>
                <Settings />{" "}
              </ListItemIcon>
              <ListItemText primary="Setting" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton href="#">
              <ListItemIcon>
                <LocalActivity />{" "}
              </ListItemIcon>
              <ListItemText primary="Active log" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ px: 0 }}>
            <ListItemButton href="#">
              <Switch
                checked={mode === "dark"}
                onChange={(e) => setMode(mode==='dark'?'light':"dark")}
                inputProps={{ "aria-label": "controlled" }}
              />
              <ListItemText primary="Theme" />
            </ListItemButton>
          </ListItem>
        </List>{" "}
      </Box>
    </Box>
  );
}
