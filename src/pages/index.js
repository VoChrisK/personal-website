import React from 'react';
import Hero from './../components/hero';
import Navbar from './../components/navbar';
import Info from './../components/info';
import About from './../components/about';
import Projects from './../components/projects';
import Skills from './../components/skills';

const Index = () => {
    return (
        <div id="root">
            <Navbar />
            <Info />
            <Hero />
            <About />
            <Projects />
            <Skills />
        </div>
    );
};

export default Index;