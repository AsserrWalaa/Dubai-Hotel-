import React from "react";
import Apartment1 from "../../assets/s1.png";
import { Link } from "react-router-dom";

// Client testimonials imports
import c1 from "../../assets/c1.png";
import c2 from "../../assets/c2.png";
import c3 from "../../assets/c3.png";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Testimonials Data
const clientTestimonials = [
  {
    name: "Alaa Ahmed",
    testimonial:
      "Exceptional service! The team was professional, thorough, and exceeded my expectations. Highly recommended!",
    rating: 4,
    image: c1,
  },
  {
    name: "Sarah Johnson",
    testimonial:
      "I’ve never seen our apartments this spotless. They pay attention to every detail and ensure everything is perfect.",
    rating: 5,
    image: c2,
  },
  {
    name: "Jacob Jones",
    testimonial:
      "Reliable and efficient. They made managing my properties so much easier with their excellent cleaning services.",
    rating: 5,
    image: c3,
  },
];

// Apartment Images Data

const FirstService: React.FC = () => {
  return (
    <>
      {/* Apartment Sterilization Section */}
      <section style={{ height: 800 }}>
        <Container>
          <Row className="pt-5 gap-3 gap-lg-0">
            {/* Left Content Section */}
            <Col lg={6} xs={10} className="left ">
              <h3 className="service-text">Apartment Sterilization</h3>
              <h6 className="mt-3 service-text">
                Time:
                <span className="ms-2 text-secondary">1 Hour 30 Minute</span>
              </h6>
              <h6 className="mt-3 service-text">
                Days Available :
                <span className="ms-2 text-secondary">All Week</span>
              </h6>
              <div>
                <h5 className="mt-3">1. Preparation Before Cleaning</h5>
                <p className="text-secondary ">Homemade Natural Cleaners:</p>
                <ul className="text-secondary ">
                  <li>
                    Baking Soda: Effective for eliminating odors and stains.
                  </li>
                  <li>Lemon Juice: Acts as a disinfectant and degreaser.</li>
                </ul>
                <h5 className="mt-3">Reusable Cleaning Tools:</h5>
                <p className="text-secondary ">Microfiber cloths</p>
                <h5>Steam Cleaner:</h5>
                <p className="text-secondary ">
                  A safe method for disinfecting without the use of chemicals.
                </p>
                <h5>Preparation:</h5>
                <p className="text-secondary">
                  Gather all tools and products in one place for easy access.
                </p>
              </div>
              <div>
                <h5 className="mt-2 mb-4 service-text">
                  2. Step-by-Step Cleaning and Disinfecting for Each Area
                </h5>
                <h5 className="mb-2 service-text">
                  A. Living Rooms and Bedrooms
                </h5>
                <ul className="text-secondary ">
                  <li className="">
                    <h6>1. Dusting:</h6>
                    Don’t forget to clean under furniture and in corners.
                  </li>
                  <li className="pt-3">
                    <h6>2. Cleaning Glass and Mirrors:</h6>
                    Mix warm water with white vinegar (1:1 ratio).
                  </li>
                </ul>
              </div>
            </Col>
            {/* Right Section */}
            <Col lg={6} xs={10} className="right text-center ">
              <img src={Apartment1} alt="Apartment1" className="img-fluid" />
            </Col>
            {/* Right Image Section */}
          </Row>
        </Container>
      </section>

      {/* Customer Reviews Section */}
      <section className="container h-100">
        <h4 className="d-flex justify-content-between align-items-center">
          Excerpts From Customers Reviews:
          <Link to="/customerReviews">
            <button className="text-dark border-0 bg-transparent text-decoration-underline fs-5">
              See All
            </button>
          </Link>
        </h4>
        {clientTestimonials.map((client, index) => (
          <div
            key={index}
            className="client-review px-4 p-1 rounded-3 my-3 borderOrange pt-3">
            <div className="d-flex align-items-center">
              <img
                src={client.image}
                alt={`Client ${index + 1}`}
                className="rounded-5 me-3"
                width={30}
              />
              <div>
                <h6 className="mb-1">{client.name}</h6>
                <span className="text-warning mx-3 fs-4">
                  {"★".repeat(client.rating)}
                  {"☆".repeat(5 - client.rating)}
                </span>
              </div>
            </div>
            <p className="mt-2 pb-3">{client.testimonial}</p>
          </div>
        ))}
        <Link to="/booking">
          <button className="w-100 button py-2 rounded text-light ">
            Book Now
          </button>
        </Link>
      </section>
    </>
  );
};

export default FirstService;
