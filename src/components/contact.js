import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="contact section">
            <h1 className="header" data-sal="slide-up" data-sal-easing="ease" data-sal-duration="1000">Contact</h1>
            
            <section className="subsection">
                <p className="description" data-sal="slide-up" data-sal-easing="ease" data-sal-duration="1000">At this time, I am not looking for new opportunities. However, my inbox is open for any questions or comments. Feel free to shoot me an email in that case and I'll get back to you ASAP!</p>
                <a className="email-button" href="mailto:vo.chris.k@gmail.com">Email me!</a>
            </section>
        </section>
    );
};

export default Contact;