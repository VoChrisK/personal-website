import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Hero = () => {
const one = <h3 className="subtitle first" style={{"transitionDelay":"1300ms"}}>Hello, my name is</h3>;
    const two = <h1 className="title second" style={{ "transitionDelay": "2050ms" }}>Chris Vo</h1>;
    const three = <h1 className="title third" style={{ "transitionDelay": "2800ms" }}>Mathematician turned Software Engineer</h1>;
    const four = <p className="description fourth" style={{ "transitionDelay": "3550ms" }}>I'm a software engineer based in San Jose, CA specializing in building websites and applications with a focus in intuitive design and visual presentation</p>;

    let list = [one, two, three, four]

    return (
        <div className="hero">
            <TransitionGroup>
                {
                    list.map((ele, idx) => {
                            return (
                                <CSSTransition key={idx} appear classNames="fade-up" timeout={1300 + (750 * (idx + 1))}>
                                    {ele}
                                </CSSTransition> 
                            )
                    })
                }
            </TransitionGroup>   
        </div>
    );
};

export default Hero;