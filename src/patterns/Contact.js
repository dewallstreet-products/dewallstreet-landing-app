import React, { useState } from "react";
import "../style/patterns/contact.scss";

import enter from "../assets/icons/enter.svg";
import loading from "../assets/icons/loading.svg";
import circleUp from "../assets/icons/circleUp.svg";
import circleDown from "../assets/icons/circleDown.svg";
import Button from "../components/Button";

import ques1 from "../assets/icons/ques1.svg";
import ques2 from "../assets/icons/ques2.svg";
import ques3 from "../assets/icons/ques3.svg";
import ques4 from "../assets/icons/ques4.svg";
import arrowUWhite from "../assets/icons/arrowUpWhite.svg";

const Contact = () => {
  const [toggle, setToggle] = useState("0");

  const Ques = () => {
    return (
      <>
        <div>
          <div className="contact_left">
            <div>
              <p className="mb-20 text_primary_14_W500 silverGrad">Newsletter</p>
              <p className="mb-20 text_primary_24 silverGrad">
                Join our weekly community mailing list
              </p>
              <p className="mb-30 text_secondaryLite_14">
                Sign up to our newsletter to receive product updates, exclusive
                project ideas, and webminars.{" "}
              </p>
              <div className="contact_link">
                <Button
                  variant="secondary"
                  children="Count me in"
                  type="submit"
                ></Button>
                <p className="ml-20 mt-10">
                  <span className="text_secondaryLite_14">press Enter</span>
                  <img src={enter} alt="arrow" />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="contact_social">
          <div>
            <img src={loading} alt="loading" />
            <p className="text_secondaryLite_14">
              0 out of 4 questions answered
            </p>
          </div>
          <div className="contact_social_arrow">
            <img src={circleUp} alt="up" />
            <img src={circleDown} alt="down" onClick={() => setToggle("1")} />
          </div>
        </div>
      </>
    );
  };

  const Ques1 = () => {
    return (
      <>
        <div>
          <p className="mb-20 text_primary_24 silverGrad">
            First up, what’s your name?
          </p>
          <input type="text" placeholder="Type your answer here" />
          <div className="contact_link">
            <Button variant="secondary" children="Okay" type="submit"></Button>
            <p className="ml-20 mt-10">
              <span className="text_secondaryLite_14">press Enter</span>
              <img src={enter} alt="arrow" />
            </p>
          </div>
        </div>
        <div className="contact_social">
          <div>
            <img src={ques1} alt="loading" />
            <p className="text_secondaryLite_14">
              1 out of 4 questions answered
            </p>
          </div>
          <div className="contact_social_arrow">
            <img src={arrowUWhite} alt="up" onClick={() => setToggle("0")} />
            <img src={circleDown} alt="down" onClick={() => setToggle("2")} />
          </div>
        </div>
      </>
    );
  };

  const Ques2 = () => {
    return (
      <>
        <div>
          <p className="mb-20 text_primary_24 silverGrad">And your surname?</p>
          <input type="text" placeholder="Type your answer here" />
          <div className="contact_link">
            <Button variant="secondary" children="Okay" type="submit"></Button>
            <p className="ml-20 mt-10">
              <span className="text_secondaryLite_14">press Enter</span>
              <img src={enter} alt="arrow" />
            </p>
          </div>
        </div>
        <div className="contact_social">
          <div>
            <img src={ques2} alt="loading" />
            <p className="text_secondaryLite_14">
              2 out of 4 questions answered
            </p>
          </div>
          <div className="contact_social_arrow">
            <img src={arrowUWhite} alt="up" onClick={() => setToggle("1")} />
            <img src={circleDown} alt="down" onClick={() => setToggle("3")} />
          </div>
        </div>
      </>
    );
  };

  const Ques3 = () => {
    return (
      <>
        <div>
          <p className="mb-20 text_primary_24 silverGrad email">
            Great! Now what’s your email address <div className="line"></div>?
          </p>
          <input type="text" placeholder="Type your answer here" />
          <div className="contact_link">
            <Button variant="secondary" children="Okay" type="submit"></Button>
            <p className="ml-20 mt-10">
              <span className="text_secondaryLite_14">press Enter</span>
              <img src={enter} alt="arrow" />
            </p>
          </div>
        </div>
        <div className="contact_social">
          <div>
            <img src={ques3} alt="loading" />
            <p className="text_secondaryLite_14">
              3 out of 4 questions answered
            </p>
          </div>
          <div className="contact_social_arrow">
            <img src={arrowUWhite} alt="up" onClick={() => setToggle("2")} />
            <img src={circleDown} alt="down" onClick={() => setToggle("4")} />
          </div>
        </div>
      </>
    );
  };

  const Ques4 = () => {
    return (
      <>
        <div>
          <p className="mb-20 text_primary_24 silverGrad">
            In addition would you like to receive marketing emails about news,
            events and training from DeWall Street Corporation and its Projects.
          </p>

          <div className="checkBox_div">
            <label class="container">
              <input type="checkbox" /> I wish to get marketing emails
            </label>
          </div>
          <div className="checkBox_div">
            <label v>
              <input type="checkbox" /> I don’t wish to get marketing emails
            </label>
          </div>

          <div className="contact_link" style={{ marginTop: "30px" }}>
            <Button
              variant="secondary"
              children="Submit"
              type="submit"
            ></Button>
            <p className="ml-20 mt-10">
              <span className="text_secondaryLite_14">press Enter</span>
              <img src={enter} alt="arrow" />
            </p>
          </div>
        </div>
        <div className="contact_social">
          <div>
            <img src={ques4} alt="loading" />
            <p className="text_secondaryLite_14">
              4 out of 4 questions answered
            </p>
          </div>
          <div className="contact_social_arrow">
            <img src={arrowUWhite} alt="up" onClick={() => setToggle("3")} />
            <img src={circleDown} alt="down" onClick={() => setToggle("5")} />
          </div>
        </div>
      </>
    );
  };

  const Final = () => {
    return (
      <>
        <div>
          <div  className="contact_left">
            <div>
              <p className="mb-20 text_primary_24 silverGrad">
                All done you’re on our mailing list
              </p>
              <p className="text_secondaryLite_14">
                Congratulation! We have put you on our weekly mailing list. You
                will be recieving our webminars, project ideas and product
                updates every monday at 11 AM
              </p>
              <div className="contact_link contact_final" style={{ marginTop: "30px" }}>
                <Button
                  variant="secondary"
                  children="Join with another email"
                  type="submit"
                ></Button>
                <p className="ml-20 mt-10">
                  <span className="text_secondaryLite_14">Done for now</span>
                  <img src={enter} alt="arrow" />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="contact_social"></div>
      </>
    );
  };

  return (
    <div className="contact">
      {toggle === "0" && <Ques />}
      {toggle === "1" && <Ques1 />}
      {toggle === "2" && <Ques2 />}
      {toggle === "3" && <Ques3 />}
      {toggle === "4" && <Ques4 />}
      {toggle === "5" && <Final />}
    </div>
  );
};

export default Contact;
