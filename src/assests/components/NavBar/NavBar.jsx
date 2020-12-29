import React from 'react';
import { Link } from 'react-scroll';
import './NavBar.css';

export const NavBar = () => {
    return (
        <div className="navbar">
            <input type="checkbox" id="check" />
            <label htmlFor="check" className="checkbtn">
                <i className="fas fa-bars"></i>
            </label>
            <label className="logo"> Samad </label>
            <ul>
                <li><a className="active link" href="#">Home</a></li>
                <li><a className="link" href="#">Services</a></li>
                <li><a className="link" href="#">Skills</a></li>
                <li><a className="link" href="#">Projects</a></li>
                <li><a className="link" href="#">Contact</a></li>
            </ul>
        </div>
    );
}