import React from "react";
import { Link } from "react-router-dom";

import Header from "../components/Header";

import séparateur from "../assets/séparateur.svg";
import bandeau_left1 from "../assets/bandeau_left1.svg";
import bandeau_right1 from "../assets/bandeau_right1.svg";
import trumpet from "../assets/trumpet.svg";
import paysan from "../assets/paysan.svg";
import clerge from "../assets/clerge.svg";
import noblesse from "../assets/noblesse.svg";
// import knights from "../assets/knights.mp4";

const Home = () => {
  return (
    <>
      {/* <video
        style={{
          opacity: 0.1,
          position: "fixed",
          right: 0,
          bottom: 0,
          minWidth: "100%",
          minHeight: "100%",
        }}
        src={knights}
        autoPlay={true}
        loop={true}
        muted={true}
      ></video> */}
      <div className="background">
        <Header />
        <div className="titleHome">
          <h1 id="classe">CHOIX DE CLASSE</h1>
          <img id="separateur" src={séparateur} alt="séparateur"></img>
        </div>
        <div id="décorsHome">
          <img
            className="image_bandeau"
            src={bandeau_left1}
            alt="bandeau_left"
          />
          <img className="image" src={trumpet} alt="trumpet" />
          <img
            className="image_bandeau"
            src={bandeau_right1}
            alt="bandeau_right"
          />
        </div>
        <div className="link">
          <Link className="fav" to="/metiersfavoris">
            METIERS FAVORIS
          </Link>
          <Link className="fav" to="/metierdegradants">
            METIERS DEGRADANTS
          </Link>
        </div>
        <div className="cardHome">
          <Link className="paysan" to="/classe/Tiers_Etat">
            <img className="paysan" src={paysan} alt="paysan" />
          </Link>
          <Link className="clerge" to="/classe/Clergé">
            <img className="clerge" src={clerge} alt="clerge" />
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
