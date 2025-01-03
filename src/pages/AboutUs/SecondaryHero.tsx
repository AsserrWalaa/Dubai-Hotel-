// src/pages/Home.tsx
import Navbar from "../../components/SecondaryNav";
import "../../style/global.css";
const Hero = () => (
  <>
    <div className="hero-offers">
      <div className="hero-content">
        <Navbar />
        <div className="heroText container">
          <h1 className="text-center text-white py-5 my-5">About Us</h1>
        </div>
      </div>
    </div>
  </>
);

export default Hero;
