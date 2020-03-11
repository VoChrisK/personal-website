import React from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';

const Sidebar = () => {
    const removeLock = event => {
        event.stopPropagation();
        document.getElementsByClassName("sidebar")[0].classList.remove("show");
        document.getElementsByTagName("body")[0].classList.remove("lock");
    }

    const preventClose = () => {
        document.getElementsByClassName("sidebar")[0].classList.add("show");
        document.getElementsByTagName("body")[0].classList.add("lock");
    }

    return (
        <nav onClick={preventClose} className="sidebar">
            <ul className="links">
                <li onClick={removeLock} className="link-content"><button onClick={() => scrollTo("#about")}>About</button></li>
                <li onClick={removeLock} className="link-content"><button onClick={() => scrollTo("#projects")}>Portfolio</button></li>
                <li onClick={removeLock} className="link-content"><button onClick={() => scrollTo("#skills")} href="#">Skills</button></li>
                <li onClick={removeLock} className="link-content"><button onClick={() => scrollTo("#contact")} href="#">Contact</button></li>
                <li onClick={removeLock} className="link-content"><a href={require('./../../assets/Chris_Vo_Resume.pdf')} target="_blank">Resume</a></li>
            </ul>
            <ul className="other-links">
                <li onClick={removeLock}><a href="https://github.com/VoChrisK" target="_blank"><i className="fab fa-github"></i></a></li>
                <li onClick={removeLock}><a href="https://www.linkedin.com/in/chris-vo-/" target="_blank"><i className="fab fa-linkedin"></i></a></li>
                <li onClick={removeLock}><a href="https://angel.co/chris-vo-3" target="_blank"><i className="fab fa-angellist"></i></a></li>
            </ul>
            <i><a className="external" href="mailto:vo.chris.k@gmail.com">vo.chris.k@gmail.com</a></i>
        </nav>
    )
};

export default Sidebar;