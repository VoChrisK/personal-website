import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Hero = () => {
const one = <h3 className="subtitle first" style={{"transition-delay":"300ms"}}>Hello, my name is</h3>;
    const two = <h1 className="title second" style={{ "transition-delay": "1900ms" }}>Chris Vo.</h1>;
    const three = <h1 className="title third" style={{ "transition-delay": "2600ms" }}>Mathematician turned Software Engineer.</h1>;
    const four = <p className="description fourth" style={{ "transition-delay": "3300ms" }}>I'm a software engineer based in San Jose, CA specializing in building websites and applications with a focus in intuitivity, modularity, and presentation.</p>;

    let list = [one, two, three, four]

    return (
        <div className="hero">
            <TransitionGroup>
                {
                    list.map((ele, idx) => {
                        if(idx === 0) {
                            return (
                                <CSSTransition key={idx} appear classNames="fade-left" timeout={1300}>
                                    {ele}
                                </CSSTransition> 
                            )
                        } else {
                            return (
                                <CSSTransition key={idx} appear classNames="fade-up" timeout={300 + (900 * (idx + 2))}>
                                    {ele}
                                </CSSTransition> 
                            )
                        }
                    })
                }
            </TransitionGroup>   
        </div>
    );
};

export default Hero;