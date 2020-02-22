import React from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';

const Navbar = () => {
    return (
        <nav className="navbar" data-sal="slide-down" data-sal-easing="ease" data-sal-duration="500" data-sal-delay="500">
            <ul className="links">
                <li className="link-content" data-sal="slide-down" data-sal-easing="ease" data-sal-duration="500" data-sal-delay="500"><button onClick={() => scrollTo("#about")}>About</button></li>
                <li className="link-content" data-sal="slide-down" data-sal-easing="ease" data-sal-duration="500" data-sal-delay="600"><button onClick={() => scrollTo("#projects")}>Portfolio</button></li>
                <li className="link-content" data-sal="slide-down" data-sal-easing="ease" data-sal-duration="500" data-sal-delay="700"><button onClick={() => scrollTo("#skills")} href="#">Skills</button></li>
                <li className="link-content" data-sal="slide-down" data-sal-easing="ease" data-sal-duration="500" data-sal-delay="800"><button href="#">Contact</button></li>
            </ul>
        </nav>
    );
};

export default Navbar;