import React from 'react';

const Projects = () => {
    return (
        <section className="projects section">
            <h1 className="projects header">Portfolio</h1>
            <div className="project container right">
                <img className="project-image" src={require("./../../images/twelvefold-1.png")} />
                <div className="info">
                    <div className="title-and-links">
                        <div className="icons-group">
                            <i className="fas fa-external-link-alt"></i>
                            <i className="fab fa-github"></i>
                        </div>
                        <h2 className="name">Interactive Twelvefold Way</h2>
                    </div>
                    <p className="description">An interactive visualization that lets users experiment and practice on the Twelvefold Way, a systematic classification of twelve formulas relating to two finite sets in Combinatorics. It leverages the ball-and-bin and stars-and-bars models to visualize how each formula function under the hood. This project was built with object-oriented principles and ease of use in mind.</p>
                    <ul className="technologies">
                        <li className="technology">JavaScript</li>
                        <li className="technology">Canvas</li>
                        <li className="technology">MathJax</li>
                    </ul>
                </div>
            </div>
            <div className="project container">
                <div className="info">
                    <div className="title-and-links">
                        <h2 className="name">SWEETT</h2>
                        <div className="icons-group">
                            <i className="fab fa-github"></i>
                            <i className="fas fa-external-link-alt"></i>
                        </div>
                    </div>
                    <p className="description">A time tracking and goal setting app for software engineering job seekers. Users can record their time for various tasks and save them as entries in one of the three default categories (Leetcode, Cracking the Coding Interview, Languages/Technologies). Each day, the app will alert users which category needs more time invested, if any. Users can also define their own goals and categories to suit their needs.</p>
                    <ul className="technologies left">
                        <li className="technology">MongoDB</li>
                        <li className="technology">Express.js</li>
                        <li className="technology">React</li>
                        <li className="technology">Redux</li>
                        <li className="technology">Node.js</li>
                        <li className="technology">Heroku</li>
                    </ul>
                </div>
                <img className="project-image" src={require("./../../images/sweett-1.png")} />
            </div>
            <div className="project container right">
                <img className="project-image" src={require("./../../images/harmony-1.png")} />
                <div className="info">
                    <div className="title-and-links">
                        <div className="icons-group">
                            <i className="fas fa-external-link-alt"></i>
                            <i className="fab fa-github"></i>
                        </div>
                        <h2 className="name">Harmony</h2>
                    </div>
                    <p className="description">A text chat app that allows users to communicate with other users in real time. Based off of Discord, this app allows users to create online communities in the form of servers and invite other users to join them. Users can send messages in channels, or individual chatrooms, or with other users via direct messages.</p>
                    <ul className="technologies">
                        <li className="technology">React</li>
                        <li className="technology">Redux</li>
                        <li className="technology">Ruby on Rails</li>
                        <li className="technology">PostgreSQL</li>
                        <li className="technology">WebSockets</li>
                    </ul>
                </div>
            </div>
            <h1 className="other-projects header">Other Projects</h1>
            <ul className="other-projects-list">
                <li className="other-project">
                    <h2>3D Space Lander</h2>
                    <p></p>
                </li>
                <li className="other-project">
                    <h2>SCKFlight</h2>
                    <p></p>
                </li>
                <li className="other-project">
                    <h2>Stickman Arcade Game</h2>
                    <p></p>
                </li>
                <li className="other-project">
                    <h2>Calendar 2.0</h2>
                    <p></p>
                </li>
                <li className="other-project">
                    <h2>Mancala Game</h2>
                    <p></p>
                </li>
                <li className="other-project">
                    <h2>Maze Generator and Solver</h2>
                    <p></p>
                </li>
                <li className="other-project">
                    <h2>Calendar 1.0</h2>
                    <p></p>
                </li>
                <li className="other-project">
                    <h2>Automobile Customization</h2>
                    <p></p>
                </li>
                <li className="other-project">
                    <h2>Stocks and Stuff</h2>
                    <p></p>
                </li>
            </ul>
            
        </section>
    );
};

export default Projects;