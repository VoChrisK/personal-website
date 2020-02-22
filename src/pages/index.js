import React from 'react';
import Hero from './../components/hero';
import Navbar from './../components/navbar';
import Info from './../components/info';
import About from './../components/about';
import Projects from './../components/projects';
import Skills from './../components/skills';
import Contact from './../components/contact';
import Footer from './../components/footer';

let currentScroll = 0;
window.onscroll = function() {
    if (document.documentElement.scrollTop > currentScroll) {
        this.document.getElementsByClassName("navbar")[0].classList.remove("show-down");
        this.document.getElementsByClassName("navbar")[0].classList.add("hide-up");
        this.document.getElementsByClassName("info-navbar")[0].classList.remove("hide-down");
        this.document.getElementsByClassName("info-navbar")[0].classList.add("show-up");
        currentScroll = document.documentElement.scrollTop;
    } else {
        this.document.getElementsByClassName("navbar")[0].classList.remove("hide-up");
        this.document.getElementsByClassName("navbar")[0].classList.add("show-down");
        this.document.getElementsByClassName("info-navbar")[0].classList.remove("show-up");
        this.document.getElementsByClassName("info-navbar")[0].classList.add("hide-down");
        currentScroll = document.documentElement.scrollTop;        
    }

}

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
            <Footer />
        </div>
    );
};

export default Index;