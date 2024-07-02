import { Box } from "@mui/material";
import Posts from "./Posts";

export default function Feed({ flex }) {
  return (
    <Box flex={flex}>
      <Posts />
      <Posts />
      <Posts />
      <Posts />
      <Posts />
    </Box>
  );
}
