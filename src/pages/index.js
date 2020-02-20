import React from 'react';
import Hero from './../components/hero';
import Navbar from './../components/navbar';
import About from './../components/about';
import Projects from './../components/projects';

const Index = () => {
    return (
        <div id="root">
            <Navbar /> 
            <Hero />
            <About />
            <Projects />
        </div>
    );
};

export default Index;