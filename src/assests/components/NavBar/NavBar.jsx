import React from 'react';
import './NavBar.css';

export const NavBar = () => {
    return (
        <div className="navbar">
            <label className="logo"> Samad </label>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Skills</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
    );
}