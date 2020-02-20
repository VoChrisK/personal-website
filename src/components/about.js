import React from 'react';

const About = () => {
    return (
        <section className="about section">
            <h1 className="about-header">About Me</h1>

            <div className="container">
                <img className="my-game" src={require("./../../images/amusement-blox.jpeg")} />

                <p className="description">I always had an affinity towards programming. When I was thirteen years old, I was exposed to programming through Roblox, a massively-multiplayer online video game and game creation platform. By immersing myself in game development using its own game editor and the programming language Lua, I was able to develop a game that was fairly popular at the time. I was able to accrue over 50,000 visits and sell over 1,000 in game items for virtual currency to enhance the game's experience. It was this moment that my affinity towards programming began to manifest.</p>
            </div>

            <div className="container">
                <p className="description">Fast forward to present time, I graduated with a Bachelor's degree in Applied Mathematics. My studies included, but not limited to, Probability, Statistics, and Combinatorics. Although I intended to pursue a career in mathematics, I decided to tread along the path of software development instead. I really enjoy building new things and programming with clear goals in mind. My degree proves I have the technical aptitude to learn complex topics and the ability to learn new concepts quickly. My experience developing a game helped me focus more on quality user experience.</p>

                <img className="my-picture" src={require("./../../images/handsome-boi.jpg")} />
            </div>
        </section>
    )
};

export default About;