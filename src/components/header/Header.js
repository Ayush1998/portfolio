import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";
import "./Header.css";
import { Link } from "react-scroll";
import Logo from "../../images/logo.jpeg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="content">
      <Navbar className="navbar-dark" expand="md" color="white">
        <NavbarBrand>
          <Link
            className="items nav-link"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
          >
            <img src={Logo} alt="logo" />
          </Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} style={{ color: "white" }} />
        <Collapse className="nav_coll " isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link
                className="items nav-link"
                to="my_work"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                My work
              </Link>
            </NavItem>
            <NavItem>
              <Link
                className="items nav-link"
                to="skills"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >
                Skills
              </Link>
            </NavItem>
            <NavItem>
              <Link
                className="items nav-link"
                to="about_me"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >
                About Me
              </Link>
            </NavItem>
            <NavItem>
              <Link
                className="items nav-link"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >
                Contact
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
