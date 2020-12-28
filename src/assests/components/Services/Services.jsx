import React from 'react';
import { Grid } from '@material-ui/core';

export const Services = () => {
    return (
        <div>
            <h1>Services</h1>
            <Grid container>
                <Grid item xs={12} md={6}>Card 1</Grid>
                <Grid item xs={12} md={6}>Card 2</Grid>
            </Grid>
        </div>
    );
}