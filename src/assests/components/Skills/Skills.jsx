import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import './Skills.css';
import Aos from 'aos';
import 'aos/dist/aos.css';


export const Skills = () => {

    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, []);

    return (
        <div className="skillsContainer" id="skills" data-aos="fade-right">
            <h1 class="skillsHeading">What I Am Good At &nbsp;&nbsp;?</h1>
            <div className="techs">
                <Grid container>
                    <Grid item xs={12} sm={4} md={2} className="skillItem">
                        <i className="fab html fa-html5"></i>
                        <p>HTML 5</p>
                    </Grid>
                    <Grid item xs={12} sm={4} md={2} className="skillItem">
                        <i className="fab css fa-css3"></i>
                        <p>CSS 3</p>
                    </Grid>
                    <Grid item xs={12} sm={4} md={2} className="skillItem">
                        <i className="fab bootstrap fa-bootstrap"></i>
                        <p>Bootstrap</p>
                    </Grid>
                    <Grid item xs={12} sm={4} md={2} className="skillItem">
                        <i className="fab javascript fa-js"></i>
                        <p>Javascript</p>
                    </Grid>
                    <Grid item xs={12} sm={4} md={2} className="skillItem">
                        <i className="fab react fa-react"></i>
                        <p>React</p>
                    </Grid>
                    <Grid item xs={12} sm={4} md={2} className="skillItem">
                        <i className="fab typescript fa-react"></i>
                        <p>Typescript</p>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}