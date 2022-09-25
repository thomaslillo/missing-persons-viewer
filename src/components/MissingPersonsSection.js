import { React } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { PersonHeader } from './PersonHeader';

export function MissingPersonsSection(person) {

    return (        
        
            <Grid container>        

                {Object.entries(person).map(([attrName, attrValue]) => [                              
                
                  <Grid item xs={3}>
                      <Typography sx={{ fontWeight: 'bold', textAlign:'right'}}>{attrName}:</Typography>
                  </Grid>,

                  <Grid item xs={9}>
                      <Box sx={{pl:1}}>
                      <Typography sx={{textAlign:'left'}} >{attrValue}</Typography>
                      </Box>            
                  </Grid>          

                ])}

            </Grid>                
    );
}