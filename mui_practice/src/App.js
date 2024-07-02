import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import Box from '@mui/material/Box';
import { Stack, ThemeProvider, createTheme } from "@mui/material";
import NewPost from "./components/NewPost";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("dark");

  const theme = createTheme({
    palette: {
      mode:mode,
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundColor: theme.palette.background.default,
          color: theme.palette.text.primary,
        }}
      >
        <Navbar />
        <Stack
          direction="row"
          spacing={1}
          justifyContent="space-between"
          flexGrow={true}
        >
          <Sidebar mode={mode} setMode={setMode} flex={1}></Sidebar>
          <Feed flex={4}></Feed>
          <Rightbar flex={2}></Rightbar>
        </Stack>
        <NewPost></NewPost>
      </Box>
    </ThemeProvider>
  );
}

export default App;
