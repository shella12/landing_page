import React from "react";
import apple from "../assets/apple.png";
import googlePlay from "../assets/google-play.png";
import Buttons from "./Buttons";
import arrow from "../assets/arrow.png";
import twitter from "../assets/Frame-tweeter.png";
import instagram from "../assets/Frame-inst.png";
import message from "../assets/Frame-msg.png";

function Bottom() {
  return (
    <div className="flex bottom-container">
      <div className="btn-container flex">
        <Buttons src={apple} label="App store" />
        <Buttons src={googlePlay} label="Google play" />
      </div>
      <img src={arrow} alt="arrow-down" className="arrow-image"/>
      <div className="flex icons">
        <p>
          Brokerage services by Cash App Investing LLC, member FINRA / SIPC. See
          our BrokerCheck. Investing involves risk; you may lose money. Bitcoin
          trading offered by Cash App. Cash App Investing does not trade bitcoin
          and Cash App is not a member of FINRA or SIPC. Cash App facilitates
          banking services through Sutton Bank and Lincoln Savings Bank, Members
          FDIC.
        </p>
        <div className="flex social-icons">
        <a href="https://www.linkedin.com/in/-ayesha-arshad/">
          <img src={message} alt="linkedIn contact link" className="btn-images"/>
        </a>
        <a href="https://twitter.com/AyeshaA03712974">
          <img src={twitter} alt="twitter contact link" className="btn-images"/>
        </a>
        <a href="https://www.instagram.com/ayesha_arshad4567/">
          <img src={instagram} alt="instagram contact link" className="btn-images"/>
        </a>
        </div>
      </div>
      <img src={arrow} alt="arrow-down" className="arrow-image-2"/>
    </div>
  );
}

export default Bottom;
