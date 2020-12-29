import React from 'react';
import './Projects.css';
import { Grid } from '@material-ui/core';

// Import Images
import ExpenseTracker from '../../images/ProjectImages/expenseTracker.PNG';
import Covid19 from '../../images/ProjectImages/covid-19.PNG';
import ShoesStore from '../../images/ProjectImages/shoe-store.PNG';
import CortexClone from '../../images/ProjectImages/cortex.PNG';

export const Projects = () => {
    return (
        <div className="projectsContainer">
            <h1 className="projectHeading">Projects</h1>
            <div className="projects">
                <Grid container>
                    <Grid item className="projectGrid" xs={12} md={6}>
                        <div className="projectCard">
                            <div>
                                <img src={ExpenseTracker} alt="Expense Tracker" />
                            </div>
                            <div className="projectText">
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
                            <div>
                                <img src={Covid19} alt="Covid-19 Tracker" />
                            </div>
                            <div className="projectText">
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
                            <div className="projectText">
                                <img src={ShoesStore} alt="Shoes Store" />
                            </div>
                            <div>
                                <p>Shoes Store</p>
                                <div className="projectText">
                                    <i className="fab fa-github"></i>
                                    <i className="fas fa-external-link-alt"></i>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item className="projectGrid" xs={12} md={6}>
                        <div className="projectCard">
                            <div>
                                <img src={CortexClone} alt="Cortex Clone" />
                            </div>
                            <div className="projectText">
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