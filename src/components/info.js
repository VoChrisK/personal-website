import React from 'react';

const Info = () => {
    return (
        <nav className="info-navbar">
            <ul className="links">
                <li><a href="https://github.com/VoChrisK" target="_blank"><i className="fab fa-github"></i></a></li>
                <li><a href="https://www.linkedin.com/in/chris-vo-/" target="_blank"><i className="fab fa-linkedin"></i></a></li>
                <li><a href="https://angel.co/chris-vo-3" target="_blank"><i class="fab fa-angellist"></i></a></li>
            </ul>
            <a className="email" href="mailto:vo.chris.k@gmail.com">vo.chris.k@gmail.com</a>
        </nav>
    )
};

export default Info;