import * as React from 'react';
import { useState } from 'react'
// helmet gives access to head tags
import { Helmet } from 'react-helmet';
// material UI
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid'; // Grid version 
import Paper from '@mui/material/Paper';
// components
import Title from './components/Title';
import Menu from './components/Menu';
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
            <Grid xs={12}>
              <Title/>
            </Grid>
            <Grid xs={2}>
                <h1>xs=2</h1>
                <Menu/>
            </Grid>
            <Grid xs={5} sx={{ bgcolor: 'secondary.main' }}>
                <h1>xs=6</h1>
            </Grid>
            <Grid xs={5}>
                <h1>xs=6</h1>
            </Grid>
        </Grid>
      </div>

    </div>
  );
}

export default App;
