import * as React from 'react';
import { useState } from 'react'
// helmet gives access to head tags
import { Helmet } from 'react-helmet';
// material UI
import { Grid, Stack, Paper, styled } from '@mui/material';
// components
import Title from './components/Title';
import Menu from './components/Menu';
import PersonList from './components/PersonList';
import { missing_persons } from './data/missing_persons';
import { unidentified_remains } from './data/unidentified_remains';

function App() {
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
            <h1>xs=2</h1>
            <Menu />
          </Grid>
          <Grid xs={5} sx={{ bgcolor: "secondary.main" }}>
            <PersonList json={missing_persons} />
          </Grid>
          <Grid xs={5}>
            <PersonList json={unidentified_remains} />
          </Grid>
        </Grid>
      </Stack>


    </div>
  );
}

export default App;
