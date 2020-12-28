import React from 'react';
import './Contact.css';
import { Grid } from '@material-ui/core';

export const Contact = () => {
    return (
        <div className="contactContainer">
            <Grid container>
                <Grid item xs={12}>Photo</Grid>
                <Grid item xs={12}>Contact</Grid>
                <Grid item xs={12}> Contac cards</Grid>
            </Grid>
        </div>
    );
}