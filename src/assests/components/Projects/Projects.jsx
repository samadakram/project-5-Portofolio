import React, { useEffect } from 'react';
import './Projects.css';
import { Grid } from '@material-ui/core';
import Aos from 'aos';
import 'aos/dist/aos.css';

// Import Images
import ExpenseTracker from '../../images/ProjectImages/expenseTracker.PNG';
import Covid19 from '../../images/ProjectImages/covid-19.PNG';
import ShoesStore from '../../images/ProjectImages/shoe-store.PNG';
import CortexClone from '../../images/ProjectImages/cortex.PNG';

export const Projects = () => {

    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, []);

    return (
        <div className="projectsContainer" id="portofolio" data-aos="fade-up">
            <h1 className="projectHeading">Projects I have Built</h1>
            <div className="projects">
                <Grid container>
                    <Grid item className="projectGrid" xs={12} md={6}>
                        <div className="projectCard" data-aos="flip-right">
                            <a
                                rel="noopener noreferrer"
                                target="_blank"
                                href="http://expense-tracker-app-samadrind.surge.sh"
                            >
                                <div>
                                    <img src={ExpenseTracker} alt="Expense Tracker" />
                                </div>
                            </a>
                            <div>
                                <div className="projectText">
                                    <h3>Expense Tracker</h3>
                                </div>
                                <div className="projectIcons">
                                    <a
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        href="https://github.com/samadakram/Expense-Tracker-App"
                                    >
                                        <i className="fab fa-github" id="github"></i>
                                    </a>
                                    <a
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        href="http://expense-tracker-app-samadrind.surge.sh"
                                    >
                                        <i className="fas fa-external-link-alt" id="live"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item className="projectGrid" xs={12} md={6}>
                        <div className="projectCard" data-aos="flip-left">
                            <a
                                rel="noopener noreferrer"
                                target="_blank"
                                href="http://covid-19-tracker-app-samadrind.surge.sh"
                            >
                                <div>
                                    <img src={Covid19} alt="Covid-19 Tracker" />
                                </div>
                            </a>
                            <div>
                                <div className="projectText">
                                    <h3>Covid-19 Tracker</h3>
                                </div>
                                <div className="projectIcons">
                                    <a
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        href="https://github.com/samadakram/Covid-19-Tracker"
                                    >
                                        <i className="fab fa-github" id="github"></i>
                                    </a>
                                    <a
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        href="http://covid-19-tracker-app-samadrind.surge.sh"
                                    >
                                        <i className="fas fa-external-link-alt" id="live"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item className="projectGrid" xs={12} md={6}>
                        <div className="projectCard" data-aos="flip-right">
                            <a
                                rel="noopener noreferrer"
                                target="_blank"
                                href="http://shoe-store-samadrind.surge.sh"
                            >
                                <div>
                                    <img src={ShoesStore} alt="Shoes Store" />
                                </div>
                            </a>
                            <div>
                                <div className="projectText">
                                    <h3>Shoes Store</h3>
                                </div>
                                <div className="projectIcons">
                                    <a
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        href="https://github.com/samadakram/Shoes-store"
                                    >
                                        <i className="fab fa-github" id="github"></i>
                                    </a>
                                    <a
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        href="http://shoe-store-samadrind.surge.sh"
                                    >
                                        <i className="fas fa-external-link-alt" id="live"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item className="projectGrid" xs={12} md={6}>
                        <div className="projectCard" data-aos="flip-left">
                            <a
                                rel="noopener noreferrer"
                                target="_blank"
                                href="http://cortex-ui-clone-samadrind.surge.sh"
                            >
                                <div>
                                    <img src={CortexClone} alt="Cortex Clone" />
                                </div>
                            </a>
                            <div>
                                <div className="projectText">
                                    <h3>Cortex Clone</h3>
                                </div>
                                <div className="projectIcons">
                                    <a
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        href="https://github.com/samadakram/FrontPage-clone"
                                    >
                                        <i className="fab fa-github" id="github"></i>
                                    </a>
                                    <a
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        href="http://cortex-ui-clone-samadrind.surge.sh"
                                    >
                                        <i className="fas fa-external-link-alt" id="live"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}