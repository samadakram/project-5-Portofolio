import React from 'react';
import './Contact.css';
import { Grid } from '@material-ui/core';
import Profile from '../../images/ContactImages/Profile.jpg';

export const Contact = () => {
    return (
        <div className="contactContainer">
            <Grid container>
                <Grid item xs={12}>
                    <img src={Profile} alt="Profile" />
                </Grid>
                <Grid item xs={12}>
                    <h1 className="contactHeading">Contact</h1>
                </Grid>
                <Grid item xs={12} md={4}>
                    <div className="contactCard">
                        <div className="contactIcon">
                            <i className="fas fa-envelope"></i>
                        </div>
                        <div className="contactEmail">
                            <span>Email</span>
                        </div>
                        <div className="contactLink">
                            <span>as765722@gmail.com</span>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} md={4}>
                    <div className="contactCard">
                        <div className="contactIcon">
                            <i className="fas fa-globe"></i>
                        </div>
                        <div className="contactEmail">
                            <span>Social Media</span>
                        </div>
                        <div className="contactLink">
                            <a rel="noopener noreferrer" target="_blank" href="https://github.com/samadakram">
                                <i class="fab fa-github" title="github" id="github"></i>
                            </a>
                            <a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/a.samad.737">
                                <i class="fab fa-facebook" title="facebook" id="facebook"></i>
                            </a>
                            <a rel="noopener noreferrer" target="_blank" href="https://twitter.com/asamad737">
                                <i class="fab fa-twitter" title="twitter" id="twitter"></i>
                            </a>
                            <a rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/mir_samad_baloch/">
                                <i class="fab fa-instagram" title="instagram" id="instagram"></i>
                            </a>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} md={4}>
                    <div className="contactCard">
                        <div className="contactIcon">
                            <i className="fas fa-phone"></i>
                        </div>
                        <div className="contactEmail">
                            <span>Phone</span>
                        </div>
                        <div className="contactLink">
                            <span>+923213143790</span>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}