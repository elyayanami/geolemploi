import React from 'react';
import logo from '../assets/Logo.svg';
import buttonEnter from '../assets/buttonEnter.svg';
import Header from '../components/Header';
const Landing = () => {
    return (
        <>
        <div className="background">
            <Header/>
            <div className="All">
            <img id='logo' src={logo} alt='logo' />
            </div>
            <div className="Button">
            <img id='buttonEnter' src={buttonEnter} alt='enter button' />
            <h1 id='title'>ENTER</h1>
            </div>
        </div>
    
        </>
    )
}


export default Landing;