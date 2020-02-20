import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="links">
                <li className="link-content"><a href="#">About</a></li>
                <li className="link-content"><a href="#">Projects</a></li>
                <li className="link-content"><a href="#">Skills</a></li>
                <li className="link-content"><a href="#">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;