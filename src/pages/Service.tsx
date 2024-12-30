// src/pages/About.tsx
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Service1 from "../pages/Service/Service1";
import Service2 from "../pages/Service/Service2";
import Service3 from "../pages/Service/Service3";
import Service4 from "../pages/Service/Service4";
import React, { useState } from "react";
import "../style/global.css";

const Service = () => {
  // State to store the selected option
  const [selectedOption, setSelectedOption] = useState("option1");

  // Handle change in selected option
  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.id);
  };

  return (
    <>
      <Navbar />
      <div className="nav-items container py-5">
        {/* Header */}
        <h3 className="text-center mb-5">Our Services</h3>

        {/* Radio Button Section */}
        <div className="topics row row-cols-2 row-cols-md-4 g-3 justify-content-center">
          {/* Option 1 */}
          <div className="col text-center">
            <input
              type="radio"
              className="btn-check rounded-5"
              name="options"
              id="option1"
              autoComplete="off"
              checked={selectedOption === "option1"}
              onChange={handleOptionChange}
            />
            <label
              className="btn topic-check w-100 py-2 rounded-4"
              htmlFor="option1">
              Apartment Sterilization
            </label>
          </div>

          {/* Option 2 */}
          <div className="col text-center">
            <input
              type="radio"
              className="btn-check"
              name="options"
              id="option2"
              autoComplete="off"
              checked={selectedOption === "option2"}
              onChange={handleOptionChange}
            />
            <label
              className="btn  topic-check w-100 py-2 rounded-4"
              htmlFor="option2">
              Upholstery Cleaning
            </label>
          </div>

          {/* Option 3 */}
          <div className="col text-center">
            <input
              type="radio"
              className="btn-check"
              name="options"
              id="option3"
              autoComplete="off"
              checked={selectedOption === "option3"}
              onChange={handleOptionChange}
            />
            <label
              className="btn topic-check w-100 py-2 rounded-4"
              htmlFor="option3">
              Kitchen and Bathroom Cleaning
            </label>
          </div>

          {/* Option 4 */}
          <div className="col text-center">
            <input
              type="radio"
              className="btn-check"
              name="options"
              id="option4"
              autoComplete="off"
              checked={selectedOption === "option4"}
              onChange={handleOptionChange}
            />
            <label
              className="btn topic-check w-100 py-2 rounded-4"
              htmlFor="option4">
              Room Layout and Furnishing
            </label>
          </div>
        </div>

        {/* Dynamic Content Section */}
        <div className="mt-4">
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
