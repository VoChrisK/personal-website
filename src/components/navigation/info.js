import React from 'react';

const Info = () => {
  return (
    <nav className="info-navbar" >
      <ul className="links">
        <li 
          data-sal="slide-up" 
          data-sal-easing="ease" 
          data-sal-duration="500" 
          data-sal-delay="550"
        >
          <a href="https://github.com/VoChrisK" target="_blank">
            <i className="fab fa-github" />
          </a>
        </li>
        <li 
          data-sal="slide-up"
          data-sal-easing="ease" 
          data-sal-duration="500" 
          data-sal-delay="600"
        >
          <a href="https://www.linkedin.com/in/chris-vo-/" target="_blank">
            <i className="fab fa-linkedin" />
          </a>
        </li>
        <li
          data-sal="slide-up" 
          data-sal-easing="ease" 
          data-sal-duration="500" 
          data-sal-delay="650"
        >
          <a href="https://wellfound.com/u/chris-vo-3" target="_blank">
            <i className="fab fa-angellist" />
          </a>
        </li>
        <li 
          data-sal="slide-up" 
          data-sal-easing="ease" 
          data-sal-duration="500" 
          data-sal-delay="700"
        >
          <a href={require('../../../assets/Chris_Vo_Resume.pdf')} target="_blank">
            <i className="resume" />
          </a>
        </li>
      </ul>
    </nav>
  )
};

export default Info;