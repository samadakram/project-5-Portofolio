import React from 'react';
import { Grid } from '@material-ui/core';
import './Skills.css';

export const Skills = () => {
    return (
        <div className="skillsContainer">
            <h1>Skills</h1>
            <div>
                <Grid container>
                    <Grid item xs={12} md={2}>
                        <i className="fab html fa-html5"></i>
                        <p>HTML 5</p>
                    </Grid>
                    <Grid item xs={12} md={2}>
                        <i className="fab css fa-css3"></i>
                        <p>CSS 3</p>
                    </Grid>
                    <Grid item xs={12} md={2}>
                        <i className="fab bootstrap fa-bootstrap"></i>
                        <p>Bootstrap</p>
                    </Grid>
                    <Grid item xs={12} md={2}>
                        <i className="fab javascript fa-js"></i>
                        <p>Javascript</p>
                    </Grid>
                    <Grid item xs={12} md={2}>
                        <i className="fab react fa-react"></i>
                        <p>React</p>
                    </Grid>
                    <Grid item xs={12} md={2}>
                        <i className="fab typescript fa-react"></i>
                        <p>Typescript</p>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}