import React, { useRef } from "react";
import { Link } from "react-router-dom";

import Header from "../components/Header";

import séparateur from "../assets/séparateur.svg";
import bandeau_left from "../assets/bandeau_left.svg";
import bandeau_right from "../assets/bandeau_right1.png";
import trumpet from "../assets/trumpet.svg";
import paysan from "../assets/paysan.svg";
import clerge from "../assets/clerge.svg";
import noblesse from "../assets/noblesse.svg";
import shrekTrumpet from "../assets/shrekTrumpet.mp3";

const Home = () => {

  const audioRef = useRef(null);
  
  const handleClick = () => {
    audioRef.current.play();
  }

  return (
    <>
      <div className="backgroundHome">
        <Header />
        <div className="titleHome">
          <h1 id="classe">CHOIX DE CLASSE</h1>
          <img id="separateur" src={séparateur} alt="séparateur"></img>
        </div>
        <div id="décorsHome">
        <Link className="fav" to="/metiersfavoris">
          <img
            className="bandeau_left"
            src={bandeau_left}
            alt="métiers favoris"
          />
          </Link>
          <div>
          <img className="image" src={trumpet} alt="trumpet" onClick={handleClick}/>
          <audio ref={audioRef} src={shrekTrumpet}></audio>
          </div>      
          <Link className="fav" to="/metierdegradants">
          <img
            className="bandeau_right"
            src={bandeau_right}
            alt="métier dégradants"
          />
          </Link>
        </div>
        <div className="cardHome">
          <Link className="paysan" to="/classe/Tiers_Etat">
            <img className="paysan" src={paysan} alt="tiers-état" />
          </Link>
          <Link className="clerge" to="/classe/Clergé">
            <img className="clerge" src={clerge} alt="clergé" />
          </Link>
          <Link className="noblesse" to="/classe/Noblesse">
            <img className="noblesse" src={noblesse} alt="noblesse" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
