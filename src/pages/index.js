import React, { useEffect } from 'react';
import Hero from './../components/hero';
import Navbar from './../components/navbar';
import Info from './../components/info';
import About from './../components/about';
import Projects from './../components/projects';
import Skills from './../components/skills';
import Contact from './../components/contact';
import Footer from './../components/footer';

const Index = () => {
    useEffect(() => {
        if(typeof window === 'undefined' || typeof document === 'undefined') {
            return;
        }

        let currentScroll = 0;
        window.setTimeout(() => {
            document.getElementsByClassName("info-navbar")[0].classList.add("show-up");
        }, 500)

        document.addEventListener("scroll", event => {
            if (document.documentElement.scrollTop === 0 || document.documentElement.scrollTop > 5940) {
                document.getElementsByClassName("navbar")[0].classList.remove("show-down");
                document.getElementsByClassName("info-navbar")[0].classList.remove("hide-down");
                document.getElementsByClassName("navbar")[0].classList.add("show-down");
                document.getElementsByClassName("info-navbar")[0].classList.add("show-up");
                currentScroll = document.documentElement.scrollTop;
            }
            else if (document.documentElement.scrollTop > currentScroll) {
                document.getElementsByClassName("navbar")[0].classList.remove("show-down");
                document.getElementsByClassName("navbar")[0].classList.add("hide-up");
                document.getElementsByClassName("info-navbar")[0].classList.remove("hide-down");
                document.getElementsByClassName("info-navbar")[0].classList.add("show-up");
                currentScroll = document.documentElement.scrollTop;
            } else if (document.documentElement.scrollTop < currentScroll) {
                document.getElementsByClassName("navbar")[0].classList.remove("hide-up");
                document.getElementsByClassName("navbar")[0].classList.add("show-down");
                document.getElementsByClassName("info-navbar")[0].classList.remove("show-up");
                document.getElementsByClassName("info-navbar")[0].classList.add("hide-down");
                currentScroll = document.documentElement.scrollTop;
            }
        })
    })

    return (
        <div id="root">
            <Navbar />
            {/* <Sidebar /> */}
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