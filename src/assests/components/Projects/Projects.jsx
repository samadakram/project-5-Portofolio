import React from 'react';
import './Projects.css';
import { Grid } from '@material-ui/core';

export const Projects = () => {
    return (
        <div className="projectsContainer">
            <h1>Projects</h1>
            <div className="projects">
                <Grid container>
                    <Grid item className="projectGrid" xs={12} md={6}>
                        <div className="projectCard">
                            <div>Image</div>
                            <div>Text</div>
                        </div>
                    </Grid>
                    <Grid item className="projectGrid" xs={12} md={6}>
                        <div className="projectCard">
                            <div>Image</div>
                            <div>Text</div>
                        </div>
                    </Grid>
                    <Grid item className="projectGrid" xs={12} md={6}>
                        <div className="projectCard">
                            <div>Image</div>
                            <div>Text</div>
                        </div>
                    </Grid>
                    <Grid item className="projectGrid" xs={12} md={6}>
                        <div className="projectCard">
                            <div>Image</div>
                            <div>Text</div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}