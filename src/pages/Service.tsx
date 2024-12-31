// src/pages/About.tsx
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Service1 from "../pages/Service/Service1";
import Service2 from "../pages/Service/Service2";
import Service3 from "../pages/Service/Service3";
import Service4 from "../pages/Service/Service4";
import { useState } from "react";
import "../style/global.css";

const Service = () => {
  // State to store the selected option
  const [selectedOption, setSelectedOption] = useState("option1");

  // Handle change in selected option
  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <>
      <Navbar />
      <div className="nav-items container py-5">
        {/* Header */}
        <h3 className="text-center mb-5">Our Services</h3>

        {/* Button Section */}
        <div className="topics row row-cols-2 row-cols-md-4 justify-content-center">
          {/* Option 1 */}
          <div className="col text-center">
            <button
              className={`btn topic-check w-100 py-2 rounded-4 ${
                selectedOption === "option1" ? "btn-active" : ""
              }`}
              onClick={() => handleOptionChange("option1")}>
              Apartment Sterilization
            </button>
          </div>

          {/* Option 2 */}
          <div className="col text-center">
            <button
              className={`btn topic-check w-100 py-2 rounded-4 ${
                selectedOption === "option2" ? "btn-active" : ""
              }`}
              onClick={() => handleOptionChange("option2")}>
              Upholstery Cleaning
            </button>
          </div>

          {/* Option 3 */}
          <div className="col text-center">
            <button
              className={`btn topic-check w-100 py-2 rounded-4 ${
                selectedOption === "option3" ? "btn-active" : ""
              }`}
              onClick={() => handleOptionChange("option3")}>
              Kitchen and Bathroom Cleaning
            </button>
          </div>

          {/* Option 4 */}
          <div className="col text-center">
            <button
              className={`btn topic-check w-100 py-2 rounded-4 ${
                selectedOption === "option4" ? "btn-active" : ""
              }`}
              onClick={() => handleOptionChange("option4")}>
              Room Layout and Furnishing
            </button>
          </div>
        </div>

        {/* Dynamic Content Section */}
        <div className="">
          {selectedOption === "option1" && <Service1 />}
          {selectedOption === "option2" && <Service2 />}
          {selectedOption === "option3" && <Service3 />}
          {selectedOption === "option4" && <Service4 />}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Service;
