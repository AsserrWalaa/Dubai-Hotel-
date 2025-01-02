import React from "react";
import Apartment1 from "../../assets/bathCleaning.png";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import { Card, Col, Container, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";

import "../../style/global.css";

// Apartment Images Data
import before from "../../assets/before.png";
import after from "../../assets/after.png";

// swiper
const cardData = [
  {
    id: 1,
    title: "Cleaning and disinfecting an apartment of 100 square meters.",
    description:
      "All surfaces have been cleaned and sanitized and furniture has been rearranged to achieve a hotel look.",
  },
  {
    id: 2,
    title: "Cleaning and disinfecting an office space of 50 square meters.",
    description:
      "The office has been cleaned, sanitized, and organized to ensure a productive environment.",
  },
  {
    id: 3,
    title: "Deep cleaning of a kitchen with 30 square meters of space.",
    description:
      "All kitchen surfaces have been cleaned, sanitized, and organized to improve functionality.",
  },
  {
    id: 3,
    title: "Deep cleaning of a kitchen with 30 square meters of space.",
    description:
      "All kitchen surfaces have been cleaned, sanitized, and organized to improve functionality.",
  },
  {
    id: 3,
    title: "Deep cleaning of a kitchen with 30 square meters of space.",
    description:
      "All kitchen surfaces have been cleaned, sanitized, and organized to improve functionality.",
  },
];

const Bathroom: React.FC = () => {
  return (
    <>
      <Navbar />
      {/* bathroomSection */}
      <section className="serviceOne">
        <Container>
          <Row className="pt-5 gap-3 gap-lg-0 h-50">
            {/* Left Content Section */}
            <Col lg={6} xs={10} className="left order-2 order-lg-1">
              <h3 className="service-text">Bathroom Cleaning</h3>
              <div>
                <h5 className="my-3">Description :</h5>
                <p className="fs-5 text-secondary">
                  We offer bathroom cleaning services to ensure the highest
                  standards of cleanliness and sanitation. Our service includes:
                </p>

                <p className="fs-5 text-secondary my-3">
                  Cleaning and disinfecting sinks, toilets, and showers with
                  specialized materials to eliminate germs.
                </p>

                <p className="fs-5 text-secondary my-3">
                  Removing limescale and stubborn stains from tiles and walls.
                </p>

                <p className="fs-5 text-secondary my-3">
                  Polishing mirrors and organizing bathroom essentials for a
                  neat and clean look.
                </p>
                <p className="fs-5 text-secondary my-3">
                  Removing stubborn stains like limescale and tough spots from
                  tiles and walls.
                </p>
                <p className="fs-5 text-secondary my-3">
                  Sanitizing door handles and faucets to prevent bacterial
                  transfer.
                </p>
                <p className="fs-5 text-secondary">
                  Emptying and cleaning trash bins and perfuming the bathroom
                  for a refreshing feel.
                </p>
              </div>
            </Col>
            {/* Right Section */}
            <Col
              lg={6}
              xs={10}
              className="right text-center order-1 order-lg-2 d-flex justify-content-center ">
              <img
                src={Apartment1}
                alt="Apartment1"
                className="img-fluid h-75 mx-5"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Customer Reviews Section */}
      <section className="container mt-3">
        <h4 className="colorPrimary">The Results of Our Service in Action :</h4>
        <Swiper
          slidesPerView={3} // Default slides per view
          loop={true} // Enable looping
          spaceBetween={40} // Default space between slides
          className="my-5 swiperHome container"
          breakpoints={{
            1024: {
              slidesPerView: 3, // Desktop: 3 slides
              spaceBetween: 50,
            },
            768: {
              slidesPerView: 2, // Tablet: 2 slides
              spaceBetween: 30,
            },
            480: {
              slidesPerView: 1, // Mobile: 1 slide
              spaceBetween: 30,
            },
          }}>
          {cardData.map((card) => (
            <SwiperSlide key={card.id}>
              <Card
                className="border-0 container position-relative"
                style={{
                  width: "24rem",
                  margin: "auto",
                  background: "#FCFCFC",
                }}>
                <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center w-auto">
                  <img
                    src={before}
                    alt="before"
                    className="w-75 mb-3 mb-lg-0"
                  />
                  <img src={after} alt="after" className="w-75" />
                </div>
                <Card.Body className="container">
                  <Card.Text>
                    <h6 className="text-secondary">
                      <span className="colorPrimary">Project : </span>
                      {card.title}
                    </h6>
                  </Card.Text>
                  <Card.Text className="text-secondary">
                    {card.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <Footer />
    </>
  );
};

export default Bathroom;
