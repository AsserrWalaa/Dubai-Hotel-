import React from "react";
import { Link } from "react-router-dom";

import Apartment3 from "../../assets/s3.png";

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

const ThirdService: React.FC = () => {
  return (
    <>
      {/* Kitchen and bathroom cleaning Section */}
      <section>
        <Container>
          <Row className="my-5 py-5 gap-3 gap-lg-0">
            {/* Left Content Section */}
            <Col lg={6} xs={10} className="left">
              <h4 className="service-text">Kitchen and bathroom cleaning</h4>
              <h6 className="mt-3 service-text">
                Time:
                <span className="ms-2 text-secondary">1 Hour 30 Minute</span>
              </h6>
              <h6 className="my-3 service-text">
                Days Available :
                <span className="ms-2 text-secondary">All Week</span>
              </h6>
              <div>
                <div>
                  <h6 className="pb-1">1. Cleaning Appliances:</h6>
                  <h5 className="service-text">A. Oven and Stove:</h5>
                  <p className="text-secondary my-2 ">
                    Removing Grease and Stains:
                  </p>
                  <p className="text-secondary my-2 ">
                    2. Sprinkle baking soda on tough stains and let it sit for
                    15 minutes, then scrub with a soft brush.
                  </p>
                </div>
                <div>
                  <h5 className="service-text">B. Microwave:</h5>
                  <h5 className="mt-3">Cleaning Method:</h5>
                  <p className="text-secondary ">
                    2. Run the microwave for 3-5 minutes to allow the water to
                    steam.
                  </p>
                  <p className="text-secondary ">
                    3. Wipe the interior with a soft cloth to remove stains and
                    odors
                  </p>
                </div>
                <div>
                  <h5 className="service-text">C. Refrigerator:</h5>
                  <p className="text-secondary ">Cleaning Shelves and Walls:</p>
                  <p className="text-secondary ">
                    1. Remove all contents and unplug the refrigerator.
                  </p>
                  <p className="text-secondary ">
                    2. Wipe the shelves and walls with a mixture of warm water
                    and vinegar.
                  </p>
                </div>
                <div>
                  <h5 className="service-text">D. Dishwasher:</h5>
                  <p className="text-secondary ">Sanitizing and Deodorizing:</p>
                  <p className="text-secondary ">
                    1. Place a cup of white vinegar on the top rack and run an
                    empty short cycle.
                  </p>
                  <p className="text-secondary ">
                    2. Wipe the shelves and walls with a mixture of warm water
                    and vinegar.
                  </p>
                </div>
                <h5>1. Cleaning Appliances:</h5>
                <div>
                  <h5 className="service-text">A. Surfaces:</h5>
                  <p className="text-secondary ">
                    Wipe all surfaces with a mixture of water and white vinegar.
                  </p>
                </div>
                <div>
                  <h5 className="service-text">B. Sink and Faucets:</h5>
                  <p className="text-secondary ">
                    Use a mixture of baking soda and water to scrub stains
                    around the sink.
                  </p>
                  <h5 className="service-text">C. Tiles and Walls:</h5>
                  <p className="text-secondary ">
                    Spray a mixture of warm water and white vinegar on the tiles
                    and walls.
                  </p>
                </div>
              </div>
              <div>
                <h5 className="my-3 service-text">Second: Bathroom Cleaning</h5>
                <div>
                  <h6 className="mb-3">
                    1. Cleaning Appliances and Facilities:
                  </h6>
                  <h5 className="service-text">A. Toilet:</h5>
                  <p className="text-secondary ">
                    Spray a mixture of white vinegar and tea tree oil inside and
                    around the toilet. <br />
                    Scrub with a toilet brush and flush with water.
                  </p>
                </div>
                <div>
                  <h5 className="service-text">B. Sink and Faucets:</h5>
                  <p className="text-secondary ">
                    Use a mixture of baking soda and water to scrub stains
                    around the sink. <br />
                    Wipe the faucets with a cloth dampened with lemon water
                  </p>
                </div>
                <div>
                  <h5 className="service-text">C. Tiles and Walls:</h5>
                  <p className="text-secondary ">
                    Spray a mixture of warm water and white vinegar on the tiles
                    and walls. <br />
                    Scrub with a soft brush to remove stains and lime deposits.
                  </p>
                </div>
              </div>
            </Col>
            {/* Right Section */}
            <Col lg={6} xs={10} className="right text-center ">
              <img src={Apartment3} alt="Apartment3" className="img-fluid" />
            </Col>
            {/* Right Image Section */}
          </Row>
        </Container>
      </section>

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
        <button className="w-100 button py-2 rounded text-light ">
          Book Now
        </button>
      </section>
    </>
  );
};

export default ThirdService;
