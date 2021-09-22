import React from "react";

import "../style/patterns/opensource.scss";

import OpensourceCard from "../cards/OpensourceCard";
import Button from "../components/Button";

import { decentralized, blockchain } from "../data/openSource";

const Opensource = ({ variant }) => {
  const renderOpensourceAbout = (
    <div className="opensource_about">
      <p className="mb-20 text_dark_24">
        MISSION STATEMENTS | {" "}
        <span className="primeGrad"> 2021</span>
      </p>
      <p className="text_secondaryDark_14">
        Though our vision and ideology is unitedly one, there are various progressive missions that we continuously work on
        every year to ensure progression and keep the road to vision clear and determinant.
      </p>
    </div>
  );

  const renderBlockchainAbout = (
    <div className="ecosystem_about">
      <p className="mb-20 text_dark_24">
        Our core <span className="primeGrad">Blockchain Development</span>{" "}
        solutions and services
      </p>
      <p className="text_secondaryDark_14">
        Our Blockchain Development Services focus on improving the Blockchain
        use case to its participants. The Services serve different spheres of
        influence through its widespread usability and utility contributing in
        multiple domains.
      </p>
    </div>
  );

  const renderOpensourceCards = (
    <div className="opensource_cards">
      {decentralized.map((data) => (
        <OpensourceCard percent={data.percent} data={data.data} />
      ))}
    </div>
  );

  const renderBlockchainCards = (
    <div className="opensource_cards">
      {blockchain.map((data) => (
        <OpensourceCard percent={data.percent} data={data.data} image={data.image} />
      ))}
    </div>
  );

  return (
    <div className="opensource">
      {variant === "opensource" ? (
        <>
          {renderOpensourceAbout}
          {renderOpensourceCards}
          <div className="opensource_button">
            <Button
              variant="secondaryBlack"
              children="Read mission reports"
              type="submit"
            ></Button>
          </div>
        </>
      ) : (
        <>
          {renderBlockchainAbout}
          {renderBlockchainCards}
          <div className="opensource_button"></div>
        </>
      )}
    </div>
  );
};

export default Opensource;
