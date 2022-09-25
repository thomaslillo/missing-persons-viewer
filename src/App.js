import * as React from 'react';
//import { useState } from 'react'
// helmet gives access to head tags
import { Helmet } from 'react-helmet';
import { Grid, Stack, Typography, Card, Button, Box } from '@mui/material';
import Title from './components/Title';
import Menu from './components/Menu';
//import { PersonList } from './components/PersonList';
import { MissingPersonsSection } from './components/MissingPersonsSection';
import { PersonHeader } from './components/PersonHeader';

// data
import missing_persons from './data/missing_persons.json';
//import unidentified_remains from './data/unidentified_persons.json';

function App() {  

  /*
  // handle the unidentified remains list
  const [unidentifiedList, setUnidentified] = useState(unidentified_remains);

  function filterRemainsByName(name) {
      var filteredList = unidentified_remains.filter( remain => remain.MatchedNames.includes(name));
      setUnidentified(filteredList);
  }
  */


  return (
    <div className="App">

      <Helmet>
        <title>RCMP Missing Persons Database Tool</title>
        <meta name="description" content="This app will allow you to compare Missing Persons records to Unidentified Remains records from the RCMP Database containing both." />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
      </Helmet>    

      <Stack spacing={3} className="main-grid">        
        
        <Title />
        
        <Grid container spacing={2}>
          
          <Grid xs={2}>
            <Menu />
          </Grid>
          

          { /*missing persons section*/ }                    
          <Grid xs={5}>
            
            <Typography variant='h4' align="center" color="info.dark">
            Missing Persons
            </Typography>

            <Box sx={{ maxHeight: 600, overflow: "scroll", bgcolor: "lightgrey" }}>
 
              <Stack spacing={2} p={2}>        
    
                { missing_persons.map((entry) => (

                    <Card sx={{p:2}}>                      
                      
                      <Grid container>                        
                        <Grid item xs={12} sx={{p:2}}>
                          <PersonHeader person={entry} />
                        </Grid>
                      </Grid>

                      {/*
                      <MissingPersonsSection person={person} />
                      */}
                      
                      <Grid container sx={{p:2}} justifyContent="center">
                          <Button variant="contained" size="small" sx={{ bgcolor: "error.light", color: "white", align:"center"}}>Filter Remains By This Person's Details</Button>
                      </Grid>
                      

                    </Card>  

                )) }

              </Stack>
            </Box>

          </Grid>
          

          { /*Unidentified section*/ }
          <Grid xs={5}>
            <Typography variant='h4' align="center">
            Unidentified Remains
            </Typography>

            {/*<PersonList json={unidentifiedList} />*/}

          </Grid>

        </Grid>
      </Stack>

    </div>
  );
}

export default App;
