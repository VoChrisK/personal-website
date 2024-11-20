import React from 'react';

const Hero = () => {
  return (
    <div className="hero">
      <h3 className="subtitle first" data-sal="slide-up" data-sal-easing="ease" data-sal-duration="500" data-sal-delay="800">Hello world! My name is</h3>
      <h1 className="title second" data-sal="slide-up" data-sal-easing="ease" data-sal-duration="500" data-sal-delay="850">Chris Vo</h1>
      <p className="description fourth" data-sal="slide-up" data-sal-easing="ease" data-sal-duration="500" data-sal-delay="950">I'm a full-stack (frontend-focused) software engineer based in San Jose, CA with a track record of developing and delivering exceptional production-ready web applications and a passion for writing clean, maintainable, and well-tested code.</p>
    </div>
  );
};

export default Hero;