import React from 'react';
import { Card, Typography, Divider, Chip } from '@mui/material';

export function PersonHeader(props) {
    
    const person = props.person;

    return (
        <Card sx={{ p: 2, bgcolor: "info.main" }}>
            <Typography variant="h6" color="white" align="left">{person.Name}</Typography>                        
            <Divider sx={{m:1}} /> 
            <Typography variant="p" color="white">{person.CaseDesc}</Typography>
        </Card>
    )
}