import React from 'react';

const Skills = () => {
    return (
        <section id="skills" className="skills section">
            <h1 className="header">Skills</h1>

            <ul className="skills-list">
                <div className="skill" data-sal="fade" data-sal-duration="500">
                    <img className="technology-image" src={require("./../../images/javascript-logo.png")} />
                    <h2 className="name">JavaScript</h2>
                </div>
                <div className="skill" data-sal="fade" data-sal-duration="500" data-sal-delay="50">
                    <img className="technology-image" src={require("./../../images/react-logo.png")} />
                    <h2 className="name">React</h2>
                </div>
                <div className="skill" data-sal="fade" data-sal-duration="500" data-sal-delay="100">
                    <img className="technology-image" src={require("./../../images/redux-logo.png")} />
                    <h2 className="name">Redux</h2>
                </div>
                <div className="skill" data-sal="fade" data-sal-duration="500" data-sal-delay="150">
                    <img className="technology-image" src={require("./../../images/java-logo.png")} />
                    <h2 className="name">Java</h2>
                </div>
                <div className="skill" data-sal="fade" data-sal-duration="500" data-sal-delay="200">
                    <img className="technology-image" src={require("./../../images/css-logo.png")} />
                    <h2 className="name">CSS</h2>
                </div>
                <div className="skill" data-sal="fade" data-sal-duration="500" data-sal-delay="250">
                    <img className="technology-image" src={require("./../../images/html-logo.png")} />
                    <h2 className="name">HTML</h2>
                </div>
                <div className="skill" data-sal="fade" data-sal-duration="500" data-sal-delay="300">
                    <img className="technology-image" src={require("./../../images/mysql-logo.png")} />
                    <h2 className="name">MySQL</h2>
                </div>
                <div className="skill" data-sal="fade" data-sal-duration="500" data-sal-delay="350">
                    <img className="technology-image" src={require("./../../images/git-logo.png")} />
                    <h2 className="name">Git</h2>
                </div>
                <div className="skill" data-sal="fade" data-sal-duration="500" data-sal-delay="400">
                    <img className="technology-image" src={require("./../../images/rails-logo.png")} />
                    <h2 className="name">Ruby on Rails</h2>
                </div>
                <div className="skill" data-sal="fade" data-sal-duration="500" data-sal-delay="450">
                    <img className="technology-image" src={require("./../../images/c++-logo.png")} />
                    <h2 className="name">C++</h2>
                </div>
                <div className="skill" data-sal="fade" data-sal-duration="500" data-sal-delay="500">
                    <img className="technology-image" src={require("./../../images/nodejs-logo.png")} />
                    <h2 className="name">Node.js</h2>
                </div>
                <div className="skill" data-sal="fade" data-sal-duration="500" data-sal-delay="550">
                    <img className="technology-image" src={require("./../../images/mongodb-logo.png")} />
                    <h2 className="name">MongoDB</h2>
                </div>
                <div className="skill" data-sal="fade" data-sal-duration="500" data-sal-delay="600">
                    <img className="technology-image" src={require("./../../images/heroku-logo.png")} />
                    <h2 className="name">Heroku</h2>
                </div>
                <div className="skill" data-sal="fade" data-sal-duration="500" data-sal-delay="650">
                    <img className="technology-image" src={require("./../../images/jquery-logo.png")} />
                    <h2 className="name">jQuery</h2>
                </div>
                <div className="skill" data-sal="fade" data-sal-duration="500" data-sal-delay="700">
                    <img className="technology-image" src={require("./../../images/adobexd-logo.png")} />
                    <h2 className="name">Adobe Xd</h2>
                </div>
            </ul>
        </section>
    );
};

export default Skills;