// src/pages/Home.tsx
import Navbar from "./Navbar";
import "../style/global.css";
import "../style/Hero.css";
import hero1 from "../assets/hero1.png";
import { Link } from "react-router-dom";
const Hero = () => (
  <>
    <div className="hero">
      <div className="hero-content">
        <Navbar />
        <div className="d-flex flex-wrap container">
          <div className="heroText container col-12 col-md-6 d-flex flex-column justify-content-center align-items-start">
            <h3 className="colorPrimary">
              Professional Cleaning Services for Hotels and Furnished Apartments
            </h3>
            <h3 className="pt-3" style={{ color: "#676767" }}>
              Expert Cleaning Services Tailored to Your Needs
            </h3>
            <div className="d-lg-flex mx-lg-0 mx-auto pt-5 gap-2">
              <Link to="/booking" className="text-decoration-none">
                <button className="w-100 px-5 fs-3 my-lg-0 my-3 text-light rounded-3 border-3 button">
                  Appointment
                </button>
              </Link>
              <Link to="/contact" className="text-decoration-none">
                <button className="w-100 px-5 fs-3 borderOrange colorPrimary rounded-3 border-3  bg-transparent">
                  Call Us
                </button>
              </Link>
            </div>
          </div>
          <div className="hero col-12 col-md-6">
            <img src={hero1} alt="" className="img-fluid d-none d-md-block" />
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Hero;
