import React, { useEffect } from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';

const Navbar = () => {
    useEffect(() => {
        if (typeof window === 'undefined' || typeof document === 'undefined') {
            return;
        }

        document.getElementsByClassName("fa-bars")[0].addEventListener("click", event => {
            document.getElementsByClassName("sidebar")[0].classList.toggle("show");
            document.getElementsByTagName("body")[0].classList.toggle("lock");
        })
    });

    return (
        <nav className="navbar" data-sal="slide-down" data-sal-easing="ease" data-sal-duration="500">
            <a href="https://chrisvo.dev/"><img className="cv-logo" src={require("./../../images/cv-logo.png")} data-sal="slide-down" data-sal-easing="ease" data-sal-duration="500" data-sal-delay="500" /></a>
            <ul className="links">
                <li className="link-content" data-sal="slide-down" data-sal-easing="ease" data-sal-duration="500" data-sal-delay="300"><button onClick={() => scrollTo("#about")}>About</button></li>
                <li className="link-content" data-sal="slide-down" data-sal-easing="ease" data-sal-duration="500" data-sal-delay="350"><button onClick={() => scrollTo("#projects")}>Portfolio</button></li>
                <li className="link-content" data-sal="slide-down" data-sal-easing="ease" data-sal-duration="500" data-sal-delay="400"><button onClick={() => scrollTo("#skills")}>Skills</button></li>
                <li className="link-content" data-sal="slide-down" data-sal-easing="ease" data-sal-duration="500" data-sal-delay="450"><button onClick={() => scrollTo("#contact")}>Contact</button></li>
                <li className="link-content" data-sal="slide-down" data-sal-easing="ease" data-sal-duration="500" data-sal-delay="500"><a href={require('./../../assets/Chris_Vo_Resume.pdf')} target="_blank">Resume</a></li>
            </ul>
            <i className="fas fa-bars"></i>
        </nav>
    );
};

export default Navbar;