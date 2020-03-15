import React from 'react';

const About = () => {
    return (
        <section id="about" className="about section">
            <h1 className="header" data-sal='slide-up' data-sal-easing="ease" data-sal-duration="1000">About Me</h1>

            <div className="container" data-sal='slide-up' data-sal-easing="ease" data-sal-duration="1000">
                <img className="my-game" src={require("./../../images/amusement-blox.jpeg")} />

                <p className="description">I always have an affinity for programming. When I was thirteen years old, I was exposed to programming through Roblox, a massively-multiplayer online video game and game creation platform. By immersing myself in game development using its own game editor and the programming language Lua, I was able to develop a game that was fairly popular at the time. I was able to accrue over 50,000 visits and sell over 1,000 copies of various virtual items to incentivize replayability. It was this moment that my interest in software began to manifest.</p>
            </div>

            <div className="container adjust" data-sal='slide-up' data-sal-easing="ease" data-sal-duration="1000" >
                <p className="description">Fast forward to present time, I graduated with a Bachelor's degree in Applied Mathematics. My studies included, but were not limited to, Probability, Statistics, and Combinatorics. Although I intended to pursue a career in mathematics, I decided to tread along the path of software development instead. I really enjoy building new innovations and solving problems in relation to software applications and programming. My degree proves I have the technical aptitudes to learn complex topics with ease and to learn new concepts quickly. My experience developing a popular game helped me focus more on user experience.</p>
                <img className="my-picture" src={require("./../../images/handsome-boi.jpg")} />
            </div>
        </section>
    )
};

export default About;