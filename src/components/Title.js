import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function Title(){
    return (        
        <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
            NAME OF THE GRID
            </Typography>
        </Toolbar>
    );
}

export default Title;