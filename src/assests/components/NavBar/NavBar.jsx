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
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    >
                        <a className="active link" href="#">Home</a>
                    </Link>
                </li>
                <li>
                    <Link
                    activeClass="active"
                    to="Services"
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
                    to="Skills"
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