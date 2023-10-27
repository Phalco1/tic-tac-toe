import React, { useState, useEffect } from 'react';
// import LogoTitle2 from '../Assets/IMG_0508.png';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import Loader from 'react-loaders';

const Homescreen = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['a', 'u', 'l', ',']
    const jobArray = ['W', 'e', 'b', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']

    useEffect(() => {
         setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);
    }, [])
    
    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i</span>
                <span className={`${letterClass} _12`}>,</span>
                <br /> 
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'</span>
                <span className={`${letterClass} _14`}>m</span>
                {/* <img src={LogoTitle2} alt="developer" /> */}
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={0} />
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={3} />
                </h1>
            </div>
        </div>
        <Loader type="pacman" />
        </>
    );
}

export default Homescreen