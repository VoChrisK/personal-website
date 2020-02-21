import React from 'react';
import Hero from './../components/hero';
import Navbar from './../components/navbar';
import Info from './../components/info';
import About from './../components/about';
import Projects from './../components/projects';
import Skills from './../components/skills';
import Contact from './../components/contact';

// let currentScroll = 0;
// window.onscroll = function() {
//     if (document.documentElement.scrollTop > currentScroll) {
//         this.document.getElementsByClassName("navbar")[0].classList.add("hide");
//         currentScroll = document.documentElement.scrollTop;
//     } else {
//         currentScroll = document.documentElement.scrollTop;        
//     }

// }

const Index = () => {
    return (
        <div id="root">
            <Navbar />
            <Info />
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Contact />
        </div>
    );
};

export default Index;