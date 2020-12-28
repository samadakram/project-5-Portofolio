import React from 'react';
import { Grid } from '@material-ui/core';
import './Home.css';

export const Home = () => {
    return (
        <div>
            <Grid container>
                <Grid className="homeGrid" item md={6}>
                    <h4 className="welcome">WELCOME TO MY WORLD</h4>
                    <h1 className="name">Hi, I'm Abdul Samad</h1>
                    <h1 className="country">from Pakistan</h1>
                </Grid>
                <Grid className="homeGrid" item md={6}>Image</Grid>
            </Grid>
        </div>
    );
}