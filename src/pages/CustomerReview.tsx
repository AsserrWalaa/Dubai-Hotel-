import React, { useState } from "react";
import SecondaryHero from "../pages/CustomerReview/Hero";
import Footer from "../components/Footer";
import Review1 from "../pages/CustomerReview/Review1";
import Review2 from "../pages/CustomerReview/Review2";
import Review3 from "../pages/CustomerReview/Review3";
import Review4 from "../pages/CustomerReview/Review4";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Modal, Button } from "react-bootstrap";
import "../style/global.css";

const CustomerReview: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState("option1");
  const [showModal, setShowModal] = useState(false); // State to handle modal visibility
  const [rating, setRating] = useState(0); // State to track selected rating

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.id);
  };

  const handleShowModal = () => setShowModal(true); // Show modal
  const handleCloseModal = () => setShowModal(false); // Close modal

  const handleRatingChange = (newRating: number) => {
    setRating(newRating); // Update the rating state when a star is clicked
  };

  const renderStars = () => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`star ${i <= rating ? "filled" : ""}`}
          onClick={() => handleRatingChange(i)}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <>
      <SecondaryHero />
      <section>
        <div className="d-flex container py-5">
          <div className="d-flex w-100">
            <div className="w-100">
              <ol>
                <li className="my-3">
                  <ProgressBar className="custom-progress-bar" now={40} />
                </li>
                <li className="my-3">
                  <ProgressBar className="custom-progress-bar" now={60} />
                </li>
                <li className="my-3">
                  <ProgressBar className="custom-progress-bar" now={80} />
                </li>
                <li className="my-3">
                  <ProgressBar className="custom-progress-bar" now={100} />
                </li>
              </ol>
            </div>

            <div className="container py-5 w-50 my-auto">
              <h6>4.8 From 5</h6>
              <span className="text-warning fs-4">
                {"★".repeat(4)}
                {"☆".repeat(1)}
              </span>
            </div>
          </div>

          {/* Button Section */}
          <div className="d-flex w-100 justify-content-end">
            <button
              className="h-25 borderOrange bg-white rounded-5 px-4"
              onClick={handleShowModal} // On button click, show modal
            >
              Write Review
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="nav-items container py-5">
          <div className="topics row row-cols-2 row-cols-md-5 g-3 justify-content-center">
            {/* Option All */}
            <div className="text-center w-auto">
              <input
                type="radio"
                className="btn-check"
                name="options"
                id="all"
                autoComplete="off"
                checked={selectedOption === "all"}
                onChange={handleOptionChange}
              />
              <label
                className="btn topic-check w-100 py-2 rounded-4"
                htmlFor="all">
                All
              </label>
            </div>

            {/* Other Options */}
            {/* Option 1 */}
            <div className="text-center w-auto">
              <input
                type="radio"
                className="btn-check"
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
            <div className="text-center w-auto">
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
                className="btn topic-check w-100 py-2 rounded-4"
                htmlFor="option2">
                Upholstery Cleaning
              </label>
            </div>

            {/* Option 3 */}
            <div className="text-center w-auto">
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
            <div className="text-center w-auto">
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
            {selectedOption === "option1" && <Review1 />}
            {selectedOption === "option2" && <Review2 />}
            {selectedOption === "option3" && <Review3 />}
            {selectedOption === "option4" && <Review4 />}
            {selectedOption === "all" && (
              <>
                <Review1 />
                <Review2 />
                <Review3 />
                <Review4 />
              </>
            )}
          </div>
        </div>
      </section>

      {/* Modal */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <div className="d-flex justify-content-center w-100">
            <Modal.Title className="colorPrimary">Your Rate</Modal.Title>
          </div>
        </Modal.Header>

        <Modal.Body>
          {/* Rating Stars */}
          <div className="d-flex justify-content-center">
            <div className="star-rating mb-3 fs-1">{renderStars()} </div>
          </div>

          {/* Review Textarea */}
          <label className="colorPrimary my-3">Write Your Review</label>
          <textarea
            className="w-100 borderOrange rounded p-2"
            placeholder=" Write Your Review.... "
            rows={5}></textarea>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
          <Button className="button w-100" onClick={handleCloseModal}>
            Send
          </Button>
        </Modal.Footer>
      </Modal>

      <Footer />
    </>
  );
};

export default CustomerReview;
