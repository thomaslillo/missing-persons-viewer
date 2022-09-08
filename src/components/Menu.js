import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

function Menu(props) {

    return (
        <div className="menu">
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
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
        </div>
    );

}

export default Menu;