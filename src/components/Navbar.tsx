import React, { useState } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/1-removebg-preview (3) 1.jpg";
import profile from "../assets/p2.png";
import "../style/navStyle.css";

const AppNavbar: React.FC = () => {
  const location = useLocation();
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const handleSelectLanguage = (language: string) => {
    setSelectedLanguage(language);
  };
  const navigate = useNavigate();
  const profileOptions = [
    { label: "My Profile", path: "/myProfile" },
    { label: "My Booking", path: "/myBooking" },
    // Add more options as needed
  ];

  return (
    <Navbar bg="transparent" expand="lg" className="navOne">
      <div className="container d-flex align-items-center justify-content-between">
        {/* Logo */}
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            alt="Logo"
            width="100"
            height="70"
            className="rounded-5 pe-5"
          />
        </Navbar.Brand>

        {/* Navbar Toggle */}
        <Navbar.Toggle aria-controls="navbar-nav" className="colorPrimary" />

        {/* Navbar Collapse */}
        <Navbar.Collapse
          id="navbar-nav"
          className="justify-content-center text-center mx-auto">
          <Nav className="d-flex align-items-center mx-auto justify-content-center">
            {/* Nav Links */}
            <Nav.Link
              as={Link}
              to="/"
              className={`fs-6 me-2 ${
                location.pathname === "/" ? "active" : ""
              }`}>
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/services"
              className={`fs-6 me-2 ${
                location.pathname === "/services" ? "active" : ""
              }`}>
              Service
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/offers"
              className={`fs-6 me-2 ${
                location.pathname === "/offers" ? "active" : ""
              }`}>
              Offers
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/about"
              className={`fs-6 me-2 ${
                location.pathname === "/about" ? "active" : ""
              }`}>
              About Us
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
              className={`fs-6 me-2 ${
                location.pathname === "/contact" ? "active" : ""
              }`}>
              Contact Us
            </Nav.Link>
          </Nav>

          {/* Dropdowns */}
          <Nav>
            {/* Language Dropdown */}
            <NavDropdown
              className="fs-6"
              title={<span>{selectedLanguage}</span>}
              menuVariant="light">
              {[
                "English",
                "Arabic",
                "Turkish",
                "French",
                "Italian",
                "German",
                "Russian",
                "Hindi",
                "Korean",
              ].map((language) => (
                <NavDropdown.Item
                  key={language}
                  onClick={() => handleSelectLanguage(language)}
                  className={`dropdown-item text-secondary ${
                    selectedLanguage === language ? "selected" : ""
                  }`}>
                  {language}
                </NavDropdown.Item>
              ))}
            </NavDropdown>

            {/* Profile Dropdown */}
            <NavDropdown
              className="fs-6 profile-dropdown no-arrow ms-lg-3"
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
              {profileOptions.map((option) => (
                <NavDropdown.Item
                  key={option.label}
                  onClick={() => navigate(option.path)}
                  className="dropdown-item text-secondary">
                  {option.label}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default AppNavbar;
