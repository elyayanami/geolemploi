import React from 'react';
import logo from '../assets/Logo.svg';
import buttonEnter from '../assets/buttonEnter.svg';

const Landing = () => {
    return (
        <>
        <div className="background">
            <div className="All">
            <img id='logo' src={logo} alt='logo' />
            </div>
            <img id='buttonEnter' src={buttonEnter} alt='enter button' />
            <h1 id='title'>ENTER</h1>
        </div>
    
        </>
    )
}


export default Landing;