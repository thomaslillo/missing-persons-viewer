import * as React from 'react';
import { List, Box, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';

function Menu(props) {

    return (
    <Box>            
        <Typography variant='h4' align="center">
            Menu
        </Typography>
        <List>
            {['Search 1', 'Search 2', 'Search 3', 'Search 4', 'Search 5'].map((text, index) => (
                <ListItem key={text} disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            {index % 2 === 0 ? 'X:' : 'Y:'}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    </Box>
    );

}

export default Menu;