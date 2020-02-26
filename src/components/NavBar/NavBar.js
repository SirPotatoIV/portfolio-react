import React from "react";
import "./NavBar.css";
import Logo from "../Logo/";
import NavBarLinks from "../NavBarLinks";
import ContactInfo from "../ContactInfo";

export default function NavBar() {
  return (
    <nav className="navbar">
      <Logo className="left" />
      <NavBarLinks className="right" />
      <ContactInfo />
    </nav>
  );
}
