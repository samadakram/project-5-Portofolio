import React from 'react';
import { Grid } from '@material-ui/core';
import WebImage from '../../images/ServicesImages/web.svg'; 

export const Services = () => {
    return (
        <div>
            <h1>Services</h1>
            <Grid container>
                <Grid item xs={12} md={6}>
                    <div>
                        <li>
                            <img src={WebImage} alt="web"/>
                        </li>
                        <p>Web Development</p>
                    </div>
                </Grid>
                <Grid item xs={12} md={6}>Card 2</Grid>
            </Grid>
        </div>
    );
}