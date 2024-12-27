import React from "react";
import "./Menu.css";
import { SubHeading, MenuItem } from "../../components";
import menuItems from "../../constants/data";

const Menu = () => {
  return (
    <div className="app__menu flex__center section__padding" id="menu">
      <div className="app__menu-title">
        <SubHeading title="Menu to Warm Your Soul" />
        <h1 className="headtext__cormorant">Café Picks</h1>
      </div>

      <div className="app__menu-container flex__center">
        <div className="app__menu-items">
          {menuItems.map((item) => {
            const { title, price, description } = item;
            return (
              <MenuItem
                key={item.title}
                title={title}
                price={price}
                description={description}
              />
            );
          })}
        </div>

        <button className="custom__button">View More</button>
      </div>
    </div>
  );
};

export default Menu;
