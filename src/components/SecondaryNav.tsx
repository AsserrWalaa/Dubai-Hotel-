import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/1-removebg-preview (3) 1.jpg";
import profile from "../assets/p2.png";

import { NavDropdown } from "react-bootstrap";
import "../style/navStyle.css";

const AppNavbar: React.FC = () => {
  return (
    <Navbar bg="transparent" expand="lg" className="shadow-none">
      {/* Container with full width and vertical centering */}
      <Container className="d-flex align-items-center justify-content-between">
        {/* Logo aligned to the left */}
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            alt="Logo"
            width="90"
            height="90"
            className="rounded-5"
          />
        </Navbar.Brand>

        {/* Navbar Toggle Button for Small Screens */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        {/* Navbar Collapse for Links */}
        <Navbar.Collapse
          id="navbar-nav"
          className="justify-content-center text-center mx-auto">
          <Nav className="d-flex align-items-center mx-auto justify-content-center">
            {/* Navbar Links */}
            <Nav.Link as={Link} to="/" className="text-secondary fs-5 me-2 ">
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/services"
              className="text-secondary fs-5 me-2 ">
              Service
            </Nav.Link>
            <Nav.Link as={Link} to="/" className="text-secondary fs-5 me-2 ">
              Offers
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/about"
              className="text-secondary fs-5 me-2">
              About Us
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
              className="text-secondary fs-5 me-2">
              Contact Us
            </Nav.Link>
          </Nav>

          {/* Dropdown aligned to the right */}
          <Nav className="mx-auto">
            <NavDropdown
              className="fs-5"
              title={<span className="text-secondary">Language</span>}
              menuVariant="light">
              <NavDropdown.Item href="#action/3.1" className="text-dark">
                English
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" className="text-dark">
                Arabic
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" className="text-dark">
                Turkish
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4" className="text-dark">
                French
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5" className="text-dark">
                Italian
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6" className="text-dark">
                German
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.7" className="text-dark">
                Russian
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.8" className="text-dark">
                Hindi
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.9" className="text-dark">
                Korean
              </NavDropdown.Item>
            </NavDropdown>
            {/* Profile Dropdown */}
            <NavDropdown
              className="profile-dropdown no-arrow"
              title={
                <img
                  src={profile}
                  alt="Profile"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    cursor: "pointer",
                  }}
                />
              }
              menuVariant="light"
              id="profile-dropdown">
              <NavDropdown.Item as="div" className="text-dark">
                <Link
                  to="/myProfile"
                  className="text-decoration-none text-dark">
                  My Profile
                </Link>
              </NavDropdown.Item>
              <Link to="/myBooking" className="text-decoration-none text-dark">
                <NavDropdown.Item href="#Booking" className="text-dark">
                  My Booking
                </NavDropdown.Item>
              </Link>
              {/* <NavDropdown.Item href="#logout" className="text-danger">
                Logout
              </NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
