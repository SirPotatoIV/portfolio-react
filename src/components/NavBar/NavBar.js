import React from "react";
import "./NavBar.css";
import Logo from "../Logo/";
import NavBarLinks from "../NavBarLinks";

export default function NavBar() {
  return (
    <div className="navbar">
      <Logo />
      <NavBarLinks />
    </div>
  );
}
