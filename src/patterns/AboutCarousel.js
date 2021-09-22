import React from "react";
import "../style/patterns/aboutCarousel.scss";

import chain from "../assets/icons/chainClubbed.svg";
import arrow from "../assets/icons/arrowRight.svg";

import NavBar from "./NavBar";
import Button from "../components/Button";

const AboutCarousel = ({ heading, para, variant, ...rest }) => {
  const renderAbout = (
    <>
      <p className="text_primary_14_W500 mb-20">{heading}</p>

      <p className="text_primary_30 mb-20 silverGrad">
        Empowering generations of <span className="primeGrad">open source</span>{" "}
        innovators
      </p>
      <p className="text_secondaryLite_14">{para}</p>
    </>
  );

  const renderProduct = (
    <>
      <p className="text_primary_14_W500 mb-20">{heading}</p>

      <p className="text_primary_30 mb-20 silverGrad">
        The customer and employee
        <span className="primeGrad"> delight engine</span> you deserve
      </p>
      <p className="text_secondaryLite_14">{para}</p>
      <p className="buttonWrap mt-30">
        <span className="text_primary_14_W500_v3 mt-5">Browse projects</span>
        <Button variant="primary" children="Start free trail" imgLeft={arrow} />
      </p>
    </>
  );

  const renderService = (
    <>
      <p className="text_primary_14_W500 mb-20">{heading}</p>

      <p className="text_primary_30 mb-20 silverGrad">
        #Top rated <span className="primeGrad">open source </span> development
        company
      </p>
      <p className="text_secondaryLite_14">{para}</p>
      <p className="buttonWrap mt-30">
        <Button variant="secondary" children="Get a quote" />
        <Button variant="secondary" children="Get a free demo" />
      </p>
    </>
  );

  const renderWhyUs = (
    <>
      <p className="text_primary_14_W500 mb-20">{heading}</p>

      <p className="text_primary_30 mb-20 silverGrad">
        Why choose DeWall Street Corp. as your go to{" "}
        <span className="primeGrad">open source </span> blockchain development
        Company?
      </p>
      <p className="text_secondaryLite_14">{para}</p>
      <p className="buttonWrap mt-30">
        <Button variant="secondary" children="Get a quote" />
        <Button variant="secondary" children="Get a free demo" />
      </p>
    </>
  );

  const renderWhoAreWe = (
    <>
      <p className="text_primary_14_W500 mb-20">{heading}</p>

      <p className="text_primary_30 mb-20 silverGrad">
        All in one global <span className="primeGrad">community</span> platform for decentralization
      </p>
      <p className="text_secondaryLite_14">{para}</p>
      <p className="buttonWrap mt-30">
        <Button
          variant="secondary"
          children="Apply for membership now."
          type="submit"
        />
      </p>
    </>
  );

  const renderCarousel = (
    <div className="aboutCarousel_data">
      <div>
        {rest.about && renderAbout}
        {rest.product && renderProduct}
        {rest.service && renderService}
        {rest.whyus && renderWhyUs}
        {rest.whoAreWe && renderWhoAreWe}
      </div>
      <div>
        <img src={chain} alt="chain" />
      </div>
    </div>
  );

  return (
    <div className="aboutCarousel">
      {!(rest.whoAreWe || rest.whyus) && <NavBar
        title={rest.about ? "About" : rest.product ? "Product" : "Service"}
      />}
      {renderCarousel}
    </div>
  );
};

export default AboutCarousel;
