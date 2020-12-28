import React from 'react';
import './Services.css';
import { Grid } from '@material-ui/core';
import WebImage from '../../images/ServicesImages/web.svg';
import ReactImage from '../../images/ServicesImages/react.svg';

export const Services = () => {
    return (
        <div className="servicesContainer">
            <h1>Services</h1>
            <Grid container>
                <Grid item xs={12} md={6}>
                    <div className="cards">
                        <li>
                            <img src={WebImage} alt="web"/>
                        </li>
                        <p>Web Development</p>
                    </div>
                </Grid>
                <Grid item xs={12} md={6}>
                <div className="cards">
                        <li>
                            <img src={ReactImage} alt="react"/>
                        </li>
                        <p>React Development</p>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}