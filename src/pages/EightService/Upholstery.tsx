import React from "react";
import Apartment1 from "../../assets/offersDetails.png";
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

const Upholstery: React.FC = () => {
  return (
    <>
      <Navbar />
      {/* Upholstery Cleaning Section */}
      <section className="serviceOne">
        <Container>
          <Row className="pt-5 gap-3 gap-lg-0">
            {/* Left Content Section */}
            <Col lg={6} xs={10} className="left order-2 order-lg-1">
              <h3 className="service-text">Upholstery Cleaning</h3>
              <div>
                <h5 className="my-3">Description :</h5>
                <p className="fs-5 text-secondary">
                  Upholstery cleaning enhances comfort and elegance in your
                  home. Our service includes:
                </p>

                <p className="fs-5 text-secondary my-3">
                  Deep cleaning sofas and chairs using steam or specialized
                  materials.
                </p>

                <p className="fs-5 text-secondary my-3">
                  Removing stains and unpleasant odors from carpets and fabrics.
                </p>

                <p className="fs-5 text-secondary my-3">
                  Sanitizing upholstery to ensure a healthy environment.
                </p>

                <p className="fs-5 text-secondary my-3">
                  Disinfecting high-touch surfaces such as tables, door handles,
                  and desks with strong and safe disinfectants.
                </p>

                <p className="fs-5 text-secondary my-3">
                  Using steam or chemical disinfectants to kill germs and
                  viruses effectively.
                </p>

                <p className="fs-5 text-secondary">
                  Focusing on high-risk areas such as kitchens and bathrooms.
                </p>
              </div>
            </Col>
            {/* Right Section */}
            <Col
              lg={6}
              xs={10}
              className="right text-center order-1 order-lg-2 d-flex justify-content-center">
              <img
                src={Apartment1}
                alt="Apartment1"
                className="img-fluid h-75 mx-auto"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Customer Reviews Section */}
      <section className="container">
        <h4 className="colorPrimary">The Results of Our Service in Action :</h4>
        <Swiper
          slidesPerView={1} // Default: Single card
          loop={true} // Enable infinite looping
          spaceBetween={30} // Default space between slides
          className="my-5 swiperHome"
          breakpoints={{
            1024: {
              slidesPerView: 3, // Large screens: 3 cards
              spaceBetween: 80,
            },
          }}>
          {cardData.map((card) => (
            <SwiperSlide key={card.id}>
              <Card
                className="border-0 position-relative"
                style={{
                  width: "24rem",
                  margin: "auto",
                  background: "#FCFCFC",
                }}>
                <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center w-auto">
                  <img src={before} alt="before" className=" mb-3 mb-lg-0" />
                  <img src={after} alt="after" className="" />
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

export default Upholstery;
