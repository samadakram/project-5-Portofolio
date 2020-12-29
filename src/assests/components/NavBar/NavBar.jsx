import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import './NavBar.css';

export const NavBar = () => {
    return (
        <div className="navbar" id="top">
            <input type="checkbox" id="check" />
            <label htmlFor="check" className="checkbtn">
                <i className="fas fa-bars"></i>
            </label>
            <label
                className="logo"
                onClick={() => { scroll.scrollToTop() }}
            >
                Samad
            </label>
            <ul>
                <li>
                    <Link
                        className="link"
                        activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        className="link"
                        activeClass="active"
                        to="services"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >
                        Services
                    </Link>
                </li>
                <li>
                    <Link
                        className="link"
                        activeClass="active"
                        to="skills"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >
                        Skills
                    </Link>
                </li>
                <li>
                    <Link
                        className="link"
                        activeClass="active"
                        to="portofolio"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >
                        Portofolio
                    </Link>
                </li>
                <li>
                    <Link
                        className="link"
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >
                        Contact
                    </Link>
                </li>
            </ul>
        </div>
    );
}