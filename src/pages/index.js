import React, { useEffect } from 'react';
import Hero from './../components/hero';
import Navbar from './../components//navigation/navbar';
import Info from '../components/navigation/info';
import Email from '../components/navigation/email';
import About from './../components/about';
import { Skills } from './../components/skills/skills';
import Contact from './../components/contact';
import Footer from './../components/footer';
import { graphql } from 'gatsby';
import { MainProjects } from '../components/projects/main_projects';
import { OtherProjects } from '../components/projects/other_projects';

const Index = ({ data }) => {
    useEffect(() => {
        if(typeof window === 'undefined' || typeof document === 'undefined') {
            return;
        }

        let currentScroll = 0;
        window.setTimeout(() => {
            document.getElementsByClassName("info-navbar")[0].classList.add("show-up");
            document.getElementsByClassName("email-navbar")[0].classList.add("show-up");
        }, 500)

        document.addEventListener("scroll", event => {
            if (document.documentElement.scrollTop === 0 || document.documentElement.scrollTop > 5940) {
                document.getElementsByClassName("navbar")[0].classList.remove("show-down");
                document.getElementsByClassName("info-navbar")[0].classList.remove("hide-down");
                document.getElementsByClassName("email-navbar")[0].classList.remove("hide-down");
                document.getElementsByClassName("navbar")[0].classList.add("show-down");
                document.getElementsByClassName("info-navbar")[0].classList.add("show-up");
                document.getElementsByClassName("email-navbar")[0].classList.add("show-up");
                currentScroll = document.documentElement.scrollTop;
            }
            else if (document.documentElement.scrollTop > currentScroll) {
                document.getElementsByClassName("navbar")[0].classList.remove("show-down");
                document.getElementsByClassName("navbar")[0].classList.add("hide-up");
                document.getElementsByClassName("info-navbar")[0].classList.remove("hide-down");
                document.getElementsByClassName("info-navbar")[0].classList.add("show-up");
                document.getElementsByClassName("email-navbar")[0].classList.remove("hide-down");
                document.getElementsByClassName("email-navbar")[0].classList.add("show-up");
                currentScroll = document.documentElement.scrollTop;
            } else if (document.documentElement.scrollTop < currentScroll) {
                document.getElementsByClassName("navbar")[0].classList.remove("hide-up");
                document.getElementsByClassName("navbar")[0].classList.add("show-down");
                document.getElementsByClassName("info-navbar")[0].classList.remove("show-up");
                document.getElementsByClassName("info-navbar")[0].classList.add("hide-down");
                document.getElementsByClassName("email-navbar")[0].classList.remove("show-up");
                document.getElementsByClassName("email-navbar")[0].classList.add("hide-down");
                currentScroll = document.documentElement.scrollTop;
            }
        })
    })

    return (
        <div id="root">
            <title>{data.site.siteMetadata.title}</title>
            <Navbar />
            <Info />
            <Email />
            <Hero />
            <About />
            <MainProjects />
            <OtherProjects />
            <Skills />
            <Contact />
            <Footer />
        </div>
    );
};

export default Index;

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`;