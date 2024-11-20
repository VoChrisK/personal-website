import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact section">
      <h1 className="header" data-sal="slide-up" data-sal-easing="ease" data-sal-duration="1000">Contact</h1>
      <section className="subsection">
        <p className="description" data-sal="slide-up" data-sal-easing="ease" data-sal-duration="1000">I am currently looking for my next full-time opportunity in software development. I am open to either front-end or full-stack roles. Please feel free to contact me via Linkedin or email!</p>
        <a className="email-button" href="mailto:vo.chris.k@gmail.com">Email me!</a>
      </section>
    </section>
  );
};

export default Contact;