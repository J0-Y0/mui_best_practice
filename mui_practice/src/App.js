import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import Box from '@mui/material/Box';
import { Stack } from "@mui/material";
function App() {

  return (
    <Box >
      <Navbar/>
      <Stack direction="row" spacing={1} justifyContent="space-between">
        <Sidebar flex={1} ></Sidebar>
        <Feed flex={4}></Feed>
        <Rightbar flex={2}></Rightbar>
      </Stack>
    </Box>
  );
}

export default App;
