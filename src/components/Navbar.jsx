import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";
import useWindowSize from "../hooks/useWindowSize";
import { VscMenu } from "react-icons/vsc";

const handleMiniNavbarClick = () => {
  // console.log("handleMiniNavbar clicked");
  let navbar = document.getElementsByClassName("Navbar");

  return navbar.createElement("<div>hello</div>");
  // return .append(
  //   <span>
  //     <NavLink to="/about" className="nav-link">
  //       About
  //     </NavLink>
  //   </span>
  // );
};

function Navbar() {
  const size = useWindowSize();

  if (size.width > 501) {
    // console.log("window:", size.width);
    return (
      <nav className="Navbar">
        <span className="Navbar-item-right">
          <NavLink to="/" className="link">
            <img src={logo} alt="logo" className="logo" />
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
          <NavLink to="/code" className="nav-link">
            Code
          </NavLink>
          <NavLink to="/music" className="nav-link">
            Music
          </NavLink>
          <NavLink to="/contact" className="nav-link">
            Contact
          </NavLink>
        </span>
        {/* <
        {/* </span> */}
      </nav>
    );
  } else {
    return (
      <nav className="Navbar Navbar-mini">
        <NavLink to="/" className="link">
          <img src={logo} alt="logo" className="logo" />
        </NavLink>

        <VscMenu className="mini-menu" onClick={handleMiniNavbarClick} />
      </nav>
    );
  }
}

export default Navbar;
