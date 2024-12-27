import React from "react";
import "./Header.css";
import { images } from "../../constants";
import { SubHeading } from "../../components";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Your Daily Dose of Joy" />
      <h1 className="app__header-h1">But first,{" "}<span style={{color: '#c39a7a     '}}><br />coffee</span>.</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>Experience our passion for coffee in every cup. At ycoffee, we craft bold flavors with creativity and care. Let’s create moments worth savoring.</p>
    <button type="button" className="custom__button">View Menu</button>
    </div>

    <div className="app__wrapper_img">
      <div className="border__container">
        <img className="coffee__bean" src={images.coffeeBean} alt="coffee_bean"/>
        </div>
      </div>
    </div>

);

export default Header;
