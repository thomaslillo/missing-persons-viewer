import * as React from 'react';
import {AppBar, Box, Toolbar, Typography} from '@mui/material';

function Title(){
    return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                RCMP Missing Persons Database Search Tool
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>
      );
}

export default Title;

