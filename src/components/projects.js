import React from 'react';

const Projects = () => {
    return (
        <section id="projects" className="projects section">
            <h1 className="other-projects" data-sal="slide-up" data-sal-duration="1000" data-sal-easing="ease">Other Projects</h1>
            <ul className="other-projects-list">
                <li className="other-project" data-sal="fade" data-sal-easing="ease" data-sal-duration="1000">
                    <div className="title-and-links">
                        <h2 className="name">3-D Space Lander</h2>
                        <a href="https://github.com/VoChrisK/3D-Space-Lander" target="_blank"><i className="fab fa-github"></i></a>
                    </div>
                    <p className="description">A 3-D game where you control a space lander in a moon-like environment. This game supports collision detection, physics and particle simulations, and camera functionalities. This game was my final project for my Computer Game Design class.</p>
                    <ul className="technologies">
                        <li className="technology">C++</li>
                        <li className="technology">openFrameworks</li>
                    </ul>
                </li>
                <li className="other-project" data-sal="fade" data-sal-easing="ease" data-sal-duration="1000" data-sal-delay="200">
                    <div className="title-and-links">
                        <h2 className="name">SCKFlight</h2>
                        <a href="https://github.com/khoavo09/SCKFlight" target="_blank"><i className="fab fa-github"></i></a>
                    </div>
                    <p className="description">A window-based, GUI app that allows users to create and manage airlines reservations. Me and my team used MySQL to define the database and JDBC to connect it to the Java app. This app was my team project for my Database Management Systems class.</p>
                    <ul className="technologies">
                        <li className="technology">Java</li>
                        <li className="technology">MySQL</li>
                        <li className="technology">JDBC</li>
                    </ul>
                </li>
                <li className="other-project" data-sal="fade" data-sal-easing="ease" data-sal-duration="1000" data-sal-delay="400">
                    <div className="title-and-links">
                        <h2 className="name">Mancala Game</h2>
                        <a href="https://github.com/VoChrisK/Mancala-Game" target="_blank"><i className="fab fa-github"></i></a>
                    </div>
                    
                    <p className="description">A window-based, GUI app replicating the traditional Mancala game. This app follows the Object-oriented principles and two design patterns: MVC and Decorator pattern. This app was my team project for my Object Oriented Design class.</p>
                    <ul className="technologies">
                        <li className="technology">Java</li>
                        <li className="technology">Swing</li>
                        <li className="technology">AWT</li>
                    </ul>
                </li>
                <li className="other-project" data-sal="fade" data-sal-easing="ease" data-sal-duration="1000" data-sal-delay="600">
                    <div className="title-and-links">
                        <h2 className="name">Maze Generator and Solver</h2>
                        <a href="https://github.com/VoChrisK/Maze-Generator-And-Solver" target="_blank"><i className="fab fa-github"></i></a>
                    </div>
                    <p className="description">A project that randomly generates any square-sized maze and solves it subsequently. The maze generator is modeled using the graph data structure and the maze solver is modeled using respective search algorithms (BFS and DFS).</p>
                    <ul className="technologies">
                        <li className="technology">Java</li>
                        <li className="technology">JUnit</li>
                    </ul>
                </li>
                <li className="other-project" data-sal="fade" data-sal-easing="ease" data-sal-duration="1000" data-sal-delay="800">
                    <div className="title-and-links">
                        <h2 className="name">Automobile Customization</h2>
                        <a href="https://github.com/VoChrisK/Automobile-Customization" target="_blank"><i className="fab fa-github"></i></a>
                    </div>
                    <p className="description"> This project lets users customize and configure a car based on the make, model, and color and store it as an object. It incorporates sockets, in which multiple clients can connect to a server. This was my final project for my advanced Java programming class.</p>
                    <ul className="technologies">
                        <li className="technology">Java</li>
                        <li className="technology">Socket Programming</li>
                    </ul>
                </li>
                <li className="other-project" data-sal="fade" data-sal-easing="ease" data-sal-duration="1000" data-sal-delay="1000">
                    <div className="title-and-links">
                        <h2 className="name">Stocks and Stuff</h2>
                        <a href="https://github.com/VoChrisK/CIS-22C-Team-Project" target="_blank"><i className="fab fa-github"></i></a>
                    </div>
                    <p className="description">A project that stores and manages stock data in a Binary Search Tree, Hash Table, and Max Heap. Each data structure is written from scratch using C++. This was a team project consisting of four members for my Intro to Data Structures class.</p>
                    <ul className="technologies">
                        <li className="technology">C++</li>
                    </ul>
                </li>
            </ul>
            
        </section>
    );
};

export default Projects;