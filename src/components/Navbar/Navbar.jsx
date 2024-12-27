import React, { useState } from "react";
import "./Navbar.css";
import images from "../../constants/images";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>

      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="#home">Home</a></li>
        <li className="p__opensans"><a href="#about">About</a></li>
        <li className="p__opensans"><a href="#menu">Menu</a></li>
        <li className="p__opensans"><a href="#contact">Contact</a></li>
        <li className="p__opensans"><a href="#discover">Discover</a></li>
      </ul>

      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">Sign In / Join</a>
        <div />
        <a href="/" className="p__opensans">News</a>
      </div>

      <div className="app__navbar-smallscreen">
        <CiMenuBurger color="#AAAAAA" fontSize={22} onClick={() => setToggleMenu(true)} />
          {toggleMenu && (
            <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <IoMdClose color="#AAAAAA" fontSize={22} className="overlay__close" onClick={() => setToggleMenu(false)}/>
            <ul className="app__navbar-smallscreen_links">
              <li className="p__opensans" onClick={() => setToggleMenu(false)}><a href="#home">Home</a></li>
              <li className="p__opensans" onClick={() => setToggleMenu(false)}><a href="#about">About</a></li>
              <li className="p__opensans" onClick={() => setToggleMenu(false)}><a href="#menu">Menu</a></li>
              <li className="p__opensans" onClick={() => setToggleMenu(false)}><a href="#contavt">Contact</a></li>
              <li className="p__opensans" onClick={() => setToggleMenu(false)}><a href="#discover">Discover</a></li>
          </ul>
          </div>
          
            )}
      </div>
    </nav>
  );
};

export default Navbar;
