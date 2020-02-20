import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="links">
                <li className="link-content"><a href="#about">About</a></li>
                <li className="link-content"><a href="#">Portfolio</a></li>
                <li className="link-content"><a href="#">Skills</a></li>
                <li className="link-content"><a href="#">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;