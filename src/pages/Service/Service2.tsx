import React from "react";
import { Link } from "react-router-dom";

import s2 from "../../assets/s2.png";
// clients says section imports
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

const SecondService: React.FC = () => {
  return (
    <>
      {/* Apartment Sterilization Section */}
      <section style={{ height: 800 }}>
        <Container>
          <Row className="my-5 py-5 gap-3 gap-lg-0">
            {/* Left Section */}
            <Col lg={6} xs={10} className="left">
              <h3 className="service-text">Upholstery cleaning</h3>
              <h6 className="mt-3 service-text">
                Time:
                <span className="ms-2 text-secondary">1 Hour 30 Minute</span>
              </h6>
              <h6 className="mt-3 service-text">
                Days Available :
                <span className="ms-2 text-secondary">All Week</span>
              </h6>
              <p className="text-secondary">
                Our company provides a comprehensive upholstery cleaning and
                sanitization service using eco-friendly products to elevate
                apartments into luxurious hotel-style spaces. We rely on
                advanced techniques and natural products to ensure exceptional,
                healthy results for all residents.
              </p>
              <div>
                <h5>1. Initial Assessment of Upholstery</h5>
                <p className="text-secondary ">
                  A specialized team evaluates the upholstery (sofas, carpets,
                  curtains, and cushions) to identify the type of fabric and
                  required cleaning level.
                </p>

                <h5 className="my-2">2. Dust and Surface Dirt Removal</h5>
                <p className="text-secondary  my-3">
                  A professional vacuum cleaner is used to remove deep-seated
                  dust from upholstery, focusing on corners and hidden areas.
                </p>
                <h5>3. Treating Stubborn Stains</h5>
                <p className="text-secondary ">
                  A natural mixture of baking soda and white vinegar is applied
                  to remove tough stains without damaging the fabric.
                </p>
                <h5>4. Upholstery Sanitization:</h5>
                <h5>1. Steam Sanitization:</h5>
                <p className="text-secondary ">
                  Advanced steam cleaning devices are used to sanitize
                  upholstery thoroughly, eliminating germs and bacteria.
                </p>
                <h5>2. Natural Oils Application:</h5>
                <p className="text-secondary ">
                  A mix of water and essential oils (such as tea tree or
                  lavender oil) is sprayed for added disinfection and a
                  long-lasting fresh scent.
                </p>
              </div>
            </Col>

            {/* Right Section */}
            <Col lg={6} xs={10} className="right text-center ">
              <img src={s2} alt="s2" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </section>
      {/* end Apartment Sterilization Section */}

      {/* Customer Reviews Section */}
      <section className="container">
        <h4 className="d-flex justify-content-between align-items-center mt-5">
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
            className={`client-review px-4 p-1 rounded-3 my-3 borderOrange pt-3`}>
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
        <button className="w-100 button py-2 rounded text-light ">
          Book Now
        </button>
      </section>
    </>
  );
};

export default SecondService;
