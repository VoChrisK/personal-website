import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="contact section">
            <h1 className="header" data-sal="slide-up" data-sal-easing="ease" data-sal-duration="1000">Contact</h1>
            <p className="description" data-sal="slide-up" data-sal-easing="ease" data-sal-duration="1000">I am currently looking for opportunities to leverage my skills in full-stack development. Feel free to contact me via email below!</p>
            <form className="contact-form" action="https://mailthis.to/vo.chris.k@gmail.com" method="POST" encType="multipart/form-data" data-sal="slide-up" data-sal-easing="ease" data-sal-duration="1000">
                <input type="email" name="_replyto" placeholder="Your email" />
                <input type="text" name="_subject" placeholder="Subject" />
                <textarea name="message" placeholder="Enter your message here"></textarea>
                <input type="hidden" name="_after" value="#home"></input>
                <button className="submit-email">Send</button>
            </form>
        </section>
    );
};

export default Contact;