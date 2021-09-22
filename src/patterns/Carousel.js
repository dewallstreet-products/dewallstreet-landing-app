import React from "react";
import "../style/patterns/carousel.scss";
import "../style/patterns/navbar.scss";
import "../style/patterns/menu.scss";

import fb from "../assets/icons/fb.svg";
import slack from "../assets/icons/slack.svg";
import linkedin from "../assets/icons/linkedin.svg";
import discord from "../assets/icons/discord.svg";
import twitter from "../assets/icons/twitter.svg";

import arrowRight from "../assets/icons/arrowRight.svg";
import scroll from "../assets/icons/scroll.svg";

import Button from "../components/Button";
import NavBar from "./NavBar";

const Carousel = () => {
  const renderhero = (
    <div className="hero">
      <div>
        <p className=" hero_heading mb-20 text_primary_14_W500">
          <span>BUILD</span> <span>PITCH</span> <span>SCALE</span>
        </p>
        <p className="mb-20  text_primary_30">
          One<span className="primeGrad"> limitless </span> widespread network for mainstream decentralization</p>
        <p className="mb-30 text_secondaryLite_14">
          We are an intercontinental community of technologists, artists and decentralists, building, promoting, scaling and leading Decentralized Ecosystems (DeCo's),
          Decentralized Autonomous Organizations (DAO'S), Decentralized Finances (DeFi's), Decentralized Protocols (DePro's) and its usecases as remotely accessible technological financial and
          educational products and services across seven continents under one regulated conglomeration with Combined Community Policies (CCP).{" "}
        </p>
        <div className="hero_link">
          <p className="mr-20 mt-10 text_primary_14_W500_v2 pointer">Read Inception Paper</p>

          <Button
            variant="primary"
            children="Join the forum."
            type="submit"
            imgLeft={arrowRight}
          ></Button>
        </div>
      </div>
    </div>
  );

  const renderFoot = (
    <div className="heroFoot">
      <div className="heroFoot_social">
        <span className="text_primary_12">Stay in touch</span>
        <img src={fb} alt="fb" />
        <img src={linkedin} alt="ln" />
        <img src={twitter} alt="tw" />
        <img src={discord} alt="discord" />
        <img src={slack} alt="slack" />
      </div>
      <div className="heroFoot_scroll">
        <a href="#who"><img src={scroll} alt="scroll" /></a>
        <p className="text_primary_14_W500_v2">Scroll Down</p>
      </div>
    </div>
  );

  return (
    <>
      <div className="heroSection">
        <NavBar title="Home"/>
        {renderhero}
        {renderFoot}
      </div>
    </>
  );
};

export default Carousel;
