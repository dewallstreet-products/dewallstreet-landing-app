import React, { useState } from "react";
import "../style/patterns/contribution.scss";

import arrowRight from "../assets/icons/arrowRight.svg";
import arrowRightB from "../assets/icons/arrowRightBlue.svg";
import arrowDown from "../assets/icons/arrowDown.svg";
import arrowUpB from "../assets/icons/arrowUpB.svg";
import Button from "../components/Button";

const Contribution = () => {
  const [toggle, setToggle] = useState("1");

  const ContributionList = ({ heading, value, imageB, image }) => {
    return (
      <div
        className="contribution_list"
        onClick={() => {
          setToggle(`${value}`);
        }}
        style={{
          borderBottom:
            `${value}` !== toggle && "0.8px solid rgba(255, 255, 255, 0.05)",
            cursor:"pointer"
        }}
      >
        <p
          className={
            `${value}` === toggle
              ? "text_secondaryDark_16 primeGrad"
              : "text_secondaryDark_16"
          }
        >
          {heading}
        </p>
        <img src={`${value}` === toggle ? imageB : image} alt="arrow" />
      </div>
    );
  };

  const ContributionData = ({ heading, data, value }) => {
    return (
      <div
        className="contribution_detail"
        style={{ display: `${value}` === toggle ? "block" : "none" }}
      >
        <p className="text_primary_16 mb-20">{heading}</p>
        <p className="text_secondaryLite_14 mb-30">{data}</p>
        <div>
          <Button variant="secondary" children="Download Brochure" />
        </div>
      </div>
    );
  };

  return (
    <div className="contribution">
      <div>
        <p className="text_primary_14_W500 mb-20 silverGrad">
          OUR CONTRIBUTIONS TO THE WORLD
        </p>
        <p className="text_primary_24 mb-30 silverGrad">
          We assist the world to scale and steer in a decentralized way.
        </p>
      </div>
      <div className="contribution_verticalView">
        <div>
          <ContributionList
            heading="I'm a technologist"
            value="1"
            image={arrowRight}
            imageB={arrowRightB}
          />
          <ContributionList
            heading="I'm an artist"
            value="2"
            image={arrowRight}
            imageB={arrowRightB}
          />
          <ContributionList
            heading="I'm an entrepreneur"
            value="3"
            image={arrowRight}
            imageB={arrowRightB}
          />
          <ContributionList
            heading="I'm an investor"
            value="4"
            image={arrowRight}
            imageB={arrowRightB}
          />
              <ContributionList
            heading="I'm an investor"
            value="4"
            image={arrowRight}
            imageB={arrowRightB}
          />
        </div>
        <div>
          <ContributionData
            heading="No agendas. No politics. Just stuff developers need to build and maintain projects."
            data="The key to a successful open technology project is to ensure a neutral playing field for all developers, 
          technologists, and companies to collectively contribute to project evolution and growth. The Linux Foundation 
          was built on the idea of the democratization of code and scaling adoption, for all projects equally. Expert legal 
          and governance support programs ensure everyone is on the same playing field."
            value="1"
          />
          <ContributionData
            heading="Helping developers gather the necessary elements to create critical project mass."
            data="The promise of open source runs the gamut from the smallest academic research projects to enterprise 
          innovations that can transform industries and create new markets. At the Linux Foundation, we have a proven 
          track-record of helping aspiring projects to create new technology categories by identifying trends early, and 
          igniting the adoption of innovative, upcoming technologies by building and scaling developer ecosystems."
            value="2"
          />
          <ContributionData
            heading="Transforming code into commerce with OSS-centric marketing tools and support programs."
            data="The biggest hurdle for any project is preparing for enterprise-wide adoption. The Linux Foundation 
          provides dedicated programs to scale your developer and user communities. We provide project operations support, 
          IT infrastructure management, event management, training and certification, marketing, and membership development 
          to attract the biggest companies in the world to accelerate scale and adoption. "
            value="3"
          />
          <ContributionData
            heading="Grok what’s really happening in your community. Manage your code."
            data="Without the proper tools to understand how a project is performing and how to take action on those insights, it’s 
          challenging to efficiently drive a project forward without burning resources. The Linux Foundation is the only organization
           with a comprehensive platform that provides the tooling and analytics capabilities to 
          streamline project operations and community engagement, automate technology infrastructure, simplify project management."
            value="4"
          />
        </div>
      </div>
      <div className="contribution_horizonatlView">
        <div>
          <ContributionList
            heading="Neutral home for code and collaboration"
            value="1"
            image={arrowDown}
            imageB={arrowUpB}
          />
          <ContributionData
            heading="No agendas. No politics. Just stuff developers need to build and maintain projects."
            data="The key to a successful open technology project is to ensure a neutral playing field for all developers, 
          technologists, and companies to collectively contribute to project evolution and growth. The Linux Foundation 
          was built on the idea of the democratization of code and scaling adoption, for all projects equally. Expert legal 
          and governance support programs ensure everyone is on the same playing field."
            value="1"
          />
          <ContributionList
            heading="Ecosystem curation and community building"
            value="2"
            image={arrowDown}
            imageB={arrowUpB}
          />
          <ContributionData
            heading="Helping developers gather the necessary elements to create critical project mass."
            data="The promise of open source runs the gamut from the smallest academic research projects to enterprise 
          innovations that can transform industries and create new markets. At the Linux Foundation, we have a proven 
          track-record of helping aspiring projects to create new technology categories by identifying trends early, and 
          igniting the adoption of innovative, upcoming technologies by building and scaling developer ecosystems."
            value="2"
          />
          <ContributionList
            heading="We’re enterprise ready, the OSS way"
            value="3"
            image={arrowDown}
            imageB={arrowUpB}
          />
          <ContributionData
            heading="Transforming code into commerce with OSS-centric marketing tools and support programs."
            data="The biggest hurdle for any project is preparing for enterprise-wide adoption. The Linux Foundation 
          provides dedicated programs to scale your developer and user communities. We provide project operations support, 
          IT infrastructure management, event management, training and certification, marketing, and membership development 
          to attract the biggest companies in the world to accelerate scale and adoption. "
            value="3"
            image={arrowDown}
            imageB={arrowUpB}
          />
          <ContributionList
            heading="We provide insights and tools to succeed"
            value="4"
            image={arrowDown}
            imageB={arrowUpB}
          />
          <ContributionData
            heading="Grok what’s really happening in your community. Manage your code."
            data="Without the proper tools to understand how a project is performing and how to take action on those insights, it’s 
          challenging to efficiently drive a project forward without burning resources. The Linux Foundation is the only organization
           with a comprehensive platform that provides the tooling and analytics capabilities to 
          streamline project operations and community engagement, automate technology infrastructure, simplify project management."
            value="4"
          />
        </div>
      </div>
    </div>
  );
};

export default Contribution;
