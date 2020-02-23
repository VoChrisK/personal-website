import React from 'react';

const Info = () => {
    return (
        <nav className="info-navbar" >
            <ul className="links">
                <li data-sal="slide-up" data-sal-easing="ease" data-sal-duration="500" data-sal-delay="700"><a href="https://github.com/VoChrisK" target="_blank"><i className="fab fa-github"></i></a></li>
                <li data-sal="slide-up" data-sal-easing="ease" data-sal-duration="500" data-sal-delay="800"><a href="https://www.linkedin.com/in/chris-vo-/" target="_blank"><i className="fab fa-linkedin"></i></a></li>
                <li data-sal="slide-up" data-sal-easing="ease" data-sal-duration="500" data-sal-delay="900"><a href="https://angel.co/chris-vo-3" target="_blank"><i className="fab fa-angellist"></i></a></li>
                <li data-sal="slide-up" data-sal-easing="ease" data-sal-duration="500" data-sal-delay="1000"><a href={require('./../../assets/resume.pdf')} target="_blank"><i className="resume"></i></a></li>
            </ul>
            <i data-sal="slide-up" data-sal-easing="ease" data-sal-duration="500" data-sal-delay="1000"><a className="external" href="mailto:vo.chris.k@gmail.com">vo.chris.k@gmail.com</a></i>
        </nav>
    )
};

export default Info;