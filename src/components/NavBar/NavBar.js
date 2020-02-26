import React from "react";
import NavBarLinks from "../NavBarLinks";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div className="navbar">
      <p>The NavBar</p>
      <NavBarLinks></NavBarLinks>
    </div>
  );
}
