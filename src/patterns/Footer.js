import React from "react";
import { Link } from "react-router-dom";

import "../style/patterns/footer.scss";

import fb from "../assets/icons/fbB.svg";
import slack from "../assets/icons/slackB.svg";
import linkedin from "../assets/icons/linkedinB.svg";
import discord from "../assets/icons/discordB.svg";
import twitter from "../assets/icons/twitterB.svg";
// import chainPassthrough from "../assets/icons/chainPassthrough.svg";
import chainPassthrough from "../assets/icons/networkiconLite.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="text_dark_14">
        <p className="mb-30">
          Copyright | 2021 DeWall Street Corporation. All rights reserved.
          DeWall Street Corporation has registered trademarks and uses
          trademarks. For a list of trademarks of DeWall Street Corporation,
          please see our Trademark Usage page. DeWall Street is a registered
          trademark of ZEVO Corporation.
        </p>
        <Link to="/privacy" style={{textDecoration:"none"}}>
          <p
            className="mb-30"
            style={{ color: "#0090CE" }}
            className="pointer mb-30"
          >
            Terms of Use | Privacy Policy | Bylaws | Antitrust Policy | Good
            Standing Policy
          </p>
        </Link>
        <div className="footer_social">
          <span className="text_primary_12" style={{ color: "#495358" }}>
            Follow Us:
          </span>
          <img src={fb} alt="fb" />
          <img src={linkedin} alt="ln" />
          <img src={discord} alt="discord" />
          <img src={twitter} alt="tw" />
          <img src={slack} alt="slack" />
        </div>
      </div>
      <div>
        <img src={chainPassthrough} alt="chain" />
      </div>
    </div>
  );
};

export default Footer;
