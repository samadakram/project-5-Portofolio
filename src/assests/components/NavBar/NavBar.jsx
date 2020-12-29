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
                <li>
                    <Link
                    className="active link"
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    >
                       Home
                    </Link>
                </li>
                <li>
                    <Link
                    activeClass="active"
                    to="services"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    >
                        <a className="link" href="#">Services</a>
                    </Link>
                </li>
                <li>
                    <Link
                    activeClass="active"
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    >
                        <a className="link" href="#">Skills</a>
                    </Link>
                </li>
                <li>
                    <Link
                    activeClass="active"
                    to="portofolio"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    >
                        <a className="link" href="#">Portofolio</a>
                    </Link>
                </li>
                <li>
                    <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    >
                        <a className="link" href="#">Contact</a>
                    </Link>
                </li>
            </ul>
        </div>
    );
}