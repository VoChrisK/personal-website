import React from 'react';

const About = () => {
    return (
        <section id="about" className="about section">
            <h1 className="header" data-sal='slide-up' data-sal-easing="ease" data-sal-duration="1000">About Me</h1>

            <div className="container" data-sal='slide-up' data-sal-easing="ease" data-sal-duration="1000">
                <a className="amusement-blox" target="_blank" href="https://www.roblox.com/games/204253/Amusement-BLOX"><img className="my-game" src={require("./../../images/amusement-blox.jpeg")} /></a>

                <p className="description">When I was thirteen years old, I was introduced to programming through Roblox, a massively-multiplayer online video game and game creation platform. By immersing myself in game development using its own game editor and the programming language Lua, I was able to develop a game that was fairly popular at the time: Amusement BLOX, an amusement park with a variety of rides and minigames. This game was able to accrue over 50,000 visits sell over 1,000 copies of various in-game items to incentivize replayability. It was this moment where my interest in software development began to manifest.</p>
            </div>

            <div className="container adjust" data-sal='slide-up' data-sal-easing="ease" data-sal-duration="1000" >
                <p className="description">Fast forward to present time, I graduated with a Bachelor's degree in Applied and Computational Mathematics and recently, a top coding bootcamp. My degree gave me the best of both worlds: my studies included, but were not limited to, Statistics, Data Structures and Algorithms, and Object Oriented Design. On top of these core building blocks, I also included full stack web development to the mix thanks to the bootcamp, furthering my capabilities as a technically sound individual. Most importantly, I have my passion for programming. I really enjoy building new innovations and solving logical problems programatically. I especially love to surround myself with like-minded people and work together to solve a common problem.</p>
                <img className="my-picture" src={require("./../../images/handsome-boi.jpg")} />
            </div>
        </section>
    )
};

export default About;