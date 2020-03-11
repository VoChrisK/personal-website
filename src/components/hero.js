import React from 'react';

const Hero = () => {

    return (
        <div className="hero">
            <h3 className="subtitle first" data-sal="slide-up" data-sal-easing="ease" data-sal-duration="500" data-sal-delay="800">Hello, my name is</h3>
            <h1 className="title second" data-sal="slide-up" data-sal-easing="ease" data-sal-duration="500" data-sal-delay="850">Chris Vo</h1>
            <p className="description fourth" data-sal="slide-up" data-sal-easing="ease" data-sal-duration="500" data-sal-delay="950">I'm a software engineer based in San Jose, CA specializing in building websites and applications with a focus in intuitive design and visual presentation</p>
        </div>
    );
};

export default Hero;