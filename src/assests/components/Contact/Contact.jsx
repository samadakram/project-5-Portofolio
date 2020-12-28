import React from 'react';
import './Contact.css';
import { Grid } from '@material-ui/core';
import Profile from '../../images/ContactImages/Profile.jpg';

export const Contact = () => {
    return (
        <div className="contactContainer">
            <Grid container>
                <Grid item xs={12}>
                    <img src={Profile} alt="Profile"/>
                </Grid>
                <Grid item xs={12}>Contact</Grid>
                <Grid item xs={12}> Contac cards</Grid>
            </Grid>
        </div>
    );
}