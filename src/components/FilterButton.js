import { Button, Grid } from "@mui/material";
import * as React from 'react';

export const FilterButton = ({ person }) => (
    <Grid container sx={{p:2}} justifyContent="center">
        <Button variant="contained" size="small" sx={{ bgcolor: "info.main", color: "white", align:"center"}}>Filter Remains By This Person's Details</Button>
    </Grid>
);