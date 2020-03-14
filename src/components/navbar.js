import React, { useState, useEffect } from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';
import Sidebar from './sidebar';
import { CSSTransition } from 'react-transition-group';

const Navbar = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (typeof window === 'undefined' || typeof document === 'undefined') {
            return;
        }

        document.getElementsByTagName("body")[0].addEventListener("click", event => {
            if (event.target === document.getElementsByTagName("i")[0] || document.getElementsByClassName("sidebar")[0].contains(event.target)) return;

            document.getElementsByTagName("body")[0].classList.remove("lock");
            setVisible(false);
        })

        document.getElementsByClassName("sidebar")[0].addEventListener("click", event => {
            setVisible(true);
        })

        for(let i = 0; i < document.getElementsByClassName("clickable").length; i++) {
            document.getElementsByClassName("clickable")[i].addEventListener("click", event => {
                event.stopPropagation();
                document.getElementsByTagName("body")[0].classList.remove("lock");
                setVisible(false);
            })
        }
    });

    useEffect(() => {
        if (typeof window === 'undefined' || typeof document === 'undefined') {
            return;
        }

        if(!visible) {
            document.getElementsByTagName("body")[0].classList.remove("lock");
        } else {
            console.log("test");
            document.getElementsByTagName("body")[0].classList.add("lock");
        }
    }, [visible])

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
            <i onClick={() => setVisible(!visible)} className="fas fa-bars"></i>

            <CSSTransition in={visible} timeout={300} classNames="fade-left">
                <Sidebar />
            </CSSTransition>
        </nav>
    );
};

export default Navbar;