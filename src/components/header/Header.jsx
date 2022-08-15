import React from "react";
import logo from "../../assets/logo.png";
import pen1 from "../../assets/pen1.png";
import pen2 from "../../assets/pen2.png";

import { BiLogIn } from "react-icons/bi";
import { MdOutlineMarkChatUnread } from "react-icons/md";
import "./header.css";
// import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <section>
        <div className="clip"></div>
        <nav className="navbar">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>

          <ul className="nav-links">
            <input type="checkbox" id="checkbox_toggle" />
            <label for="checkbox_toggle" className="hamburger">
              &#9776;
            </label>

            <div className="menu">
              <li>
                <div className="link" href="/">
                  About
                </div>
              </li>
              <li>
                <div className="link" href="/">
                  Pricing
                </div>
              </li>
              <li>
                <div className="link" href="/">
                  Contact
                </div>
              </li>
              <button className="button" href="/">
                Login <BiLogIn />
              </button>
            </div>
          </ul>
        </nav>
        <h1 className=" animate-character">
          One platform for <br />{" "}
          <span style={{ marginLeft: "150px" }}>all your</span>
          <br /> community needs
        </h1>
        <h2 className="text">Try for free {">"} </h2>
        <div className="parent">
          <img src={pen2} alt="pen1" className="img1" />
          <img src={pen1} alt="pen1" className="img2" />
        </div>
        <MdOutlineMarkChatUnread
          style={{
            color: "blue",
            position: "fixed",
            fontSize: "50px",
            top: "650px",
            right: "30px",
            zIndex: "2",
          }}
        />
      </section>
    </>
  );
};

export default Header;
