import React from "react";
import { Nav, NavLink } from "./NavbarElements";
import logo from "../../images/logo.svg";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img alt="Hunheart" src={logo} height={54} />
        </NavLink>
      </Nav>
    </>
  );
};

export default Navbar;
