import * as React from 'react';
import { Box, Divider, Typography, Button } from '@mui/material';

function Menu(props) {

    return (    
        <Box sx={{color: 'info.dark', m:1}} >            
            <Typography variant='h4' align="center">
                Menu
            </Typography>
            
            <Divider sx={{p:1}} />

            <Typography variant='h6' align="left" color="black" sx={{p:1}}>
                Help us try to find missing persons by matching them to 
                the unidentified remains.             
            </Typography>

            <Typography variant='h6' align="left" color="black" sx={{p:1}}>
                You can filter the list of 
                unidentified remains by clicking on the red button 
                within each Missing Persons entry. 
            </Typography>

            <Divider sx={{p:1}} />

            <Typography variant='h6' align="left" color="black" sx={{p:1}}>
                Found a match? Reach out to the authorities.
            </Typography>            

            <Typography variant='h6' align="left" color="error" sx={{p:1}}>
                Don't call 911 if it's not an emergency!
            </Typography>                          

            <a href="https://www.rcmp-grc.gc.ca/cont/index-eng.htm">
                <Button variant="contained" color="secondary">RCMP Contact Page</Button>
            </a>
                     
             <br />
             <br />       
            <Typography variant='body' align="left" color="black">
                This project is not affiliated with the RCMP.
            </Typography>
        </Box>
    );

}

export default Menu;