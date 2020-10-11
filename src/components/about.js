import React from 'react';

const About = () => {
    return (
        <section id="about" className="about section">
            <h1 className="header" data-sal='slide-up' data-sal-easing="ease" data-sal-duration="1000">About Me</h1>

            <div className="container" data-sal='slide-up' data-sal-easing="ease" data-sal-duration="1000">
                <a className="amusement-blox" target="_blank" href="https://www.roblox.com/games/204253/Amusement-BLOX"><img className="my-game" src={require("./../images/amusement-blox.jpeg")} /></a>

                <p className="description">When I was thirteen years old, I was introduced to programming through <strong className="bold">ROBLOX</strong>, a massively-multiplayer online video game and game creation platform. By immersing myself in game development and programming with Lua, I was able to develop a game that was fairly popular at the time: <strong className="bold">Amusement BLOX</strong>. This game is an amusement park with a variety of rides and minigames and it was played by users over 50,000 times. It was this moment where I became interested in software engineering.</p>
            </div>

            <div className="container adjust" data-sal='slide-up' data-sal-easing="ease" data-sal-duration="1000" >
                <p className="description">Fast forward to present time, I graduated with a Bachelor's degree in Applied and Computational Mathematics at <strong className="bold">San Jose State University</strong>, and completed a full stack web development bootcamp: <strong className="bold">App Academy</strong>. I enjoy building new things and solving logical problems programatically. I also enjoy working collaboratively with other engineers to develop solutions for universal problems. Most importantly, I enjoy learning new things, whether it's related to this field or my hobbies! I am currently in a team in <strong className="bold">Fidelity Investments</strong> where I work on projects using Angular and Node.js.</p>
                <img className="my-picture" src={require("./../images/handsome-boi.jpg")} />
            </div>
        </section>
    )
};

export default About;