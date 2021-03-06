import React, { useEffect } from 'react';
import './Services.css';
import { Grid } from '@material-ui/core';
import WebImage from '../../images/ServicesImages/web.svg';
import ReactImage from '../../images/ServicesImages/react.svg';
import Aos from 'aos';
import 'aos/dist/aos.css';

export const Services = () => {

    useEffect(() => {
        Aos.init({ duration: 7000 });
    }, []);

    return (
        <div className="servicesContainer" id="services" data-aos="zoom-in">
            <h1 className="serviceHeading">Services I Provide</h1>
            <Grid container>
                <Grid item xs={12} md={6} className="serviceGrid">
                    <div className="cards">
                        <li>
                            <img src={WebImage} alt="web" />
                            <p>Web Development</p>
                        </li>
                    </div>
                </Grid>
                <Grid item xs={12} md={6} className="serviceGrid">
                    <div className="cards">
                        <li>
                            <img src={ReactImage} alt="react" />
                            <p>React Development</p>
                        </li>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}