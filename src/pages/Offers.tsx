// src/pages/About.tsx
import Footer from "../components/Footer";
import HeroOffers from "../pages/Offers/HeroOffers";
import { Card, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Clock } from "react-bootstrap-icons"; // For the clock icon
import organize from "../assets/Upholstery.jpeg";
import cleaning from "../assets/roomLayout.jpeg";
import compelete from "../assets/Complete cleaning .png";
import wash from "../assets/Wash.png";

import "../../src/style/global.css";

const offers = [
  {
    title: "Disinfect + Organize Surfaces",
    oldPrice: "2500",
    newPrice: "1500",
    description:
      "Includes complete sterilization of all rooms with quality assurance",
    validUntil: "Valid until December 31st",
    image: organize,
  },
  {
    title: "Cleaning Rooms + Perfuming",
    oldPrice: "2500",
    newPrice: "1500",
    description:
      "Includes complete sterilization of all rooms with quality assurance",
    validUntil: "Valid until December 31st",
    image: cleaning,
  },
  {
    title: "Clean House + Sterilization",
    oldPrice: "2500",
    newPrice: "1500",
    description:
      "Includes complete sterilization of all rooms with quality assurance",
    validUntil: "Valid until December 31st",
    image: compelete,
  },
  {
    title: "Disinfect + Organize Surfaces",
    oldPrice: "2500",
    newPrice: "1500",
    description:
      "Includes complete sterilization of all rooms with quality assurance",
    validUntil: "Valid until December 31st",
    image: wash,
  },
  {
    title: "Cleaning Rooms + Perfuming",
    oldPrice: "2500",
    newPrice: "1500",
    description:
      "Includes complete sterilization of all rooms with quality assurance",
    validUntil: "Valid until December 31st",
    image: organize,
  },
  {
    title: "Clean House + Sterilization",
    oldPrice: "2500",
    newPrice: "1500",
    description:
      "Includes complete sterilization of all rooms with quality assurance",
    validUntil: "Valid until December 31st",
    image: cleaning,
  },
  {
    title: "Disinfect + Organize Surfaces",
    oldPrice: "2500",
    newPrice: "1500",
    description:
      "Includes complete sterilization of all rooms with quality assurance",
    validUntil: "Valid until December 31st",
    image: wash,
  },
  {
    title: "Cleaning Rooms + Perfuming",
    oldPrice: "2500",
    newPrice: "1500",
    description:
      "Includes complete sterilization of all rooms with quality assurance",
    validUntil: "Valid until December 31st",
    image: organize,
  },
  {
    title: "Clean House + Sterilization",
    oldPrice: "2500",
    newPrice: "1500",
    description:
      "Includes complete sterilization of all rooms with quality assurance",
    validUntil: "Valid until December 31st",
    image: cleaning,
  },
];
const Offers = () => {
  return (
    <>
      <HeroOffers />
      <section className="offers mt-5 h-100">
        <Container className="text-center">
          <Row className="gap-5 justify-content-center mx-auto">
            {offers.map((offer, index) => (
              <Col key={index} xs={12} sm={6} md={4} lg={3}>
                <Card
                  className="border-0 position-relative text-start"
                  style={{ width: "18rem", background: "#FCFCFC" }}>
                  <div
                    className="position-absolute end-0 text-white p-1 rounded-end"
                    style={{ backgroundColor: "#F7712E", top: "10px" }}>
                    Offer 10%
                  </div>
                  <Card.Img variant="top" src={offer.image} height={200} />
                  <Card.Body>
                    <h6 className="w-100">{offer.title}</h6>
                    <Card.Text>{offer.description}</Card.Text>
                    <Card.Text className="offer-text">
                      <Clock className="me-1" /> {offer.validUntil}
                    </Card.Text>
                    <div className="d-flex justify-content-center mt-3">
                      <Link to="/offerDetails">
                        <button
                          type="submit"
                          className="p-2 borderOrange bg-white rounded px-5 bookNow"
                          style={{ width: "auto" }} // Optional: Adjusts button width if necessary
                        >
                          View Details
                        </button>
                      </Link>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <Footer />
    </>
  );
};

export default Offers;
