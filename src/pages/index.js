import React from 'react';
import Hero from './../components/hero';
import Navbar from './../components/navbar';
import About from './../components/about';

const Index = () => {
    return (
        <div id="root">
            <Navbar /> 
            <Hero />
            <About />
        </div>
    );
};

export default Index;