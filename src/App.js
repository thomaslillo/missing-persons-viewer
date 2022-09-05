import * as React from 'react';
import { useState } from 'react'
// helmet gives access to head tags
import { Helmet } from 'react-helmet';
// material UI
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid'; // Grid version 
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
// components
//import Menu from './components/Menu';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>RCMP Missing Persons Database Tool</title>
        <meta name="description" content="This app will allow you to compare Missing Persons records to Unidentified Remains records from the RCMP Database containing both." />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
      </Helmet>
      
      <div className="main-grid">
        <Grid container spacing={2}>
            <Grid xs={8}>
                <h1>xs=8</h1>
            </Grid>
            <Grid xs={4}>
                <h1>xs=4</h1>
            </Grid>
        </Grid>
      </div>

    </div>
  );
}

export default App;
