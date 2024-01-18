import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => {
  return (
    <div className="info-box">
      <p className="font-medium sm:text-xl text-center"> {text}</p>

      <Link to={link} className="neo-brutalism-white neo-btn">
        {btnText}
        <img src={arrow} alt="arrow right" className="w-4 h-4 object-contain" />
      </Link>
    </div>
  );
};

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Ciao, sono <span className="font-semibold">Andrea</span> 👋
      <br />
      Un programmatore Italiano
    </h1>
  ),
  2: (
    <InfoBox
      text="Ho studiato e ho appreso diverse skill durante il mio viaggio nel mondo della programmazione"
      link="/about"
      btnText="Scopri di più"
    />
  ),
  3: (
    <InfoBox
      text="Ho realizzato diversi progetti. Curiosi di quello che ho fatto?"
      link="/projects"
      btnText="Visita il mio portfolio"
    />
  ),
  4: (
    <InfoBox
      text="Hai un'idea e hai bisogno di un programmatore per realizzarla? Ti mancano pochi click!"
      link="/contact"
      btnText="Contattami"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
