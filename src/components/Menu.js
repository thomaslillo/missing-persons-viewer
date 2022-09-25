import * as React from 'react';
import { List, Box, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';

function Menu(props) {

    return (    
        <Box sx={{color: 'info.main', m:1}} >            
            <Typography variant='h4' align="center" sx={{p:1}}>
                Menu
            </Typography>
            
            <Typography variant='h6' align="left" color="black" sx={{p:1}}>
                These are the details of the project. 
            </Typography>
        
        </Box>
    );

}

export default Menu;