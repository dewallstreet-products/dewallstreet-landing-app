import React from "react";
import "../style/patterns/about.scss";

import AboutCard from "../cards/AboutCard";
import AboutCarousel from "./AboutCarousel";

import { whoAreWe_data, whyUs_data } from "../data/aboutUs";

const About = ({ variant }) => {
  const renderAboutCards = (
    <div className="about_cards mt-30">
      {whoAreWe_data.map((data) => (
        <AboutCard image={data.image} amount={data.amount} data={data.data} />
      ))}
    </div>
  );

  const renderWhyUsCards = (
    <div className="about_cards mt-30">
      {whyUs_data.map((data) => (
        <AboutCard amount={data.amount} data={data.data} />
      ))}
    </div>
  );

  return (
    <div className="about" id="who">
      {variant === "whoAreWe" ? (
        <>
          <AboutCarousel
            heading="WHAT'S IN HERE FOR YOU ?"
            para={` for developing, incubating, funding, accelerating, scaling and promoting the decentralized ecosystem start-ups, teams, products, services and communities with combined community policies, internationally regulated compliances,
            and press coverages for mass reach and adoptions.`}
            whoAreWe="true"
          />
          {renderAboutCards}
        </>
      ) : (
        <>
          <AboutCarousel
            heading="WHY US"
            whyus="true"
            para="Get onboarded with the B2B Business acumen and dominate the Crypto domains through our best in class product delivery. Clients into comrades that is what DeWall Street is known for? Looking for the most productive Blockchain Development Company kudos you are already into it. We don’t meet the market's requirements, rather we are the market’s requirements. Trade-mark techie team of expertise, organized by the Industrialists knowing nuke and corner of the market’s performance. What's next? Avail your Blockchain Development with DeWall Street Corporation as we have the capability to make the difference in the existing Cryptosphere of the world. "
          />
          {renderWhyUsCards}
        </>
      )}
    </div>
  );
};

export default About;
