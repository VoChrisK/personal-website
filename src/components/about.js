import React from 'react';

const About = () => {
  return (
    <section id="about" className="about section">
      <h1 className="header" data-sal='slide-up' data-sal-easing="ease" data-sal-duration="1000">About Me</h1>
      <div className="container adjust" data-sal='slide-up' data-sal-easing="ease" data-sal-duration="1000" >
        <img className="my-picture" src={require("./../images/handsome-boi.jpg")} />
        <div>
          <p className="description">Back in 2007 and at a young age of 13 years old, I happened to stumble upon a game called Roblox thanks to a favorite Youtuber of mine at the time. This game introduced me to game development and my first programming language Lua; these tools allowed me to create several games for the first time. After coding a robot to move using MATLAB in one of my first-year college classes, I knew for sure that being a programmer was my dream job.</p>
          <br /><br />
          <p className="description">Fast forward to a B.S. in Applied Mathematics and minor in Computer Science at San Jose State University and a 7-month web development & coding bootcamp called App Academy, I am now a software engineer and web developer with 3+ years of professional experience. I honed my craft in web development at various companies such as Fidelity Investments and PayPal, utilizing modern languages and frameworks such as TypeScript, React, and Angular to build exceptional and intuitive web experiences.</p>
          <br /><br />
          <p className="description">When I'm not coding, I love to play video games of all sorts and genres and enjoy staying active through various fitness activities and sports such as weightlifting, hiking, and rock climbing!</p>
          <br /><br />
          <p className="description"><strong className='bold'>Core languages, frameworks, and technologies:</strong> JavaScript, TypeScript, Java, Sass/CSS, Angular, React, PostgreSQL</p>
        </div>
      </div>
    </section>
  )
};

export default About;


// <strong className="bold">App Academy</strong>.