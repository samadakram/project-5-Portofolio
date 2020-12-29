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
                    <Link>
                        <a className="active link" href="#">Home</a>
                    </Link>
                </li>
                <li>
                    <Link>
                        <a className="link" href="#">Services</a>
                    </Link>
                </li>
                <li>
                    <Link>
                        <a className="link" href="#">Skills</a>
                    </Link>
                </li>
                <li>
                    <Link>
                        <a className="link" href="#">Projects</a>
                    </Link>
                </li>
                <li>
                    <Link>
                        <a className="link" href="#">Contact</a>
                    </Link>
                </li>
            </ul>
        </div>
    );
}