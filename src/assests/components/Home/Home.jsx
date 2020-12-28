import React from 'react';
import { Grid } from '@material-ui/core';
import './Home.css';
import HomeImage from '../../../assests/images/HomeImages/selected3.svg';

export const Home = () => {
    return (
        <div className="homeContainer">
            <Grid container>
                <Grid className="homeGrid textGrid" item xs={12} md={6}>
                    <h4 className="welcome">WELCOME TO MY WORLD</h4>
                    <h1 className="name">Hi, I'm Abdul Samad</h1>
                    <h1 className="country">from Pakistan</h1>
                    <button className="button">Contact me</button>
                </Grid>
                <Grid className="homeGrid imageGrid" item xs={12} md={6}>
                    <img className="workingImage" src={HomeImage} alt="Working" />
                </Grid>
            </Grid>
        </div>
    );
}