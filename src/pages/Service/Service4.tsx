import React from "react";
import { Link } from "react-router-dom";

import Apartment4 from "../../assets/s4.png";

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

const FourthService: React.FC = () => {
  return (
    <>
      {/* Room layout and furnishing */}
      <section>
        <Container>
          <Row className="my-5 py-5 gap-3 gap-lg-0">
            {/* Left Content Section */}
            <Col lg={6} xs={10} className="left">
              <h3 className="service-text">Room layout and furnishing</h3>
              <h6 className="mt-3 service-text">
                Time:
                <span className="ms-2 text-secondary">1 Hour 30 Minute</span>
              </h6>
              <h6 className="mt-3 service-text">
                Days Available :
                <span className="ms-2 text-secondary">All Week</span>
              </h6>
              <p>
                Our company offers comprehensive services to clean and organize
                apartments, transforming them into luxurious spaces that provide
                a hotel-like experience. After thorough cleaning and
                disinfection, we arrange furniture and add simple, elegant
                touches to enhance the space's beauty and comfort.
              </p>
              <div>
                <h5>1. Deep Cleaning and Room Preparation:</h5>

                <p className="text-secondary my-3 ">
                  Clean floors, walls, and windows with eco-friendly products
                  for a bright and polished look.
                </p>
                <p className="text-secondary my-3 ">
                  Sanitize furniture and upholstery to ensure comfort and
                  hygiene.
                </p>
                <p className="text-secondary my-3 ">
                  Declutter and remove excess items to optimize the space.
                </p>
                <h5 className="mt-3">
                  2. Practical and Elegant Furniture Arrangement:
                </h5>
                <div>
                  <h5 className="service-text">A. Living Room:</h5>
                  <p className="text-secondary ">
                    Rearrange the sofa and tables to create an open and
                    welcoming space.
                  </p>
                  <p className="text-secondary ">
                    Position furniture to focus on a central feature like a TV
                    or a window with a view.
                  </p>
                  <p className="text-secondary ">
                    Organize throw pillows neatly with complementary colors.
                  </p>
                </div>
                <div>
                  <h5 className="service-text">B. Bedroom:</h5>
                  <p className="text-secondary ">
                    Place the bed centrally, smoothing the bedding and adding
                    neatly arranged pillows.
                  </p>
                  <p className="text-secondary ">
                    Add bedside tables with simple touches (like a lamp or a
                    book).
                  </p>
                  <p className="text-secondary ">
                    Adjust and tidy curtains to highlight elegance
                  </p>
                </div>
                <div>
                  <h5 className="service-text">C. Dining Area:</h5>
                  <p className="text-secondary ">
                    Clean the dining table and arrange chairs symmetrically.
                  </p>
                  <p className="text-secondary ">
                    Add a simple centerpiece (like a vase or scented candles
                  </p>
                </div>
                <div>
                  <h5 className="service-text">D. Kitchen and Bathroom:</h5>
                  <p className="text-secondary ">
                    Organize kitchen tools neatly in drawers and cabinets.
                  </p>
                  <p className="text-secondary ">
                    Arrange towels in the bathroom decoratively, placing them on
                    shelves or in stylish baskets.{" "}
                  </p>
                </div>
                <h5>3. Adding Simple Luxury Touches:</h5>
                <div>
                  <h5 className="service-text">
                    A. Decorations and Accessories:
                  </h5>
                  <p className="text-secondary ">
                    Place subtle accents like scented candles or fresh flowers
                    on tables or shelves.
                  </p>
                  <p className="text-secondary ">
                    Use small, budget-friendly décor items (such as small
                    mirrors or framed pictures).
                  </p>
                </div>
                <div>
                  <h5 className="service-text">B. Fragrance:</h5>
                  <p className="text-secondary ">
                    Refresh rooms with natural air fresheners featuring light
                    scents like lavender or rose.
                  </p>
                  <p className="text-secondary ">
                    Ensure long-lasting freshness to enhance comfort.
                  </p>
                </div>
                <div>
                  <h5 className="service-text">C. Lighting:</h5>
                  <p className="text-secondary ">
                    Clean light fixtures and direct lighting to highlight the
                    room's best features.
                  </p>
                </div>
              </div>
            </Col>
            {/* Right Section */}
            <Col lg={6} xs={10} className="right text-center ">
              <img src={Apartment4} alt="Apartment4" className="img-fluid" />
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

export default FourthService;
