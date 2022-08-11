import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { TbComponents } from "react-icons/tb";
import "../styles/sidenav.scss";
const Sidenav = () => {
  return (
    <div className="sidenav">
      <div className="sidenav__logo">
        <div className="sidenav__logo--flex">
          <TbComponents /> Components
        </div>
      </div>
      <ul className="">
        <NavLink to="/">
          <li className="sidenav__link">Colors</li>
        </NavLink>
        <NavLink to="/">
          <li className="sidenav__link">Typography</li>
        </NavLink>
        <NavLink to="/">
          <li className="sidenav__link">Spaces</li>
        </NavLink>
        <NavLink to="/buttons">
          <li className="sidenav__link">Buttons</li>
        </NavLink>
        <NavLink to="/">
          <li className="sidenav__link">Inputs</li>
        </NavLink>
        <NavLink to="/">
          <li className="sidenav__link">Grid</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Sidenav;
