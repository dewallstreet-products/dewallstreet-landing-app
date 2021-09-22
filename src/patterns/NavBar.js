import React, { useState } from "react";

import { Link } from "react-router-dom";

import "../style/patterns/navbar.scss";

import logo from "../assets/icons/logo.svg";
import profile from "../assets/icons/profile.svg";
import items from "../assets/icons/items.svg";

import passThrough from "../assets/icons/chainPassthrough.svg";

import close from "../assets/icons/close.svg";

const NavBar = ({ title }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggle, setToggle] = useState();
  const renderNavBar = (
    <div className="navbar">
      <div className="navbar_logo">
        <Link to="/"><img src={logo} alt="logo" className="pointer"/></Link>
      </div>
      <div className="navbar_items">
        <span className="text_primary_14_W500_v2">{title}</span>
        <img src={profile} alt="profile" className="ml-20 mr-10" />
        <img
          src={items}
          alt="all"
          onClick={() => {
            setToggleMenu(!toggleMenu);
          }}
        />
      </div>
      <div className="navbar_items1">
        <img src={profile} alt="profile" className="ml-20" />
        <img
          src={items}
          alt="all"
          onClick={() => {
            setToggleMenu(!toggleMenu);
          }}
        />
      </div>
    </div>
  );

  const MenuItem = ({ about, value }) => {
    return (
      <div>
        <div
          className="menu_item"
          onClick={() => {
            setToggle(value);
          }}
        >
          <p
            className={`text_label_16 silverGrad ${
              toggle === value && "primeGrad menuSelect"
            }`}
            style={{
              margin: `${
                toggle === "1" ? "18px 20px 18px 50px" : "18px 30px 18px 50px"
              }`,
            }}
          >
            {about}
          </p>
        </div>
      </div>
    );
  };

  const MenuDetails = ({ value, about }) => {
    return (
      <>
        {toggle === value &&
          about.map((data) => (
            <p className="text_secondaryLite_16_v2 mb-15">{data}</p>
          ))}
      </>
    );
  };

  return (
    <>
      {renderNavBar}
      <div className="menu" style={{ display: toggleMenu ? "block" : "none" }}>
        <div className="menu_grid">
          <div style={{ display: `${toggle === "1" ? "block" : "none"}` }}>
            <MenuDetails
              value="1"
              about={[
                "Board of Directors",
                "Technical Advisory Board",
                "Fellows",
                "Leadership",
                "Indivisual Supporters",
                "Donate",
                "Divesity & Inclusivity",
                "Brand Guidelines",
                "Careers",
                "Contact Us",
              ]}
            />
          </div>
          <div>
            <div className="menu_grid_heading">
              <img
                src={close}
                alt="close"
                onClick={() => {
                  setToggleMenu(!toggleMenu);
                }}
              />
            </div>

            <Link exact to="/" className="linkDecoration">
              <MenuItem about="Home" value="0" />
            </Link>
            <Link exact to="/about" className="linkDecoration">
              <MenuItem about="About Us" value="1" />
            </Link>
            <Link exact to="/product" className="linkDecoration">
              <MenuItem about="Products" value="2" />
            </Link>
            <Link exact to="/service" className="linkDecoration">
              <MenuItem about="Services" value="3" />
            </Link>
            <MenuItem about="Resources" value="4" />
            <MenuItem about="Research" value="5" />
            <MenuItem about="Events" value="6" />
            <MenuItem about="DeWall Street Tools" value="7" />
            <MenuItem about="Training" value="8" />

            <div className="menu_grid_icons"></div>

            <img src={passThrough} alt="pass" className="passImage" />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
