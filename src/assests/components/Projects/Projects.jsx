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
        <div className="projectsContainer" id="projects">
            <h1 className="projectHeading">Projects I have Built</h1>
            <div className="projects">
                <Grid container>
                    <Grid item className="projectGrid" xs={12} md={6}>
                        <div className="projectCard">
                            <div>
                                <img src={ExpenseTracker} alt="Expense Tracker" />
                            </div>
                            <div>
                                <div className="projectText">
                                    <h3>Expense Tracker</h3>
                                </div>
                                <div className="projectIcons">
                                    <i className="fab fa-github" id="github"></i>
                                    <i className="fas fa-external-link-alt" id="live"></i>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item className="projectGrid" xs={12} md={6}>
                        <div className="projectCard">
                            <div>
                                <img src={Covid19} alt="Covid-19 Tracker" />
                            </div>
                            <div>
                                <div className="projectText">
                                    <h3>Covid-19 Tracker</h3>
                                </div>
                                <div className="projectIcons">
                                    <i className="fab fa-github" id="github"></i>
                                    <i className="fas fa-external-link-alt" id="live"></i>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item className="projectGrid" xs={12} md={6}>
                        <div className="projectCard">
                            <div>
                                <img src={ShoesStore} alt="Shoes Store" />
                            </div>
                            <div>
                                <div className="projectText">
                                    <h3>Shoes Store</h3>
                                </div>
                                <div className="projectIcons">
                                    <i className="fab fa-github" id="github"></i>
                                    <i className="fas fa-external-link-alt" id="live"></i>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item className="projectGrid" xs={12} md={6}>
                        <div className="projectCard">
                            <div>
                                <img src={CortexClone} alt="Cortex Clone" />
                            </div>
                            <div>
                                <div className="projectText">
                                    <h3>Cortex Clone</h3>
                                </div>
                                <div className="projectIcons">
                                    <i className="fab fa-github" id="github"></i>
                                    <i className="fas fa-external-link-alt" id="live"></i>
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}