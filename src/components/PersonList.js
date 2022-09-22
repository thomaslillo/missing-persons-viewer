import * as React from 'react';
import { Box, Stack } from "@mui/material";
import { PersonView } from "./PersonView";

export const PersonList = ({ json }) => (
  <Box sx={{ maxHeight: 600, overflow: "scroll", bgcolor: "lightblue" }}>
    <Stack p={2} spacing={2}>
      {json.map((person) => (
        <PersonView person={person} />
      ))}
    </Stack>
  </Box>
);