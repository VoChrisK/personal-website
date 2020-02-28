import React from 'react';

const Sidebar = () => {
    return (
        <nav className="sidebar">
            <ul className="links">
                <li className="link-content"><button onClick={() => scrollTo("#about")}>About</button></li>
                <li className="link-content"><button onClick={() => scrollTo("#projects")}>Portfolio</button></li>
                <li className="link-content"><button onClick={() => scrollTo("#skills")} href="#">Skills</button></li>
                <li className="link-content"><button onClick={() => scrollTo("#contact")} href="#">Contact</button></li>
            </ul>
            <ul className="links">
                <li><a href="https://github.com/VoChrisK" target="_blank"><i className="fab fa-github"></i></a></li>
                <li><a href="https://www.linkedin.com/in/chris-vo-/" target="_blank"><i className="fab fa-linkedin"></i></a></li>
                <li><a href="https://angel.co/chris-vo-3" target="_blank"><i className="fab fa-angellist"></i></a></li>
                <li><a href={require('./../../assets/Chris_Vo_Resume.pdf')} target="_blank"><i className="resume"></i></a></li>
            </ul>
            <i><a className="external" href="mailto:vo.chris.k@gmail.com">vo.chris.k@gmail.com</a></i>
        </nav>
    )
};

export default Sidebar;