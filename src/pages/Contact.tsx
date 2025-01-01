// src/pages/conact.tsx
import SecondaryHero from "../../src/pages/ConatctUs/SecondaryHero";
import Footer from "../components/Footer";
import "react-bootstrap-icons";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Form from "react-bootstrap/Form";

import "../../src/style/global.css";

const ContactUS = () => (
  <>
    <SecondaryHero />

    <div className="hero-content">
      <h1 className="text-center text-white ">Contact Us</h1>
    </div>
    {/* Send Message Section */}
    <div className="d-flex justify-content-center align-items-center my-5 pb-5">
      <div className="container">
        <div className="rounded-3 shadow-sm p-5 bg-white">
          {/* Form Section */}
          <div className="container col-lg-6 col-12 py-5 px-0 mx-auto">
            <h3 className="pb-4 text-center">Send Message</h3>
            <Form>
              <Form.Group controlId="name" className="mb-4">
                <Form.Label className="text-secondary">First Name</Form.Label>
                <Form.Control type="text" className="borderOrange" />
              </Form.Group>

              <Form.Group controlId="Phone" className="mb-4">
                <Form.Label className="text-secondary">Phone Number</Form.Label>
                <Form.Control type="number" className="borderOrange" />
              </Form.Group>

              <Form.Group controlId="Massage.ControlTextarea1" className="mb-4">
                <Form.Label className="text-secondary">Message</Form.Label>
                <Form.Control as="textarea" className="borderOrange py-3" />
              </Form.Group>

              <button
                type="submit"
                className="btn-lg w-100 text-white d-flex align-items-center justify-content-center my-3 button py-2 rounded">
                Send Message
              </button>
            </Form>
          </div>

          {/* Contact Info Section */}
          <div className="container py-4 px-3">
            <Row className="justify-content-center ">
              {/* Phone Number */}
              <Col
                xs={12}
                md={6}
                lg={4}
                className="d-flex align-items-center gap-3 text-center text-lg-start mb-3 mb-lg-0">
                <i className="bi bi-telephone fs-4 textOrange"></i>
                <div>
                  <h6 className="mb-1">Phone Number</h6>
                  <p className="mb-0">01256784581</p>
                </div>
              </Col>

              {/* Email Address */}
              <Col
                xs={12}
                md={6}
                lg={4}
                className="d-flex align-items-center gap-3 text-center text-lg-start mb-3 mb-lg-0">
                <i className="bi bi-envelope fs-4 textOrange"></i>
                <div>
                  <h6 className="mb-1">Email Address</h6>
                  <p className="mb-0">Dubaihotelservice@gmail.com</p>
                </div>
              </Col>

              {/* Location */}
              <Col
                xs={12}
                lg={4}
                className="d-flex align-items-center gap-3 text-center text-lg-start">
                <i className="bi bi-geo-alt-fill fs-4 textOrange"></i>
                <div>
                  <h6 className="mb-1">Location</h6>
                  <p className="mb-0">Dubai, 1244 Street</p>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </>
);

export default ContactUS;
