import {React, setState } from 'react';
import { Box, Stack, Grid } from "@mui/material";
import { PersonView } from "./PersonView";
import { FilterButton } from "./FilterButton";


function MissingSection(props) {

    const fullList = JSON.parse(props.json);
    var filteredList = fullList.filter( fullList => fullList.Name.includes("John"));

    return (
        <Box sx={{ p: 2 }}>
            <Stack spacing={2} p={2}>        
            {filteredList.map((person) => (
                <PersonView person={person} />
            ))}                
            </Stack>
        </Box>
    );
}

 
function UnidentifiedSection(props) {

    const fullList = JSON.parse(props.json);
    var filteredList = fullList.filter( fullList => fullList.Name.includes("John"));

    return (
        <Box sx={{ p: 2 }}>
            <Stack spacing={2} p={2}>        
            {filteredList.map((person) => (
                <PersonView person={person} />
            ))}                
            </Stack>
        </Box>
    );
}

export const PersonList = ({ json }) => (
  <Box sx={{ maxHeight: 600, overflow: "scroll", bgcolor: "lightblue" }}>
    <Stack p={2} spacing={2}>
      {json.map((person) => (
        <PersonView person={person} />
        //<FilterButton person={person} />
      ))}      
    </Stack>
  </Box>
);