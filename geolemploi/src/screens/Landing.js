import React from 'react';
import { Link } from 'react-router-dom';
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
                <Link to="/home">
            <img id='buttonEnter' src={buttonEnter} alt='enter button' />
            </Link>
            </div>
        </div>
    
        </>
    )
}


export default Landing;