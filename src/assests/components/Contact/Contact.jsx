import React from 'react';
import './Contact.css';
import { Grid } from '@material-ui/core';
import Profile from '../../images/ContactImages/Profile.jpg';

export const Contact = () => {
    return (
        <div className="contactContainer">
            <Grid container>
                <Grid item xs={12}>
                    <img src={Profile} alt="Profile" />
                </Grid>
                <Grid item xs={12}>
                    <h3>Contact</h3>
                </Grid>
                <Grid item xs={12} md={4}>
                    <div className="contactCard">
                        <div className="contactIcon">
                            <i className="fas fa-envelope"></i>
                        </div>
                        <div className="contactEmail">
                            <span>Email</span>
                        </div>
                        <div className="contactLink">
                            <span>as765722@gmail.com</span>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} md={4}>
                    <div className="contactCard">
                        <div className="contactIcon">
                            <i className="fas fa-envelope"></i>
                        </div>
                        <div className="contactEmail">
                            <span>Email</span>
                        </div>
                        <div className="contactLink">
                            <span>as765722@gmail.com</span>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} md={4}>Phone</Grid>
            </Grid>
        </div>
    );
}