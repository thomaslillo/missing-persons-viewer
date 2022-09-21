import { Box, Stack } from "@mui/material";
import { PersonView } from "./PersonView";

export const PersonList = ({ json }) => (
  <Box sx={{ maxHeight: 500, overflow: "scroll", bgcolor: "gray" }}>
    <Stack p={2} spacing={2}>
      {json.map((person) => (
        <PersonView person={person} />
      ))}
    </Stack>
  </Box>
);