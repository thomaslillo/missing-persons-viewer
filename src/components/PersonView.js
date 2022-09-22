import { Card, Grid, Box, Typography } from "@mui/material";
import * as React from 'react';

//what is the difference between this and a functional component?
export const PersonView = ({ person }) => (    
    
    <Card sx={{ p: 2 }}>  
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
    </Card>
  );


export default PersonView;