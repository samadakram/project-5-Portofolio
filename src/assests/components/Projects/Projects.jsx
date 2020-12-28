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
                            <div>
                                <p>Expense Tracker</p>
                                <div>
                                    <i className="fab fa-github"></i>
                                    <i className="fas fa-external-link-alt"></i>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item className="projectGrid" xs={12} md={6}>
                        <div className="projectCard">
                            <div>Image</div>
                            <div>
                                <p>Covid-19 Tracker</p>
                                <div>
                                    <i className="fab fa-github"></i>
                                    <i className="fas fa-external-link-alt"></i>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item className="projectGrid" xs={12} md={6}>
                        <div className="projectCard">
                            <div>Image</div>
                            <div>
                                <p>Shoes Store</p>
                                <div>
                                    <i className="fab fa-github"></i>
                                    <i className="fas fa-external-link-alt"></i>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item className="projectGrid" xs={12} md={6}>
                        <div className="projectCard">
                            <div>Image</div>
                            <div>
                                <p>Cortex Clone</p>
                                <div>
                                    <i className="fab fa-github"></i>
                                    <i className="fas fa-external-link-alt"></i>
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}